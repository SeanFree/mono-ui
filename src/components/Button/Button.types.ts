import {
  KeyboardEventHandler,
  MouseEventHandler,
  PropsWithChildren,
} from 'react'

export type ButtonProps = PropsWithChildren<{
  ariaControls?: string
  ariaLabel: string
  className?: string
  disabled?: boolean
  inline?: boolean
  onClick?: MouseEventHandler
  onKeyDown?: KeyboardEventHandler
  onMouseDown?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  onMouseUp?: MouseEventHandler
  round?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'fill' | 'outline' | 'link'
}>
