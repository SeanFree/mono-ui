import { ElementType, FC, useEffect, useMemo, useState } from 'react'
import { classNames, noop, uniqueId } from 'utils'
import { IconButton } from 'components'
import { CollapsibleSectionProps } from './CollapsibleSection.types'

import './CollapsibleSection.styles.scss'

const CollapsibleSection: FC<CollapsibleSectionProps> = ({
  as: Tag = 'div',
  attach,
  children,
  className = '',
  collapsed: defaultCollapsed = true,
  headingText = '',
  size = 'medium',
  onToggle = noop,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed)
  const contentId = useMemo<string>(() => uniqueId(), [])
  const onClick = () => {
    setCollapsed(($collapsed) => {
      onToggle(!$collapsed)

      return !$collapsed
    })
  }

  useEffect(() => {
    setCollapsed(defaultCollapsed)
  }, [defaultCollapsed])

  return (
    <Tag
      className={classNames({
        'mono-collapsible': true,
        'mono-collapsible--collapsed': collapsed,
        [`mono-collapsible--${size}`]: true,
        [`mono-collapsible--attach-${attach}`]: !!attach,
        [className]: !!className,
      })}
    >
      <IconButton
        ariaLabel={`${collapsed ? 'Expand' : 'Collapse'} content`}
        ariaControls={contentId}
        ariaExpanded={!collapsed}
        className="mono-collapsible__toggle"
        size={size}
        iconName={collapsed ? 'expand_more' : 'expand_less'}
        onClick={onClick}
      >
        {headingText}
      </IconButton>
      <div
        aria-hidden={collapsed}
        className="mono-collapsible__content"
        id={contentId}
      >
        <div className="mono-collapsible__collapser">{children}</div>
      </div>
    </Tag>
  )
}

export default CollapsibleSection
