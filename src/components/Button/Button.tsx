import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  PropsWithChildren,
} from 'react'
import { classNames, noop } from 'utils'

import './Button.styles.scss'

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

const Button: FC<ButtonProps> = ({
  ariaControls = '',
  ariaLabel,
  children,
  className = '',
  disabled = false,
  inline = false,
  onClick = noop,
  onKeyDown = noop,
  onMouseDown = noop,
  onMouseLeave = noop,
  onMouseUp = noop,
  round = false,
  size = '2',
  variant = 'fill',
}) => {
  return (
    <button
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      disabled={disabled}
      className={classNames({
        'mono-button': true,
        [`mono-button--${size}`]: true,
        ['mono-button--inline']: inline,
        ['mono-button--disabled']: disabled,
        ['mono-button--round']: round && !inline,
        [`mono-button--${variant}`]: true,
        [className]: !!className,
      })}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {children}
    </button>
  )
}

export default Button
