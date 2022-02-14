import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Search } from '.'

describe('Test for search component', () => {
  test('should be an input', () => {
    render(<Search />)
    const fieldNode = screen.getByTestId('input-element');
    expect(fieldNode).toBeInTheDocument();
  })

  test('Input should be recieve a value on input', () => {
    const nameSearch = 'fafa1';
    render(<Search />);

    const fieldNode = screen.getByTestId('input-element');
    fireEvent.change(fieldNode, { target: { value: nameSearch}})
    expect(fieldNode.value).toBe(nameSearch);


  })

  test('Verify the button click', () => {
    render(<Search />);

    const fieldNode = screen.getByTestId('button-element');
    fireEvent.click(fieldNode)
  })  
})