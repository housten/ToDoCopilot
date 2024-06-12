import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/TODO thingy/i);
  expect(titleElement).toBeInTheDocument();
});
test('allows the user to add a new todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const buttonElement = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(buttonElement);

  const newTodoElement = screen.getByText(/New Todo/i);
  expect(newTodoElement).toBeInTheDocument();
});
test('renders the input and button', () => {
  render(<TodoForm />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const buttonElement = screen.getByText(/Add/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
test('allows the user to mark a todo as completed', () => {
  render(<App />);
  // Assuming the first todo item has the text 'First Todo'
  const todoElement = screen.getByText(/First Todo/i);
  const checkboxElement = within(todoElement).getByRole('checkbox');

  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
});