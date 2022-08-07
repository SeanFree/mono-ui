import { IconButton } from 'components'
import { IconButtonProps } from 'components/types'
import { FC } from 'react'
import { PlayButtonProps } from './PlayButton.types'
import { classNames } from 'utils'

const PlayButton: FC<PlayButtonProps> = ({
  ariaLabel = '',
  className = '',
  isPlaying = false,
  size = 'medium',
  ...props
}) => {
  return (
    <IconButton
      ariaLabel={ariaLabel || (isPlaying ? 'Pause' : 'Play')}
      iconName={isPlaying ? 'pause' : 'play_arrow'}
      size={size}
      className={classNames({
        'mono-play-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      {...props}
    />
  )
}

export default PlayButton
