import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Is the Heading Visible On the Page?', () => {
  //Arrange- Set up testing enviornment
  const { getByText } = render(<App/>)

  //No action

  //Assert
  const linkElement = getByText(/World Cup Teams Rankings/i);

});

test('Does Dark Mode Button Work?', () => {

  const { getByText } = render(<App/>)

  fireEvent.click(getByText(/dark mode/i));

});

test('Is The NavBar Visible?', () => {
  const{ getByText } = render(<App/>)
  const linkElement = getByText(/Dark Mode/i)
})


