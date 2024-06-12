import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders without crashing', () => {
    render(<TodoList />);
});

test('renders the doing', () => {
    render(<TodoList />);
    const titleElement = screen.getByText(/DOING/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders the done', () => {
    render(<TodoList />);
    const titleElement = screen.getByText(/DONE/i);
    expect(titleElement).toBeInTheDocument();
}
);

test('renders the form', () => {
    render(<TodoList />);
    const formElement = screen.getByText(/Add Todo/i);
    expect(formElement).toBeInTheDocument();
}
);

