export type CheckboxChangeHandler = (checked: boolean, value: any) => any

export type CheckboxProps = {
  ariaLabel: string
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
  id: string
  isToggle?: boolean
  label: string
  labelPosition: 'top' | 'left' | 'right'
  name?: string
  onChange: CheckboxChangeHandler
  value?: any
}
