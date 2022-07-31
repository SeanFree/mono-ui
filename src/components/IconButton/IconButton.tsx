import { FC, PropsWithChildren } from 'react'
import { classNames } from 'utils'
import Button, { ButtonProps } from 'components/Button/Button'
import Icon, { IconProps } from 'components/Icon/Icon'
import './IconButton.styles.scss'

export type IconButtonProps = PropsWithChildren<
  ButtonProps & {
    iconName?: IconProps['name']
  }
>

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
      <span className="mono-icon-button__content">{children}</span>
    </Button>
  )
}

export default IconButton
