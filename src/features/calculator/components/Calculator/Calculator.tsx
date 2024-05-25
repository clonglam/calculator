import CalculatorButton from "../CalculatorButton/CalculatorButton"
import "./Calculator.scss"
import { useCalculatorStore } from "../../stores/use-calculator-store"

function Calculator() {
  const expression = useCalculatorStore((s) => s.expression)
  const result = useCalculatorStore((s) => s.result)

  const keys = [
    "(",
    ")",
    "%",
    "CE",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ]
  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result" id="result">
          {result}
        </div>
      </div>

      <div className="buttons">
        {keys.map((button) => (
          <CalculatorButton value={button} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
