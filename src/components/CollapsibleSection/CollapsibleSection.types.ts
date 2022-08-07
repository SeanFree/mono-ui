import { ElementType, PropsWithChildren } from 'react'

export type CollapsibleSectionProps = PropsWithChildren<{
  as?: ElementType
  attach?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
  collapsed?: boolean
  headingText?: string
  size: 'small' | 'medium' | 'large'
  onToggle?: (collapsed: boolean) => any
}>
