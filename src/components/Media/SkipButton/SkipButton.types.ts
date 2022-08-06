import { IconButtonProps } from 'components/types'

export type SkipButtonProps = Omit<IconButtonProps, 'ariaLabel'> & {
  ariaLabel?: string
  direction?: 'forward' | 'backward'
}
