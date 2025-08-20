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



      <ServicesGrid />
    </>
  );
}