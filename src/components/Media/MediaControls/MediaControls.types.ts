import { ButtonProps } from 'components/types'
import { MouseEventHandler, ReactNode } from 'react'

export type MediaControlsProps = {
  buttonVariant?: ButtonProps['variant']
  compact?: boolean
  currentTime?: number | string
  className?: string
  isPlaying?: boolean
  leftPane?: ReactNode
  onPlay?: MouseEventHandler
  onSeek?: Function
  onSkip?: Function
  onTimeSelect?: Function
  rightPane?: ReactNode
  roundButtons?: boolean
  title?: string
  artist?: string
  totalTime?: number
}
