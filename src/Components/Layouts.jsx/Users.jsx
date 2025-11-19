import React from 'react';
import Image from '../Image';

import Circooles from '/src/assets/Circooles.png';
import Quotient from '/src/assets/Quotient.png';
import Hourglass from '/src/assets/Hourglass.png';
import Command from '/src/assets/Command.png';
import Catalog from '/src/assets/Catalog.png';
import Layers from '/src/assets/Layers.png';

const Users = () => {
  const images = [Circooles, Quotient, Hourglass, Command, Catalog, Layers];

  return (
    <div className="pt-5 pb-7 md:pb-[41px] w-full overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4">

        <h3 className='text-center text-TextColor font-medium text-xl pb-8'>
          Loved by 25 million+ users
        </h3>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 md:gap-x-0 lg:gap-y-0 lg:gap-x-[55px] items-center justify-center">
          {images.map((img, idx) => (
            <div key={idx} className="dark:invert flex justify-center">
              <Image imgsrc={img} className=" w-[120px] lg:w-full" />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60 dark:bg-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Users;
