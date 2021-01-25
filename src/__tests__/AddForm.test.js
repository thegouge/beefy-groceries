import { fireEvent, render } from '@testing-library/react-native';
import { AddForm } from '../components/AddForm';

describe('AddForm', () => {
	it('renders without crashing', () => {
		const { getByTestId } = render(<AddForm />);
		expect(getByTestId('add-form-view')).toBeTruthy();
	});

	it('allows you to input stuff', () => {
		const { getByPlaceholderText, getByTestId } = render(<AddForm />);
		const input = getByPlaceholderText(/new item/i);
		const display = getByTestId('add-item-display');

		expect(input.props.value).toBe('');
		expect(display.props.children).toBe('');

		fireEvent.changeText(input, 'test input');

		expect(input.props.value).toBe('test input');
		expect(display.props.children).toBe('test input');
	});

	it('submits the value properly', () => {
		const { getByText, getByPlaceholderText } = render(<ToDoContainer />);
		const input = getByPlaceholderText(/new item/i);
		fireEvent.changeText(input, 'test input');
		fireEvent.press(getByText(/submit/i));

		expect(input.value).toBe('');
		expect(getByText('test input')).toBeTruthy();
	});
});
