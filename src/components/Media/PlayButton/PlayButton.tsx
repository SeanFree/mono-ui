import { FC } from 'react'
import { classNames } from 'utils'
import IconButton, { IconButtonProps } from 'components/IconButton/IconButton'

export type PlayButtonProps = IconButtonProps & {
  ariaLabel?: string
  isPlaying?: boolean
}

const PlayButton: FC<PlayButtonProps> = ({
  ariaLabel,
  className = '',
  isPlaying = false,
  size = 'medium',
  ...props
}) => {
  return (
    <IconButton
      className={classNames({
        'mono-play-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      {...{
        ...props,
        ariaLabel: ariaLabel || (isPlaying ? 'Pause' : 'Play'),
        iconName: isPlaying ? 'pause' : 'play_arrow',
        size,
      }}
    />
  )
}

export default PlayButton
