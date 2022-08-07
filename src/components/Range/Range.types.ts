export type GetValueTextFunc = (value: number, name?: string) => number | string

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
