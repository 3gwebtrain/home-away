'use client';

import { toggleFavoriteAction } from '@/utils/actions';
import { usePathname } from 'next/navigation';
import { CardSubmitButton } from '../form/Buttons';
import FormContainer from '../form/FormContainer';

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

export default function FavoriteToggleForm({ propertyId, favoriteId }: FavoriteToggleFormProps): JSX.Element {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
