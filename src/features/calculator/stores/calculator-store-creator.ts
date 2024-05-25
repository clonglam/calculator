import { evaluate } from "mathjs"
import { type StateCreator } from "zustand"

export type CalculatorStore = {
  expression: string
  result: string
  handleClear: () => void
  handleEvaluate: (expression: string) => void
  setExpression: (value: string) => void
}

export const calculatorStoreCreator: StateCreator<CalculatorStore> = (set) => ({
  expression: "",
  result: "0",
  handleClear: () => {
    set({ expression: "" })
  },

  setExpression: (value: string) =>
    set((state) => ({ expression: state.expression + value })),

  handleEvaluate: (expression) => {
    try {
      set({ result: evaluate(expression) })
      console.log("expression", expression)
      set({ expression: "" })
    } catch (error) {
      set({ result: "Error" })
    }
  },
})
