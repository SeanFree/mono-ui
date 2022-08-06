import { FC } from 'react'
import { classNames } from 'utils'

import { IconProps } from './Icon.types'
import './Icon.styles.scss'

const Icon: FC<IconProps> = ({ className = '', name, size = 'medium' }) => {
  return (
    <i
      aria-hidden="true"
      className={classNames({
        'material-icons': true,
        'mono-icon': true,
        [`mono-icon--${size}`]: true,
        [className]: !!className,
      })}
      role="presentation"
    >
      {name}
    </i>
  )
}

export default Icon
