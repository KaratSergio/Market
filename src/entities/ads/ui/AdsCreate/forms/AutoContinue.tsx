import { FC } from 'react';
import { Switch } from '@shared/index';
import { useFormContext } from 'react-hook-form';
import { Ad } from '../../../model/types';

export const AutoContinue: FC = () => {
  const { register } = useFormContext<Ad>();

  return (
    <div className="flex items-center gap-[40px] rounded-[16px] bg-neutral-100 p-13 pl-22">
      <div>
        <h3 className="text-2xl font-medium">Auto-continue</h3>
        <p className="text-[16px] font-normal text-gray-400">The ad will be deactivated after 30 days</p>
      </div>
      <Switch name="autoContinue" register={register} />
    </div>
  );
};