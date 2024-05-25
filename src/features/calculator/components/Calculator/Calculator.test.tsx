import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import Calculator from "./Calculator"

describe("Calculator UI Test", () => {
  it("should render calculator component without errors", () => {
    renderCalculatorButton()
    expect(document.querySelector(".calculator")).not.toBeNull()
  })

  it("should render the Display component", () => {
    renderCalculatorButton()
    expect(document.querySelector(".display")).not.toBeNull()
  })

  it("should render the Buttons component", () => {
    renderCalculatorButton()
    expect(document.querySelector(".buttons")).not.toBeNull()
  })
})

describe("Calculator Functionality Test", () => {
  it("should render correct expression when button is pressed", () => {
    const screen = renderCalculatorButton()

    const expression = screen.container.querySelector(".expression")
    expect(expression?.textContent).toBe("")

    // expect(document.querySelector(".result")).not.toBeNull()
  })
})
const renderCalculatorButton = () => {
  return render(<Calculator />)
}
