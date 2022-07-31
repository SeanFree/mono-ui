import {
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Icon } from 'components'
import { clamp, classNames, noop } from 'utils'
import './Select.styles.scss'

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

const Select: FC<SelectProps> = ({
  ariaLabel = '',
  className = '',
  defaultValue = null,
  disabled = false,
  id,
  label,
  labelPosition = 'top',
  name,
  onChange = noop,
  options,
  placeholder = '',
}) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | string>(
    placeholder || label
  )
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [focusIndex, setFocusIndex] = useState<number>(0)
  const combobox = useRef<HTMLDivElement>(null)
  const listbox = useRef<HTMLUListElement>(null)
  const optionsList = useRef<HTMLLIElement[]>([])

  const selectOption = useCallback((option: SelectOption | string) => {
    setSelectedOption(option)
    setShowOptions(false)
    combobox.current?.focus()
    onChange(option)
  }, [])

  const onOptionBlur = useCallback<FocusEventHandler>(
    (e) => {
      if (
        e.relatedTarget !== combobox.current &&
        !optionsList.current.includes(e.relatedTarget as HTMLLIElement)
      ) {
        const targetIndex = options.findIndex((option) => {
          option === selectedOption
        })

        setFocusIndex(targetIndex === -1 ? 0 : targetIndex)
        setShowOptions(false)
      }
    },
    [selectedOption]
  )

  const onListboxKeyDown = useCallback<KeyboardEventHandler>((e) => {
    if (e.code === 'Escape') {
      setShowOptions(false)
      combobox.current?.focus()
    }

    if (['ArrowDown', 'ArrowUp'].includes(e.code)) {
      e.preventDefault()

      setFocusIndex((currentIndex) => {
        const direction = e.code === 'ArrowDown' ? 1 : -1
        const targetIndex = clamp(
          currentIndex + direction,
          0,
          options.length - 1
        )

        optionsList.current[targetIndex].focus()

        return targetIndex
      })
    }
    if (['Enter', 'Space'].includes(e.code)) {
      e.preventDefault()

      const targetIndex = optionsList.current.indexOf(e.target as HTMLLIElement)

      selectOption(options[targetIndex])
    }
    if (e.code === 'Tab') {
      combobox.current?.dispatchEvent(
        new KeyboardEvent('keydown', {
          code: e.code,
          shiftKey: e.shiftKey,
        })
      )
    }
  }, [])

  const onComboboxClick = useCallback<MouseEventHandler>(
    (e) => {
      setShowOptions((show) => {
        if (show) {
          combobox.current?.focus()
        } else if (focusIndex > -1) {
          optionsList.current[focusIndex].focus()
          optionsList.current[focusIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          })
        }
        return !show
      })
    },
    [focusIndex]
  )

  const onComboboxBlur = useCallback<FocusEventHandler>((e) => {
    if (!optionsList.current.includes(e.relatedTarget as HTMLLIElement)) {
      setShowOptions(false)
    }
  }, [])

  const onComboBoxKeyDown = useCallback<KeyboardEventHandler>(
    (e) => {
      if (['ArrowDown', 'ArrowUp'].includes(e.code)) {
        e.preventDefault()

        setShowOptions(true)
        optionsList.current[focusIndex].focus()
      }

      if (['Enter', 'Space'].includes(e.code)) {
        e.preventDefault()

        setShowOptions(true)
        optionsList.current[focusIndex].focus()
      }
    },
    [focusIndex]
  )

  useEffect(() => {
    const targetIndex = options.indexOf(selectedOption)

    setFocusIndex(targetIndex > -1 ? targetIndex : 0)
  }, [selectedOption])

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(
        options.find((option) => option === defaultValue) as
          | SelectOption
          | string
      )
    }
  }, [defaultValue])

  return (
    <div
      className={classNames({
        'mono-input': true,
        [`mono-input--label-${labelPosition}`]: true,
        'mono-select': true,
        [`mono-select--label-${labelPosition}`]: true,
        [className]: !!className,
      })}
    >
      <label
        className={classNames({
          'mono-input__label': true,
          'mono-select__label': true,
          [`mono-input__label--${labelPosition}`]: true,
          [`mono-select__label--${labelPosition}`]: true,
        })}
        id={`lbl-${id}`}
        htmlFor={id}
        onClick={() => {
          combobox.current?.focus()
        }}
      >
        {label}
      </label>
      <div className="mono-select__container">
        <div
          ref={combobox}
          aria-label={ariaLabel || label}
          aria-controls={id}
          aria-expanded={showOptions}
          aria-haspopup="listbox"
          aria-labelledby={`lbl-${id}`}
          className="mono-input__input mono-select__combobox"
          id={`combo-${id}`}
          role="combobox"
          tabIndex={showOptions ? -1 : 0}
          onClick={onComboboxClick}
          onBlur={onComboboxBlur}
          onKeyDown={onComboBoxKeyDown}
        >
          <>
            {(selectedOption as SelectOption).label ||
              selectedOption ||
              placeholder}
            <Icon
              className="mono-select__combo-icon"
              name={showOptions ? 'expand_less' : 'expand_more'}
              size="small"
            />
          </>
        </div>
        <div
          className={classNames({
            'mono-scroll-container': true,
            'mono-select__scroll-container': true,
            'mono-select__scroll-container--visible': showOptions,
          })}
        >
          <ul
            aria-labelledby={`combo-${id}`}
            ref={listbox}
            className="mono-select__listbox"
            id={id}
            role="listbox"
            tabIndex={0}
            onKeyDown={onListboxKeyDown}
          >
            {options.map((option, i) => {
              const isSelected = option === selectedOption

              return (
                <li
                  aria-selected={isSelected}
                  className={classNames({
                    'mono-select__option': true,
                    'mono-select__option--selected': isSelected,
                  })}
                  key={i}
                  id={`opt-${id}-${i}`}
                  role="option"
                  onClick={() => selectOption(option)}
                  ref={(el: HTMLLIElement) => (optionsList.current[i] = el)}
                  tabIndex={-1}
                  onBlur={onOptionBlur}
                >
                  {(option as SelectOption).value || option}
                  {isSelected ? (
                    <Icon
                      className="mono-select__selected-icon"
                      name="check"
                      size="xsmall"
                    />
                  ) : (
                    <></>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Select
