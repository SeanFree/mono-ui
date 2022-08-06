import { ChangeEvent, FC, useCallback, useState } from 'react'
import { Icon } from 'components'
import { classNames, noop } from 'utils'

import { CheckboxProps } from './Checkbox.types'
import './Checkbox.styles.scss'

const Checkbox: FC<CheckboxProps> = ({
  ariaLabel,
  className = '',
  defaultChecked = false,
  disabled = false,
  id,
  isToggle = false,
  label,
  labelPosition = 'top',
  name,
  onChange = noop,
  value = null,
}) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        const { checked, value } = e.target

        setChecked(checked)
        onChange(checked, value)
      }
    },
    [disabled]
  )

  return (
    <div
      className={classNames({
        'mono-input': true,
        'mono-checkbox': true,
        'mono-checkbox--toggle': isToggle,
        [`mono-checkbox--label-${labelPosition}`]: true,
        'mono-checkbox--checked': checked,
        'mono-checkbox--disabled': disabled,
        [className]: !!className,
      })}
    >
      <input
        aria-label={ariaLabel}
        aria-disabled={disabled}
        className="mono-input__input mono-checkbox__input"
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name || id}
        type="checkbox"
        onChange={handleChange}
        value={value}
      />
      <label
        className={classNames({
          'mono-input__label': true,
          'mono-checkbox__label': true,
          [`mono-checkbox__label--${labelPosition}`]: true,
        })}
        htmlFor={id}
      >
        <span className="mono-checkbox__box" role="presentation">
          {isToggle ? (
            <></>
          ) : (
            <Icon className="mono-checkbox__mark" name="check" size="medium" />
          )}
        </span>
        <span className="mono-checkbox__label-text">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
