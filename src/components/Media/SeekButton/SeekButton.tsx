import { IconButton } from 'components'
import { FC, useMemo } from 'react'
import { SeekButtonProps } from './SeekButton.types'
import { classNames } from 'utils'

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
      ariaLabel={ariaLabel || `Fast ${actionName}`}
      iconName={`fast_${actionName}`}
      size={size}
      className={classNames({
        'mono-seek-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      {...props}
    />
  )
}

export default SeekButton
