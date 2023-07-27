import ProductPicker from '../components/ProductPicker';
import { useKit } from '../context/KitData';
import modules from '../data/modules.json';

export default function ModuleStep() {
  const {
    moduleData: [module, setModule]
  } = useKit();

  return (
    <>
      <ProductPicker
        currentProduct={module}
        options={modules.map(prod => ({ name: prod.name, value: prod.skuId }))}
        changeHandler={setModule}
      />
    </>
  );
}
