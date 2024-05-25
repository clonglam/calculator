import { create } from "zustand"
import {
  CalculatorStore,
  calculatorStoreCreator,
} from "./calculator-store-creator"

export const useCalculatorStore = create<CalculatorStore>()(
  calculatorStoreCreator
)
