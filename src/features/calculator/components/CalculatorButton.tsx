import { cn } from "@/lib/utils"
import { isNumeric } from "../utils"
import useCalculatorStore from "../hooks/CalculatorStore"

interface Props {
  label: string
  value: string
}

const CalculatorButton = ({ label, value }: Props) => {
  const setExpression = useCalculatorStore((s) => s.setExpression)
  const handleEvaluate = useCalculatorStore((s) => s.handleEvaluate)
  const expression = useCalculatorStore((s) => s.expression)

  const onClickHandler = (value: string) => {
    if (value === "CE") {
      setExpression("0")
    } else if (value === "=") {
      handleEvaluate(expression)
    } else {
      setExpression(value)
    }
  }
  return (
    <button
      className={cn(
        "button",
        value === "=" && "sum",
        isNumeric(value) && "number"
      )}
      onClick={() => onClickHandler(value)}
    >
      {label}
    </button>
  )
}

export default CalculatorButton
