import { ElementType, FC, PropsWithChildren } from 'react'
import { classNames } from 'utils'

import './Heading.style.scss'

export type HeadingProps = PropsWithChildren<{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  subText?: string
}>

const Heading: FC<HeadingProps> = ({
  as: tag = 'h6',
  children,
  className,
  subText,
}) => {
  const Tag = tag as ElementType

  return (
    <Tag
      className={classNames({
        'mono-heading': true,
        [`mono-heading--${tag}`]: true,
        ...(className ? { [className]: true } : {}),
      })}
    >
      {children}
      {subText ? (
        <span className="mono-heading__sub-text">{subText}</span>
      ) : (
        <></>
      )}
    </Tag>
  )
}

export default Heading
