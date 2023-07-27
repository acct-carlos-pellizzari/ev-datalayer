import { createContextLayer } from './ContextBuilder';

interface Props {
  children: React.ReactNode;
}

const initState: Product = {
  skuId: '',
  name: '',
  quantity: 0
};

const [InverterContext, Provider] = createContextLayer(initState, 'Inverter');

export default function InverterProvider({ children }: Props) {
  return <Provider>{children}</Provider>;
}

export { InverterContext };
