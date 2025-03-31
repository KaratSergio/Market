import { FC } from 'react';
import { Textarea } from '@shared/index';
import { useFormContext } from 'react-hook-form';
import { Ad } from '../../../model/types';

export const Description: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>();

  return (
    <div className="flex flex-col gap-5 rounded-[16px] bg-neutral-100 p-[24px_88px]">
      <h3 className="text-lg font-medium">Description</h3>
      <Textarea
        name="description"
        className="h-[534px] w-[1100px]"
        register={register}
        placeholder="Add a description of your ad"
        error={errors.description?.message}
      />
      <p className="mb-10 text-[24px] font-medium text-gray-400">Please enter at least 40 characters</p>
    </div>
  );
};
