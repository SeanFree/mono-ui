import { IconButton } from 'components'
import { IconButtonProps } from 'components/types'
import { FC, useMemo } from 'react'
import { SkipButtonProps } from './SkipButton.types'
import { classNames } from 'utils'

const SkipButton: FC<SkipButtonProps> = ({
  ariaLabel = '',
  className = '',
  direction = 'forward',
  size = 'small',
  ...props
}) => {
  const actionName = useMemo<string>(
    () => (direction === 'forward' ? 'next' : 'previous'),
    [direction]
  )

  return (
    <IconButton
      ariaLabel={ariaLabel || `Skip ${actionName}`}
      iconName={`skip_${actionName}`}
      size={size}
      className={classNames({
        'mono-skip-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      {...props}
    />
  )
}

export default SkipButton
