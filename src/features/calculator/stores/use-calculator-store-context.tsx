import {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from "react"
import { type StoreApi, createStore } from "zustand"
import { useStoreWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/shallow"

import {
  type CalculatorStore,
  calculatorStoreCreator,
} from "./calculator-store-creator"

export const createCalculatorStore = () => {
  return createStore<CalculatorStore>(calculatorStoreCreator)
}

export const CalculatorStoreContext = createContext<StoreApi<CalculatorStore>>(
  null as never
)

export type CalculatorStoreProviderProps = PropsWithChildren

export const CalculatorStoreProvider = ({
  children,
}: CalculatorStoreProviderProps) => {
  const CalculatorStoreRef = useRef(createCalculatorStore())

  return (
    <CalculatorStoreContext.Provider value={CalculatorStoreRef.current}>
      {children}
    </CalculatorStoreContext.Provider>
  )
}

export type UseCalculatorStoreContextSelector<T> = (store: CalculatorStore) => T

export const useCalculatorStoreContext = <T,>(
  selector: UseCalculatorStoreContextSelector<T>
): T => {
  const calculatorStoreContext = useContext(CalculatorStoreContext)

  if (calculatorStoreContext === undefined) {
    throw new Error(
      "useCalculatorStoreContext must be used within CalculatorStoreProvider"
    )
  }

  return useStoreWithEqualityFn(calculatorStoreContext, selector, shallow)
}
