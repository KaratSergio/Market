import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, Select } from '@shared/index';
import { Ad } from '../../../model/types';

const CATEGORY = [
  'Help',
  "Children's World",
  'Real Estate',
  'Cars',
  'Animals',
  'Home & Garden',
  'Electronics',
  'Business & Services',
  'Rent & Hire',
  'Fashion & Style',
  'Hobbies & Sports',
  'Giveaway',
  'Exchange',
  'Gamer Goods',
];

export const Details: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>();
  return (
    <div className="container flex flex-col gap-6 rounded-[16px] bg-neutral-100 p-10 pr-94 pl-22">
      <h3 className="text-[32px] font-medium">Describe in detail</h3>
      <Input
        label="Enter a name"
        name="name"
        placeholder="Iphone 16 Pro Max"
        register={register}
        error={errors.name?.message}
      />
      <Select
        label="Category"
        name="category"
        options={CATEGORY}
        placeholder="Choose a category"
        register={register}
        error={errors.category?.message}
      />
    </div>
  );
};
