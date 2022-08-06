import { ButtonProps, IconProps } from 'components/types'
import { PropsWithChildren } from 'react'

export type IconButtonProps = PropsWithChildren<
  ButtonProps & {
    iconName?: IconProps['name']
  }
>
