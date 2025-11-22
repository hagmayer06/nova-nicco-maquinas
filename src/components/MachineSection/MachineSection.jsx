import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
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
      className="relative bg-nicco-gray py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-nicco-orange font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 tracking-wide">
            {title}
          </h2>
          <div className="w-24 h-1 bg-nicco-orange mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-14">
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
          <div className="flex justify-center">
            <button
              onClick={handleToggleClick}
              className="flex items-center justify-center gap-2 bg-nicco-orange hover:bg-nicco-orange-dark text-black font-bebas text-lg md:text-xl lg:text-2xl px-10 md:px-14 lg:px-16 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-nicco-orange/50 hover:scale-105 active:scale-95"
            >
              {visibleCount < machines.length ? (
                <>
                  <FaChevronDown className="w-5 h-5" />
                  <span>Ver Mais Máquinas</span>
                </>
              ) : (
                <>
                  <FaChevronUp className="w-5 h-5" />
                  <span>Mostrar Menos</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
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
