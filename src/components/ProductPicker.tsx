import QuantityPicker from './QuantityPicker';

interface Props {
  options: {
    name: string;
    value: string;
  }[];
  changeHandler: (product: Product) => void;
  currentProduct: Product;
}

export default function ProductPicker({ options, changeHandler, currentProduct }: Props) {
  return (
    <>
      <select
        value={currentProduct.skuId}
        onChange={e => {
          changeHandler({
            ...currentProduct,
            skuId: e.target.value,
            name: options.find(opt => opt.value === e.target.value)?.name ?? ''
          });
        }}
      >
        {options.map(opt => (
          <option value={opt.value} key={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      <QuantityPicker
        value={currentProduct.quantity}
        setQuantity={(quantity: number) => changeHandler({ ...currentProduct, quantity })}
      />
    </>
  );
}
