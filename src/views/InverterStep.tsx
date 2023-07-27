import ProductPicker from '../components/ProductPicker';
import { useKit } from '../context/KitData';
import inverters from '../data/inverters.json';

export default function InverterStep() {
  const {
    inverterData: [inverter, setInverter]
  } = useKit();
  return (
    <ProductPicker
      currentProduct={inverter}
      options={inverters.map(prod => ({ name: prod.name, value: prod.skuId }))}
      changeHandler={setInverter}
    />
  );
}
