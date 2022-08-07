export type SelectOption = {
  label: string
  value: any
}

export type SelectProps = {
  ariaLabel?: string
  className?: string
  defaultValue?: any
  disabled: boolean
  id: string
  label: string
  labelPosition?: 'top' | 'left' | 'right'
  name?: string
  onChange: Function
  options: (SelectOption | string)[]
  placeholder?: string
}
