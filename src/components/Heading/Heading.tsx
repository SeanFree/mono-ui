import { ElementType, FC } from 'react'
import { classNames } from 'utils'

import { HeadingProps } from './Heading.types'
import './Heading.style.scss'

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
