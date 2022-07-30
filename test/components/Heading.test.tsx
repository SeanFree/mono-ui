import { Container } from 'react-dom'
import { render } from '@testing-library/react'

import Heading, { HeadingProps } from 'components/Heading/Heading'

describe('<Heading />', () => {
  let container: Container

  const mount = (props: HeadingProps = {}) => {
    ;({ container } = render(<Heading {...props} />))
  }

  describe('rendering', () => {
    const asCases = Array.from({ length: 6 }, (_, i) => ({
      as: `h${i + 1}`,
      children: `Heading Level ${i + 1}`,
    })) as HeadingProps[]

    test.each(asCases)(
      'should render correct node type for $as',
      ({ as, children }) => {
        mount({
          as,
          children,
        })

        expect(container.firstChild?.nodeName).toBe(as?.toUpperCase())
      }
    )

    it('should render subText', () => {
      const props: HeadingProps = {
        as: 'h1',
        children: 'Heading',
        subText: 'Sub Text',
      }
      mount(props)

      const subText = container.querySelector('.mono-heading__sub-text')

      expect(subText).not.toBeNull()
      expect(subText?.textContent).toBe(props.subText)
    })
  })
})
