import Hero from '../components/Hero';
import AudienceSection from '../components/AudienceSection';
import ServicesGrid from '../components/ServicesGrid';


import { StructuredData } from '../components/StructuredData';
import { organizationSchema, serviceSchema } from '../lib/structured-data-schemas';

export const metadata = {
  title: 'Global Insights Collective | Inclusive Communities Across Campuses & Workplaces',
  description: 'We help universities, employers and public agencies translate cultural awareness into measurable outcomes—safer communities, stronger belonging, and better results.',
};

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <Hero />

      {/* Trust/Proof Band */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Trusted by Leading Organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">50+</div>
              <div className="text-sm text-gray-500">Organizations Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">1,000+</div>
              <div className="text-sm text-gray-500">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">45%</div>
              <div className="text-sm text-gray-500">Avg. Incident Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">27%</div>
              <div className="text-sm text-gray-500">Satisfaction Increase</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
    </>
  );
}