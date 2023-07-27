import { createContextLayer } from './ContextBuilder';

interface Props {
  children: React.ReactNode;
}

const initState: Product = {
  skuId: '',
  name: '',
  quantity: 0
};

const [ModuleContext, Provider] = createContextLayer(initState, 'Modules');

export default function ModuleProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}

export { ModuleContext };
