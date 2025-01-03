import { memo } from 'react';
import Image from 'next/image';
import { SearchIcon } from '@/components/ui/search';
import { MapPinIcon } from '@/components/ui/map-pin';

export const RightActions = memo(() => {
  return (
    <div className="flex items-center gap-4 fixed right-0 pr-4">
      <button aria-label="Search">
        <SearchIcon />   
      </button>
      <button aria-label="Location">
        <MapPinIcon />
      </button>
      <button className="flex items-center justify-center w-[50px] h-[50px]" aria-label="Language">
        <Image 
          src="/images/vietnam.png" 
          alt="Vietnam Flag" 
          width={50} 
          height={50}
          className="object-contain"
        />
      </button>
    </div>
  );
});

RightActions.displayName = 'RightActions'; 