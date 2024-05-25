import CalculatorButton from "../CalculatorButton/CalculatorButton"
import "./Calculator.scss"
import { useCalculatorStore } from "../../hooks/useCalculatorStore"
import { keys } from "../../constant"

function Calculator() {
  const expression = useCalculatorStore((s) => s.expression)
  const result = useCalculatorStore((s) => s.result)

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result" id="result">
          {result}
        </div>
      </div>

      <div className="buttons">
        {keys.map((value) => (
          <CalculatorButton value={value} key={value} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
