import { useContext } from 'react';
import InverterProvider, { InverterContext } from './InverterLayer';
import ModuleProvider, { ModuleContext } from './ModuleLayer';

interface Props {
  children: React.ReactNode;
}

export function useKit() {
  return {
    moduleData: useContext(ModuleContext),
    inverterData: useContext(InverterContext)
  };
}

export function KitData({ children }: Props) {
  return (
    <ModuleProvider>
      <InverterProvider>{children}</InverterProvider>
    </ModuleProvider>
  );
}
