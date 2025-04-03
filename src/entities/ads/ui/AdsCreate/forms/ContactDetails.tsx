import { FC } from 'react';
import { Input } from '@shared/index';
import { useFormContext } from 'react-hook-form';
import { Ad } from '../../../model/types';

export const ContactDetails: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>();

  return (
    <div className="flex flex-col gap-6 rounded-[16px] bg-neutral-100 p-6 pl-22">
      <h3 className="text-[36px] font-medium">Your contact details</h3>
      <Input
        label="Contact person"
        name="contactPerson.name" 
        className="w-90"
        register={register}
        placeholder="Enter your name"
        error={errors.contactPerson?.message}
      />
      <Input
        label="Email-address"
        type="email"
        name="contactPerson.email"
        className="w-90"
        register={register}
        placeholder="Enter your email"
        error={errors.contactPerson?.email?.message}
      />
      <Input
        label="Phone number"
        type="tel"
        name="contactPerson.phone"
        className="w-90"
        register={register}
        placeholder="Enter your phone"
        error={errors.contactPerson?.phone?.message}
      />
    </div>
  );
};
