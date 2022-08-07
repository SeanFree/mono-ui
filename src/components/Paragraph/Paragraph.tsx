import { FC } from 'react'
import { ParagraphProps } from './Paragraph.types'
import { classNames } from 'utils'
import './Paragraph.styles.scss'

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
