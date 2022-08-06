import { IconButtonProps } from 'components/types'

export type SeekButtonProps = Omit<IconButtonProps, 'ariaLabel'> & {
  ariaLabel?: string
  direction?: 'forward' | 'backward'
}
