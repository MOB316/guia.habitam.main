import { Navigate } from 'react-router-dom';
import { DEFAULT_PROPERTY_SLUG } from '@/data/propertyData';

const Index = () => {
  return <Navigate to={`/${DEFAULT_PROPERTY_SLUG}`} replace />;
};

export default Index;
