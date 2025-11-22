import React from 'react';
import PropTypes from 'prop-types';

const MachineCard = ({ name, image, description, price }) => {
  return (
    <article className="flex-shrink-0 w-[240px] sm:w-[250px] md:w-[260px] lg:w-[280px] xl:w-[320px] 2xl:w-[480px] max-w-[95vw] h-auto p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 flex flex-col justify-start items-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 bg-[#2c2f33] rounded-lg md:rounded-xl 2xl:rounded-[18px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] hover:-translate-y-0.5">
      {/* Image */}
      <div className="w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-[120px] sm:h-[130px] md:h-[150px] lg:h-[170px] xl:h-[200px] 2xl:h-[340px] object-cover rounded-md md:rounded-lg 2xl:rounded-[15px] border-2 md:border-[3px] 2xl:border-[5px] border-nicco-orange"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="text-nicco-orange text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.4em] mb-1 sm:mb-1.5 md:mb-2 font-semibold leading-tight">
          {name}
        </h3>

        <div className="w-full">
          <p className="bg-nicco-gray-light text-gray-300 p-1.5 sm:p-2 md:p-2.5 lg:p-3 2xl:p-4 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-left leading-relaxed">
            {description}
          </p>
        </div>

        <div className="text-nicco-orange text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[3.6rem] font-bold mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3">
          {price}
        </div>
      </div>
    </article>
  );
};

MachineCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MachineCard;
