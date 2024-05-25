import { cn } from "@/lib/utils"
import { isNumeric } from "../../utils"
import { useCalculatorStore } from "../../hooks/useCalculatorStore"

interface Props {
  value: string
}

export const CalculatorButton = ({ value }: Props) => {
  const { setExpression, handleEvaluate, handleClear, expression } =
    useCalculatorStore()

  const onClickHandler = (value: string) => {
    if (value === "CE") {
      handleClear()
    } else if (value === "=") {
      handleEvaluate(expression)
    } else {
      setExpression(value)
    }
  }
  return (
    <button
      id={value}
      className={cn(
        "button",
        value === "=" && "sum",
        isNumeric(value) && "number"
      )}
      onClick={() => onClickHandler(value)}
    >
      {value}
    </button>
  )
}

export default CalculatorButton
