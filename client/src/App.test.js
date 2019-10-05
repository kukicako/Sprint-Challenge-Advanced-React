import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('App renders without crashing', () => {
  render(<App />)
});
test('App header contains text', () => {
  const { getByText } = render(<App />)
  getByText(/Soccer Players/i);
}); 