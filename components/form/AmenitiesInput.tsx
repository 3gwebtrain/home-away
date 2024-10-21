'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { amenities, Amenity } from '@/utils/amenities';
import { useState } from 'react';

export default function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }): JSX.Element {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(defaultValue || amenities);

  const handleChange = (amenity: Amenity): void => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };

  return (
    <section>
      <input type="hidden" name="amenities" value={JSON.stringify(selectedAmenities)} />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map(
          (amenity): JSX.Element => (
            <div key={amenity.name} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
              >
                {amenity.name}
                <amenity.icon className="w-4 h-4" />
              </label>
            </div>
          )
        )}
      </div>
    </section>
  );
}
