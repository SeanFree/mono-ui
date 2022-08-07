import { PropsWithChildren } from 'react'

export type ParagraphProps = PropsWithChildren<{
  className?: string
  indent?: 'off' | 'small' | 'medium' | 'large'
  dropcap?: boolean
}>
