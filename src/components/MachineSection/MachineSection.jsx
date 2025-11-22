import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MachineCard from '../MachineCard/MachineCard';

const MachineSection = ({ id, title, machines }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggleClick = () => {
    if (visibleCount >= machines.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const hasMoreMachines = machines.length > 3;

  return (
    <section
      id={id}
      className="bg-nicco-gray py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Title */}
      <h2 className="text-nicco-orange font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center mb-8 sm:mb-12 md:mb-16 uppercase tracking-wide">
        {title}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center max-w-[1600px] mx-auto">
        {machines.slice(0, visibleCount).map((machine) => (
          <MachineCard
            key={machine.id}
            name={machine.name}
            image={machine.image}
            description={machine.description}
            price={machine.price}
          />
        ))}
      </div>

      {/* Button */}
      {hasMoreMachines && (
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
          <button
            onClick={handleToggleClick}
            className="bg-nicco-orange text-black font-bebas text-lg sm:text-xl md:text-2xl lg:text-3xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-nicco-orange-dark hover:shadow-[0_6px_16px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0"
          >
            {visibleCount < machines.length ? 'Saiba Mais' : 'Mostrar Menos'}
          </button>
        </div>
      )}
    </section>
  );
};

MachineSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  machines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MachineSection;

