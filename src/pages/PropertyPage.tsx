import { LanguageProvider } from '@/contexts/LanguageContext';
import { properties } from '@/data/propertyData';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/habitam/Header';
import HeroSection from '@/components/habitam/HeroSection';
import QuickInfoSection from '@/components/habitam/QuickInfoSection';
import InventorySection from '@/components/habitam/InventorySection';
import HowToUseSection from '@/components/habitam/HowToUseSection';
import NearbyPlacesSection from '@/components/habitam/NearbyPlacesSection';
import MobilitySection from '@/components/habitam/MobilitySection';
import RecommendationsSection from '@/components/habitam/RecommendationsSection';
import ContactsSection from '@/components/habitam/ContactsSection';
import FAQSection from '@/components/habitam/FAQSection';
import FooterSection from '@/components/habitam/FooterSection';

const PropertyPage = () => {
  const { propertyId } = useParams();

  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return <Navigate to="/404" replace />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header propertyName={property.name} />
        <HeroSection property={property} />
        <QuickInfoSection property={property} />
        <InventorySection property={property} />
        <HowToUseSection property={property} />
        <NearbyPlacesSection property={property} />
        <MobilitySection property={property} />
        <RecommendationsSection property={property} />
        <ContactsSection property={property} />
        <FAQSection property={property} />
        <FooterSection property={property} />
      </div>
    </LanguageProvider>
  );
};

export default PropertyPage;
