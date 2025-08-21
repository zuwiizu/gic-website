'use client';

import * as React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useAccessibility } from './providers/accessibility-provider';
import {
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  services: string[];
  hearAbout: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  organization: '',
  role: '',
  subject: '',
  message: '',
  budget: '',
  timeline: '',
  services: [],
  hearAbout: ''
};

const services = [
  'International Student Support',
  'Corporate Training & Cultural Competency',
  'Workplace Transformation Programs',
  'Strategic Consulting',
  'Speaking Engagements',
  'Other'
];

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const { announceToScreenReader } = useAccessibility();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Use Cloudflare Worker endpoint for email API
      const workerUrl = process.env.NODE_ENV === 'production' 
        ? 'https://gic-contact-api.iwarsame8.workers.dev'
        : 'http://localhost:8787';
      
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          service: formData.services.join(', '),
          turnstileToken: 'temp-bypass' // TODO: Add proper Turnstile integration
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        announceToScreenReader('Your message has been sent successfully. We will get back to you within 24 hours.');
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      announceToScreenReader('There was an error sending your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1"
            aria-describedby="name-help"
          />
          <p id="name-help" className="mt-1 text-xs text-gray-500">
            Your first and last name
          </p>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1"
            aria-describedby="email-help"
          />
          <p id="email-help" className="mt-1 text-xs text-gray-500">
            We'll use this to respond to your inquiry
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
            Organization *
          </Label>
          <Input
            id="organization"
            name="organization"
            type="text"
            required
            value={formData.organization}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="role" className="text-sm font-medium text-gray-700">
            Your Role
          </Label>
          <Input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleInputChange}
            className="mt-1"
            placeholder="e.g., Director of Student Affairs"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Project Details</h3>
        
        <div>
          <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="mt-1"
            placeholder="Brief description of your inquiry"
          />
        </div>

        <div className="mt-6">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1"
            placeholder="Please describe your needs, challenges, and what you hope to achieve..."
          />
        </div>

        <div className="mt-6">
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Services of Interest (select all that apply)
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service) => (
              <label key={service} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={(e) => handleServiceChange(service, e.target.checked)}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="border-t border-gray-200 pt-6">
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm text-green-800">
              Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
            </span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-sm text-red-800">
              There was an error sending your message. Please try again or contact us directly.
            </span>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        <p className="mt-2 text-xs text-gray-500">
          * Required fields. We typically respond within 24 hours during business days.
        </p>
      </div>
    </form>
  );
}