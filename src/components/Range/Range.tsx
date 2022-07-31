import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { clamp, classNames, nearestMultiple, noop, norm } from 'utils'

import './Range.styles.scss'

type GetValueTextFunc = (value: number, name?: string) => number | string

export type RangeProps = {
  ariaLabel: string
  className?: string
  defaultValue?: number | string
  disabled?: boolean
  getMaxText?: GetValueTextFunc
  getMinText?: GetValueTextFunc
  getValueText?: GetValueTextFunc
  hideLabel?: boolean
  hideLimits?: boolean
  id: string
  label: string
  labelPosition?: 'top' | 'left' | 'right'
  max?: number
  min?: number
  name?: string
  onChange?: Function
  orientation?: 'horizontal' | 'vertical'
  step?: number
}

const getValueTextDefault: GetValueTextFunc = (value) => value

const Range: FC<RangeProps> = ({
  ariaLabel,
  className = '',
  defaultValue = 0,
  disabled = false,
  getMaxText = getValueTextDefault,
  getMinText = getValueTextDefault,
  getValueText = getValueTextDefault,
  hideLabel = false,
  hideLimits = false,
  id,
  label,
  labelPosition = 'top',
  max = 0,
  min = 0,
  name,
  onChange = noop,
  orientation = 'horizontal',
  step = 0,
}) => {
  const [value, setValue] = useState<number | string>(defaultValue || min)
  const [scaledValue, setScaledValue] = useState<number>(0)
  const [mousedown, setMouseDown] = useState<boolean>(false)
  const decimal = useMemo<number>(
    () => +String(step).split('.')[1]?.length,
    [step]
  )
  const $min = useMemo<number>(() => +min, [min])
  const $max = useMemo<number>(() => +max, [max])
  const slider = useRef<HTMLDivElement>(null)
  const thumb = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  const parseValue = useCallback<GetValueTextFunc>(
    (v) => {
      const $value = +v
      const newValue = clamp($value, $min, $max)
      const $decimal = newValue === $min || newValue === $max ? 0 : decimal

      return newValue.toFixed($decimal)
    },
    [min, max, step]
  )

  const handleMouseEvent = useCallback<MouseEventHandler>(
    (e) => {
      const { x } = slider.current?.getBoundingClientRect() as DOMRect
      const offsetLeft = e.clientX - x
      const offsetWidth = slider.current?.offsetWidth as number

      const $value = nearestMultiple(
        clamp($min + (offsetLeft / offsetWidth) * ($max - $min), $min, $max),
        step
      )
      const newValue = parseValue($value)

      setValue(newValue)
      onChange(newValue)
    },
    [min, max]
  )

  const onMouseDown = useCallback<MouseEventHandler>(
    (e) => {
      setMouseDown(true)
      handleMouseEvent(e)
    },
    [min, max]
  )

  const onMouseMove = useCallback<MouseEventHandler>(
    (e) => {
      if (mousedown) {
        handleMouseEvent(e)
      }
    },
    [min, max, mousedown]
  )

  const onMouseUp = useCallback(() => {
    setMouseDown(false)
  }, [])

  const onKeyDown = useCallback<KeyboardEventHandler>(
    (e) => {
      if (['ArrowLeft', 'ArrowRight'].includes(e.code)) {
        setValue(($value) => {
          const direction =
            (e.code === 'ArrowLeft' ? -1 : 1) * (e.shiftKey ? 2 : 1)
          const newValue = parseValue(Number($value) + Number(step) * direction)

          onChange(newValue)

          return newValue
        })
      }
    },
    [min, max, step]
  )

  useEffect(() => {
    setScaledValue(norm(+value, $min, $max) * 100)
  }, [value, min, max])

  useEffect(() => {
    setValue(parseValue(+defaultValue))
  }, [defaultValue])

  return (
    <div
      className={classNames({
        'mono-input': true,
        [`mono-input--label-${labelPosition}`]: true,
        'mono-range': true,
        [`mono-range--label-${labelPosition}`]: true,
        [className]: !!className,
        'mono-range--hide-limits': hideLimits,
        'mono-range--disabled': disabled,
      })}
    >
      <label
        className={classNames({
          'mono-input__label': true,
          [`mono-input__label--${labelPosition}`]: true,
          'mono-range__label': true,
          'sr-only': hideLabel,
        })}
        htmlFor={id}
        id={`lbl-${id}`}
        onClick={() => thumb.current?.focus()}
      >
        {label || ariaLabel}
      </label>
      <div
        className="mono-range__slider"
        ref={slider}
        role="slider"
        aria-label={ariaLabel}
        aria-labelledby={`lbl-${id}`}
        aria-orientation={orientation}
        aria-valuemin={$min}
        aria-valuemax={$max}
        aria-valuenow={+value}
        aria-valuetext={getValueText(+value, name || id) as string}
        id={id}
        onClick={() => thumb.current?.focus()}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <div className="mono-range__track" ref={track}>
          <div
            className="mono-range__fill"
            style={{
              width: `calc(${scaledValue}%)`,
            }}
          ></div>
        </div>
        <div
          ref={thumb}
          className="mono-range__thumb"
          tabIndex={0}
          style={{
            left: `calc(${scaledValue}%)`,
          }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onKeyDown={onKeyDown}
        >
          <span className="mono-range__thumb-display">
            {getValueText(+value) as string}
          </span>
        </div>
        <span className="mono-range__min mono-range__limit">
          {getMinText($min, name || id) as string}
        </span>
        <span className="mono-range__max mono-range__limit">
          {getMaxText($max, name || id) as string}
        </span>
      </div>
    </div>
  )
}

export default Range
