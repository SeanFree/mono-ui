import { Container } from 'react-dom'
import { KeyboardEventHandler, MouseEventHandler } from 'react'
import { EventType, fireEvent, render } from '@testing-library/react'
import Button, { ButtonProps } from 'components/Button/Button'

describe('<Button />', () => {
  const onClick: MouseEventHandler = jest.fn()
  const onKeyDown: KeyboardEventHandler = jest.fn()
  const onMouseDown: MouseEventHandler = jest.fn()
  const onMouseLeave: MouseEventHandler = jest.fn()
  const onMouseUp: MouseEventHandler = jest.fn()

  const defaultProps: ButtonProps = {
    ariaLabel: 'Button',
    children: 'Button',
    onClick,
    onKeyDown,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
  }

  let container: Container

  const mount = (props: ButtonProps = defaultProps) => {
    ;({ container } = render(<Button {...props} />))
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('behavior', () => {
    const interactionCases = [
      {
        handler: 'onClick',
        eventType: 'click',
      },
      {
        handler: 'onKeyDown',
        eventType: 'keyDown',
      },
      {
        handler: 'onMouseDown',
        eventType: 'mouseDown',
      },
      {
        handler: 'onMouseUp',
        eventType: 'mouseUp',
      },
    ]

    test.each(interactionCases)(
      'should call provided $handler on $eventTyoe',
      ({ handler, eventType }) => {
        mount()

        fireEvent[eventType as EventType](container.firstChild as Element)

        expect((defaultProps as any)[handler]).toHaveBeenCalled()
      }
    )

    it('should call provided onMouseLeave handler on mouseLeave', () => {
      mount()

      fireEvent.mouseEnter(container.firstChild as Element)
      fireEvent.mouseLeave(container.firstChild as Element)

      expect(defaultProps.onMouseLeave).toHaveBeenCalled()
    })
  })
})
