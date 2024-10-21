import { PropertyCardProps } from '@/utils/types';
import PropertyCard from '../card/PropertyCard';

export default function PropertiesList({ properties }: { properties: PropertyCardProps[] }): JSX.Element {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-4'>
      {properties.map(
        (property: PropertyCardProps): JSX.Element => (
          <PropertyCard key={property.id} property={property} />
        )
      )}
    </section>
  );
}
