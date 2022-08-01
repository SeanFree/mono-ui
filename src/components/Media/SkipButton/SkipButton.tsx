import { FC, useMemo } from 'react'
import { classNames } from 'utils'
import IconButton, { IconButtonProps } from 'components/IconButton/IconButton'

export type SkipButtonProps = IconButtonProps & {
  ariaLabel?: string
  direction?: 'forward' | 'backward'
}

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
      className={classNames({
        'mono-skip-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      {...{
        ...props,
        ariaLabel: ariaLabel || `Skip ${actionName}`,
        iconName: `skip_${actionName}`,
        size,
      }}
    />
  )
}

export default SkipButton
