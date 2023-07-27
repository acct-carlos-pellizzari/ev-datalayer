import { createContext } from 'react';
import { useImmer } from 'use-immer';

interface Props {
  children: React.ReactNode;
}

/**
 * Creates a statically typed context taking an initial state as a parameter.
 *
 * The created contex provides a tuple containing its current state and an update function
 *
 * It uses Immer internally as the update engine for added safety and immutability
 *
 * @param init Initial state
 * @param name Context name (purely aestethic)
 * @returns A tuple containing the new context and its provider
 */

export function createContextLayer<T>(init: T, name?: string) {
  type ContextType = [T, (newState: T) => void];

  const Context = createContext<ContextType>([init, () => {}]);
  name && (Context.displayName = name);

  const Provider = ({ children }: Props) => {
    const [state, produce] = useImmer(init);

    const setState = (newState: T) => produce(draft => ({ ...draft, ...newState }));

    return <Context.Provider value={[state, setState]}>{children}</Context.Provider>;
  };

  const dataTuple: [typeof Context, typeof Provider] = [Context, Provider];

  return dataTuple;
}
