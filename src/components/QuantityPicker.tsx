import { useState } from 'react';

interface Props {
  value: number;
  setQuantity: (value: number) => void;
}

export default function QuantityPicker({ value, setQuantity }: Props) {
  const [internalQuantity, setInternalQuantity] = useState(value);

  return (
    <div className='quantity-selector'>
      <button
        type='button'
        onClick={() =>
          setInternalQuantity(prev => {
            const result = prev > 0 ? prev - 1 : prev;
            setQuantity(result);
            return result;
          })
        }
      >
        -
      </button>
      <input
        type='tel'
        value={internalQuantity}
        onChange={e => {
          const fieldValue = +e.currentTarget.value;
          const result = Number.isNaN(fieldValue) ? internalQuantity : fieldValue;
          setInternalQuantity(result);
          setQuantity(result);
        }}
      />
      <button
        type='button'
        onClick={() =>
          setInternalQuantity(prev => {
            setQuantity(prev + 1);
            return prev + 1;
          })
        }
      >
        +
      </button>
    </div>
  );
}
