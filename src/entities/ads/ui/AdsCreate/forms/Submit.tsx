import { FC } from 'react';
import { Button } from '@shared/index';

export const Submit: FC = () => {
  return (
    <div className="mt-8 flex items-center justify-end gap-16 rounded-[16px] bg-neutral-100 p-9 pr-10">
      <a href="#" className="text-[32px] font-medium text-black underline">
        Preview
      </a>
      <Button type="submit" variant="tertiary" className="h-[87px] w-[197px] text-[32px] font-medium">
        Publish
      </Button>
    </div>
  );
};
