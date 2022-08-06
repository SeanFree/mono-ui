import { FC } from 'react'
import { classNames } from 'utils'
import { Button, Icon } from 'components'

import { IconProps, IconButtonProps } from 'components/types'
import './IconButton.styles.scss'

const btnSizeToIconSize = {
  small: 'xsmall',
  medium: 'small',
  large: 'medium',
}

const IconButton: FC<IconButtonProps> = ({
  children,
  className = '',
  iconName = '',
  size = 'medium',
  ...props
}) => {
  return (
    <Button
      className={classNames({
        'mono-icon-button': true,
        [className]: !!className,
      })}
      size={size}
      {...props}
    >
      <Icon
        className="mono-icon-button__icon"
        name={iconName}
        size={btnSizeToIconSize[size] as IconProps['size']}
      />
      {children ? (
        <span className="mono-icon-button__content">{children}</span>
      ) : (
        <></>
      )}
    </Button>
  )
}

export default IconButton
