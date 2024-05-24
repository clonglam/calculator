import useCalculatorStore from "../hooks/CalculatorStore"
import "./Calculator.scss"
import CalculatorButton from "./CalculatorButton"

function Calculator() {
  const expression = useCalculatorStore((s) => s.expression)
  const result = useCalculatorStore((s) => s.result)

  // const [expression, setExpression] = useState("")
  // const [result, setResult] = useState("")

  // const handleButtonClick = (value: string) => {
  //   setExpression((prev) => prev + value)
  // }

  // const handleClear = () => {
  //   setExpression("")
  //   setResult("")
  // }

  // const handleEvaluate = () => {
  //   try {
  //     setResult(evaluate(expression))
  //   } catch (error) {
  //     setResult("Error")
  //   }
  // }

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        {[
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
        ].map((button) => (
          <CalculatorButton value={button} label={button} />
        ))}
      </div>
    </div>
  )
}

export default Calculator
