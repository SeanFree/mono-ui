import { FC, useState } from 'react'
import { IconButton } from 'components'
import {
  PlaythroughButtonProps,
  PlaythroughTypes,
} from './PlaythroughButton.types'
import { classNames, noop } from 'utils'

const playthroughTypes = Object.values(PlaythroughTypes)

const PlaythroughButton: FC<PlaythroughButtonProps> = ({
  ariaLabel = '',
  className = '',
  size = 'small',
  iconName,
  onChange = noop,
  ...props
}) => {
  const [playthroughType, setPlaythroughType] = useState<number>(0)

  console.log(playthroughTypes[playthroughType])
  return (
    <IconButton
      ariaLabel={`Change playthrough type to ${
        playthroughTypes[(playthroughType + 1) % playthroughTypes.length]
      }`}
      iconName={playthroughTypes[playthroughType]}
      size={size}
      className={classNames({
        'mono-playthrough-button': true,
        'mono-media-button': true,
        'mono-media-button--round': true,
        [`mono-media-button--${size}`]: true,
        [className]: !!className,
      })}
      onClick={() => {
        const type: number = (playthroughType + 1) % playthroughTypes.length

        setPlaythroughType(type)
        onChange(playthroughTypes[type])
      }}
      {...props}
    />
  )
}

export default PlaythroughButton
