import Log from './components/Log';
import Stepper from './components/Stepper';
import { KitData } from './context/KitData';
import InverterStep from './views/InverterStep';
import ModuleStep from './views/ModuleStep';

export default function App() {
  const steps = [
    {
      name: 'Modules',
      component: <ModuleStep />
    },
    {
      name: 'Inverters',
      component: <InverterStep />
    }
  ];

  return (
    <KitData>
      <Stepper steps={steps} />
      <Log />
    </KitData>
  );
}
