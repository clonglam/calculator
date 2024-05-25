import { act, render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Calculator from "./Calculator"
// import { useCalculatorStore } from "../../stores/use-calculator-store"

describe("Calculator", () => {
  it("renders without errors", () => {
    renderCalculatorButton()
  })

  it("shows the expression", () => {
    const screen = renderCalculatorButton()
    const expression = screen.getByText("expression")

    expect(expression).toBeInTheDocument()
  })
})

const renderCalculatorButton = () => {
  return render(<Calculator />)
}
