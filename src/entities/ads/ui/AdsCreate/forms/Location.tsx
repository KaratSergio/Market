import { FC } from 'react';
import { Select } from '@shared/index';
import { useFormContext } from 'react-hook-form';
import { Ad } from '../../../model/types';

const LOCATION = ['Kyiv', 'Lviv', 'Ternopil', 'Dnipro'];

export const Location: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Ad>();

  return (
    <div className="flex flex-col gap-5 rounded-[16px] bg-neutral-100 p-11 pl-22">
      <Select
        label="Location"
        name="location"
        options={LOCATION}
        className="w-90"
        placeholder="Сhoose a district"
        register={register}
        error={errors.location?.message}
      />
    </div>
  );
};
