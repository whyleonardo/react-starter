import { Button } from '@/components/Button'

import { fireEvent, render } from '@testing-library/react'
import { describe, it, vi } from 'vitest'

const buttonTestID = 'button-test'

describe('Button', () => {
	const handleClick = vi.fn()

	it('Should be able to render the button', () => {
		const { getByTestId } = render(<Button>Send Form</Button>)

		const button = getByTestId(buttonTestID)

		expect(button).toBeInTheDocument()
	})

	it('Should be able to see th initial text on screen', () => {
		const { getByTestId } = render(<Button>Send Form</Button>)

		const button = getByTestId(buttonTestID)

		expect(button).toHaveTextContent('Send Form')
	})

	it('Should be able to fire event', () => {
		const { getByTestId } = render(
			<Button onClick={handleClick}>Send Form</Button>
		)

		const button = getByTestId(buttonTestID)
		fireEvent.click(button)

		expect(handleClick).toHaveBeenCalled()
	})

	it('Should be able to have a default style', () => {
		const { getByTestId } = render(<Button>Send Form</Button>)

		const button = getByTestId(buttonTestID)

		expect(button).toHaveStyle({
			backgroundColor: 'rgb(0, 0, 0)',
			color: 'rgb(255, 255, 255)'
		})
	})
})
