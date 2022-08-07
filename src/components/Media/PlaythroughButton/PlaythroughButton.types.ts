import { IconButtonProps } from 'components/types'

export enum PlaythroughTypes {
  REPEAT = 'repeat',
  REPEAT_ONE = 'repeat_one',
  SHUFFLE = 'shuffle',
}

export type PlaythroughButtonProps = Omit<IconButtonProps, 'ariaLabel'> & {
  ariaLabel?: string
  onChange?: (playthroughType: PlaythroughTypes) => any
}
