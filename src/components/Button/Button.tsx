import { FC } from 'react'
import { classNames, noop } from 'utils'

import { ButtonProps } from './Button.types'
import './Button.styles.scss'

const Button: FC<ButtonProps> = ({
  ariaControls = '',
  ariaExpanded = null,
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
      {...(ariaExpanded !== null
        ? {
            'aria-expanded': ariaExpanded,
          }
        : {})}
    >
      {children}
    </button>
  )
}

export default Button
