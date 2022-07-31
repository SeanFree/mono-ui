import { FC, PropsWithChildren } from 'react'
import { classNames } from 'utils'
import './Paragraph.styles.scss'

export type ParagraphProps = PropsWithChildren<{
  className?: string
  indent: 'off' | 'small' | 'medium' | 'large'
  dropcap?: boolean
}>

const Paragraph: FC<ParagraphProps> = ({
  className = '',
  children,
  dropcap = false,
  indent = 'off',
}) => {
  return (
    <p
      className={classNames({
        'mono-paragraph': true,
        ['mono-paragraph--dropcap']: dropcap,
        [`mono-paragraph--indent-${indent}`]: indent !== 'off' && !dropcap,
        [className]: !!className,
      })}
    >
      {children}
    </p>
  )
}

export default Paragraph
