import { render, screen, fireEvent } from "@testing-library/react"
import Calculator from "../Calculator"
import { describe, expect, test } from "vitest"

describe("Calculator", () => {
  test("renders calculator component", () => {
    renderCalculator()
    const calculatorElement = screen.getByTestId("calculator")
    expect(calculatorElement).toBeInTheDocument()
  })

  test("displays the correct initial value", () => {
    renderCalculator()
    const displayElement = screen.getByTestId("display")
    expect(displayElement.textContent).toBe("0")
  })

  test("updates the display value when a button is clicked", () => {
    renderCalculator()
    const buttonElement = screen.getByTestId("button-1")
    const displayElement = screen.getByTestId("display")

    fireEvent.click(buttonElement)
    expect(displayElement.textContent).toBe("1")
  })

  // Add more tests for other calculator functionality
})

const renderCalculator = () => {
  return render(<Calculator />)
}
