import { PropsWithChildren } from 'react'

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
