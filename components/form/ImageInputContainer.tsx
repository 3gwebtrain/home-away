'use client';
import { type actionFunction } from '@/utils/types';
import Image from 'next/image';
import { useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import { Button } from '../ui/button';
import { SubmitButton } from './Buttons';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

export default function ImageInputContainer(props: ImageInputContainerProps): JSX.Element {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const userIcon = <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />;
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}
      <Button variant={'outline'} size={'sm'} onClick={() => setUpdateFormVisible((prev) => !prev)}>
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children} <ImageInput />
            <SubmitButton size={'sm'} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}