import { act, fireEvent, render, renderHook } from "@testing-library/react"
import { describe, it } from "vitest"
import Calculator from "./Calculator"
import { useCalculatorStore } from "../../hooks/useCalculatorStore"

describe("Calculator UI Test", () => {
  it("should render calculator component without errors", () => {
    const screen = renderCalculatorButton()
    expect(screen.container.querySelector(".calculator")).not.toBeNull()
    expect(document.querySelector(".display")).not.toBeNull()
    expect(document.querySelector(".buttons")).not.toBeNull()
  })
})

describe("Calculator Functionality Test", () => {
  it("should render correct expression when button is pressed", () => {
    const screen = renderCalculatorButton()

    const expression = screen.container.querySelector(".expression")
    expect(expression?.textContent).toBe("")

    for (let i = 0; i < 10; i++) {
      const button = screen.getByRole("button", { name: `${i}` })

      act(() => {
        fireEvent.click(button)
      })
    }

    expect(expression?.textContent).toBe("0123456789")
  })

  it("should clear the expression when CE is clicked", () => {
    const screen = renderCalculatorButton()

    const expression = screen.container.querySelector(".expression")
    expect(expression?.textContent).toBe("")

    const button = screen.getByRole("button", { name: "CE" })

    act(() => {
      fireEvent.click(button)
    })

    expect(expression?.textContent).toBe("")
  })

  it("should evaluate the expression when = is clicked", () => {
    const screen = renderCalculatorButton()

    const expression = screen.container.querySelector(".expression")
    const result = screen.container.querySelector(".result")
    const buttonOne = screen.getByRole("button", { name: "1" })
    const equalButton = screen.getByRole("button", { name: "=" })

    // check if the expression and result are empty
    expect(expression?.textContent).toBe("")
    expect(result?.textContent).toBe("0")

    act(() => {
      fireEvent.click(buttonOne)
    })

    expect(expression?.textContent).toBe("1")

    act(() => {
      fireEvent.click(equalButton)
    })

    expect(expression?.textContent).toBe("")
    expect(result?.textContent).toBe("1")
  })
})

it("should render error when invalid expression is entered", async () => {
  const screen = renderCalculatorButton()
  const calculatorStore = renderHook(() => useCalculatorStore())

  const expression = screen.container.querySelector(".expression")
  const result = screen.container.querySelector(".result")

  expect(expression?.textContent).toBe("")
  expect(result?.textContent).toBe("0")

  const divButton = screen.getByRole("button", { name: "/" })
  const zeroButton = screen.getByRole("button", { name: "0" })
  const equalButton = screen.getByRole("button", { name: "=" })

  expect(calculatorStore.result.current.expression).toBe("")

  act(() => {
    fireEvent.click(divButton)
    fireEvent.click(zeroButton)
  })

  expect(calculatorStore.result.current.expression).toBe("/0")

  fireEvent.click(equalButton)

  expect(calculatorStore.result.current.result).toBe("Error")
})

const renderCalculatorButton = () => {
  return render(<Calculator />)
}
