import { FC, useMemo } from 'react'
import { classNames } from 'utils'
import IconButton, { IconButtonProps } from 'components/IconButton/IconButton'

export type SeekButtonProps = Omit<IconButtonProps, 'ariaLabel'> & {
  ariaLabel?: string
  direction?: 'forward' | 'backward'
}

const SeekButton: FC<SeekButtonProps> = ({
  ariaLabel = '',
  className = '',
  direction = 'forward',
  size = 'small',
  ...props
}) => {
  const actionName = useMemo(
    () => (direction === 'forward' ? 'forward' : 'rewind'),
    [direction]
  )

  return (
    <IconButton
      className={classNames({
        'mono-seek-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      {...{
        ...props,
        ariaLabel: ariaLabel || `Fast ${actionName}`,
        iconName: `fast_${actionName}`,
        size,
      }}
    />
  )
}

export default SeekButton
