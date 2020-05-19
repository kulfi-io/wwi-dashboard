import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from '../components/nav-bar';

test("render Appbar", () => {
    const { getByTestId } = render(<Navbar />);
    const appbar = getByTestId("app-bar");

    expect(appbar.nodeName).toBe("HEADER");
});

test('render signin', () => {
    const { getByTestId } = render(<Navbar />);
    const signin = getByTestId('signin');

    expect(signin.nodeName).toBe('BUTTON');
    expect(signin.textContent).toBe('signin');
});

test("render signup", () => {
    const { getByTestId } = render(<Navbar />);
    const signup = getByTestId("signup");

     expect(signup.nodeName).toBe("BUTTON");
     expect(signup.textContent).toBe("signup");
});

test("render title", () => {
    const { getByTestId } = render(<Navbar />);
    const title = getByTestId('title');

    expect(title.nodeName).toBe("P");
    expect(title.textContent).toBe("wwi-dashboard");
});

test("render menu icon", () => {
    const { getByTestId } = render(<Navbar />);
    const menuIcon = getByTestId('menu-icon');

    expect(menuIcon.nodeName).toBe("svg");
    expect(menuIcon).toBeInTheDocument();
});