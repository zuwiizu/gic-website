import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { ContactForm } from '../../components/ContactForm';
import {
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'info@globalinsightscollective.com',
    description: 'Send us an email anytime',
    href: 'mailto:info@globalinsightscollective.com'
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'Remote-First Organization',
    description: 'Serving clients globally',
    href: null
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: 'Within 24 hours',
    description: 'We respond to all inquiries promptly',
    href: null
  }
];

const faqs = [
  {
    question: 'What types of organizations do you work with?',
    answer: 'We work with universities, corporations, and organizations of all sizes. Our approach is tailored to each organization\'s unique context and challenges.'
  },
  {
    question: 'Do you offer virtual training and consulting?',
    answer: 'Yes, we provide both in-person and virtual services. Our virtual programs are designed to be highly interactive and engaging, with proven effectiveness across different formats.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Training workshops can be delivered within 2-4 weeks, while comprehensive consulting projects typically take 6-12 weeks. We work with your schedule and priorities.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We use evidence-based metrics including engagement surveys, performance indicators, and satisfaction scores. Every engagement includes clear success metrics established upfront.'
  }
];

export const metadata = {
  title: 'Contact Us | Global Insights Collective',
  description: 'Get in touch with our team to discuss how we can help your organization build more inclusive communities. 24/7 crisis response available.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Contact' }]}
        className="bg-white border-b border-gray-200"
      />

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to create more inclusive communities? Let's discuss how we can help your organization achieve meaningful, measurable change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-brand-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-brand-600 font-medium">
                          {item.details}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <Link
                      key={index}
                      href={item.href}
                      className="block hover:bg-gray-50 rounded-lg p-3 -m-3 transition-colors"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={index} className="p-3 -m-3">
                      {content}
                    </div>
                  );
                })}
              </div>


            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and how we work with organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-brand-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the 50+ organizations that have transformed their communities with our evidence-based approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact-form">
                Send us a Message
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100">
              <Link href="/case-studies">
                See Our Results
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
