import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
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