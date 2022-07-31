import {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { clamp, classNames, noop } from 'utils'
import { IconButton } from 'components'

export type InputNumberProps = PropsWithChildren<{
  ariaLabel: string
  className?: string
  defaultValue?: number | string
  disabled?: boolean
  labelPosition?: 'top' | 'left' | 'right'
  id: string
  label: string
  max?: number
  min?: number
  step?: number
  onChange: Function
}>

const InputNumber: FC<InputNumberProps> = ({
  ariaLabel,
  className = '',
  defaultValue = 0,
  disabled = false,
  labelPosition = 'top',
  id,
  label,
  max = 0,
  min = 0,
  step = 0,
  onChange = noop,
}) => {
  const [value, setValue] = useState<number | string>(defaultValue || min)
  const [cursor, setCursor] = useState<number>(0)
  const updateInterval = useRef<number | undefined>()
  const updateTimeout = useRef<number | undefined>()
  const decimal = useMemo(
    () => step?.toString().split('.')[1]?.length || 0,
    [step]
  )
  const input = useRef<HTMLInputElement>(null)
  const btnDecrement = useRef()
  const btnIncrement = useRef()

  const parseValue = useCallback(
    ($value: number | string, direction: number = 0) => {
      const $max = Number(max)
      const $min = Number(min)
      const $step = Number(step)

      const newValue = clamp(Number($value) + $step * direction, $min, $max)

      const $decimal = newValue === $min || newValue === $max ? 0 : decimal

      return newValue.toFixed($decimal)
    },
    [max, min, step]
  )

  const onInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { selectionStart, value } = e.target

    if (!isNaN(+value)) {
      setCursor(selectionStart || 0)

      const newValue = parseValue(value, 0)

      onChange(newValue)

      setValue(newValue)
    }
  }, [])

  const onBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target || min

    if (!value) {
      setValue(min.toString())
    }
  }, [])

  const updateValue = useCallback((direction: number) => {
    setCursor(input.current?.selectionStart || 0)

    setValue(($value) => {
      const newValue = parseValue($value, direction)

      onChange(newValue)

      return newValue
    })
  }, [])

  const clearUpdateTimeout = useCallback(() => {
    window.clearTimeout(updateTimeout.current)
    updateTimeout.current = undefined

    window.clearInterval(updateInterval.current)
    updateInterval.current = undefined
  }, [])

  const setUpdateTimeout = useCallback((direction: number) => {
    updateValue(direction)
    clearUpdateTimeout()

    updateTimeout.current = window.setTimeout(() => {
      updateInterval.current = window.setInterval(
        () => updateValue(direction),
        20
      )
    }, 500)
  }, [])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown'].includes(e.code)) {
      updateValue(e.code === 'ArrowUp' ? 1 : -1)
    }
  }, [])

  useEffect(() => {
    input.current?.setSelectionRange(cursor, cursor)
  }, [input, cursor, value])

  useEffect(() => {
    onInput({
      target: {
        selectionStart: cursor,
        value: defaultValue.toString(),
      },
    } as ChangeEvent<HTMLInputElement>)
  }, [defaultValue])

  return (
    <div
      className={classNames({
        'mono-input': true,
        [`mono-input--label-${labelPosition}`]: true,
        'mono-number': true,
        [`mono-number--label-${labelPosition}`]: true,
        [className]: !!className,
      })}
    >
      <label
        className={classNames({
          'mono-input__label': true,
          [`mono-input__label--${labelPosition}`]: true,
          'mono-number__label': true,
          [`mono-number__label--${labelPosition}`]: true,
        })}
        htmlFor={id}
      >
        {label || ariaLabel}
      </label>
      <div className="mono-number__container">
        <IconButton
          ariaControls={id}
          ariaLabel={`Decrement ${name} by ${step}`}
          className="mono-number__button mono-number__button--left"
          disabled={disabled || +value === +min}
          size="small"
          iconName="remove"
          onMouseDown={() => setUpdateTimeout(-1)}
          onMouseUp={clearUpdateTimeout}
          onMouseLeave={clearUpdateTimeout}
          variant="link"
        />
        <input
          ref={input}
          aria-disabled={disabled}
          autoComplete="off"
          className="mono-input__input mono-number__input"
          aria-label={ariaLabel}
          disabled={disabled}
          id={id}
          max={max}
          min={min}
          step={step}
          type="text"
          value={value}
          onBlur={onBlur}
          onChange={onInput}
          onKeyDown={onKeyDown}
        />
        <IconButton
          ariaControls={id}
          ariaLabel={`Increment ${name} by ${step}`}
          disabled={disabled || +value === +max}
          className="mono-number__button mono-number__button--right"
          size="small"
          iconName="add"
          onMouseDown={() => setUpdateTimeout(1)}
          onMouseUp={clearUpdateTimeout}
          onMouseLeave={clearUpdateTimeout}
          variant="link"
        />
      </div>
    </div>
  )
}

export default InputNumber
