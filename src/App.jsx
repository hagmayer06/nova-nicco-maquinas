import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MachineNavigation from './components/MachineNavigation/MachineNavigation';
import MachineSection from './components/MachineSection/MachineSection';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { forestalMachines, excavatorMachines, retroMachines, loaderMachines } from './data/machines';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <MachineNavigation />
      <MachineSection
        id="florestal"
        title="Máquinas Florestais"
        machines={forestalMachines}
      />
      <MachineSection
        id="Esca"
        title="Escavadeiras"
        machines={excavatorMachines}
      />
      <MachineSection
        id="retro"
        title="Retroescavadeiras"
        machines={retroMachines}
      />
      <MachineSection
        id="pá carregadeira"
        title="Pá-Carregadeiras"
        machines={loaderMachines}
      />
      <About />
      <Footer />
    </div>
  );
}

export default App;

