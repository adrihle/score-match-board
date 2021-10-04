import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App/>));

describe("App", () => {
  it("must display a title", () => {
    expect(screen.queryByText(/hello/i)).toBeInTheDocument();
  });

  it("must display a description", () => {
    expect(screen.queryByText(/this is a Football Score Analysis/i)).toBeInTheDocument();
  });

});
