import { IconButtonProps } from 'components/types'

export type PlayButtonProps = Omit<IconButtonProps, 'ariaLabel'> & {
  ariaLabel?: string
  isPlaying?: boolean
}
