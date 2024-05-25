import { act, fireEvent, render } from "@testing-library/react"
import { CalculatorButton } from "../CalculatorButton/CalculatorButton"
import { describe, expect, it } from "vitest"
import { useCalculatorStore } from "../../hooks/useCalculatorStore"
import { keys } from "../../constant"

describe("CalculatorButton UI Test", () => {
  it("should render the correct button Key", () => {
    keys.forEach((key) => {
      const screen = renderCalculatorButton(`${key}`)

      const button = screen.getByRole("button", { name: `${key}` })

      expect(button).toHaveAttribute("id", `${key}`)
    })
  })
})

describe("CalculatorButton Function Test", () => {
  it("should call setExpression when numbers is clicked", async () => {
    const setExpression = vi.fn()

    act(() => {
      useCalculatorStore.setState({ setExpression })
    })

    for (let i = 0; i < 10; i++) {
      const label = `${i}`
      const screen = renderCalculatorButton(label)
      const button = screen.getByRole("button", { name: label })

      act(() => {
        fireEvent.click(button)
      })

      expect(setExpression).toHaveBeenCalledWith(label)
    }
  })

  it("should call handleClear when CE is clicked", async () => {
    const handleClear = vi.fn()

    act(() => {
      useCalculatorStore.setState({ handleClear })
    })

    const screen = renderCalculatorButton("CE")
    const button = screen.getByRole("button", { name: "CE" })

    act(() => {
      fireEvent.click(button)
    })

    expect(handleClear).toHaveBeenCalledOnce()
  })

  it("should call handleEvaluate when = is clicked", async () => {
    const handleEvaluate = vi.fn()

    act(() => {
      useCalculatorStore.setState({ handleEvaluate })
    })

    const screen = renderCalculatorButton("=")
    const button = screen.getByRole("button", { name: "=" })

    act(() => {
      fireEvent.click(button)
    })

    expect(handleEvaluate).toHaveBeenCalledOnce()
  })

  it("should call handleOperator when an operator button is clicked", async () => {
    const label = "+"
    const screen = renderCalculatorButton(label)
    const button = screen.getByText(label)

    act(() => {
      fireEvent.click(button)
    })

    const { expression } = useCalculatorStore.getState()
    expect(expression).toBe(label)
  })
})

const renderCalculatorButton = (value: string) => {
  return render(<CalculatorButton value={value} />)
}
