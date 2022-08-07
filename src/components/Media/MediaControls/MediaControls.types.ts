import { ButtonProps } from 'components/types'
import { MouseEventHandler, ReactNode } from 'react'

export type MediaControlsProps = {
  artworkSrc?: string
  artworkAlt?: string
  buttonVariant?: ButtonProps['variant']
  compact?: boolean
  currentTime?: number | string
  className?: string
  disabled?: boolean
  isPlaying?: boolean
  leftPane?: ReactNode
  onPlay?: MouseEventHandler
  onSeek?: Function
  onSkip?: Function
  onPlaythroughChange?: Function
  onTimeSelect?: Function
  rightPane?: ReactNode
  roundButtons?: boolean
  title?: string
  artist?: string
  totalTime?: number
}
