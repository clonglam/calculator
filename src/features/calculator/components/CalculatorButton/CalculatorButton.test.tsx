import { render } from "@testing-library/react"
import { CalculatorButton } from "../CalculatorButton/CalculatorButton"
import { describe, expect, it } from "vitest"
import { useCalculatorStore } from "../../stores/use-calculator-store"

describe("CalculatorButton", () => {
  it("should render successfully", async () => {
    const label = "1"
    const { getByText } = renderCalculatorButton(label)

    const button = getByText(label)
    expect(button).toBeInTheDocument()
  })

  it("should call setExpression when button is clicked", async () => {
    const label = "1"
    const { getByText } = renderCalculatorButton(label)

    const button = getByText(label)
    button.click()

    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe(label)
  })

  it("should call handleClear when button is clicked", async () => {
    const label = "CE"
    const { getByText } = renderCalculatorButton(label)

    const button = getByText(label)
    button.click()

    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe("")
  })

  it("should call handleEvaluate when button is clicked", async () => {
    const label = "="
    const { getByText } = renderCalculatorButton(label)

    const button = getByText(label)
    button.click()

    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe("")
  })

  it("should call handleOperator when an operator button is clicked", async () => {
    const label = "+"
    const { getByText } = renderCalculatorButton(label)
    const button = getByText(label)
    button.click()
    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe(label)
  })

  it("should call handleNumber when a number button is clicked", async () => {
    const label = "5"
    const { getByText } = renderCalculatorButton(label)
    const button = getByText(label)
    button.click()
    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe(label)
  })

  it("should call handleDecimal when the decimal button is clicked", async () => {
    const label = "."
    const { getByText } = renderCalculatorButton(label)
    const button = getByText(label)
    button.click()
    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe(label)
  })
})

const renderCalculatorButton = (value: string) => {
  return render(<CalculatorButton value={value} />)
}
