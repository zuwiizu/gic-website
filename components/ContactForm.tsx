'use client';

import * as React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Turnstile } from './ui/turnstile';
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
  phone: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  services: string[];
  hearAbout: string;
  newsletter: boolean;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  organization: '',
  role: '',
  phone: '',
  subject: '',
  message: '',
  budget: '',
  timeline: '',
  services: [],
  hearAbout: '',
  newsletter: false
};

const services = [
  'Cultural Competency Training',
  'Crisis Response & Mediation',
  'Organizational Development',
  'Assessment & Evaluation',
  'Strategic Consulting',
  'Speaking & Workshops'
];

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = React.useState<string>('');
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
    
    if (!turnstileToken) {
      announceToScreenReader('Please complete the security verification.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData(initialFormData);
      setTurnstileToken('');
      announceToScreenReader('Your message has been sent successfully. We will get back to you within 24 hours.');
    } catch (error) {
      setSubmitStatus('error');
      announceToScreenReader('There was an error sending your message. Please try again.');
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

      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1"
          placeholder="(555) 123-4567"
        />
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

      {/* Security */}
      <div className="border-t border-gray-200 pt-6">
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Security Verification *
        </Label>
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
          onVerify={setTurnstileToken}
          onError={() => setTurnstileToken('')}
          onExpire={() => setTurnstileToken('')}
        />
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-200 pt-6">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleInputChange}
            className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded mt-0.5"
          />
          <div>
            <span className="text-sm font-medium text-gray-700">
              Subscribe to our newsletter
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Receive monthly insights on diversity, inclusion, and community building
            </p>
          </div>
        </label>
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
          disabled={isSubmitting || !turnstileToken}
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
