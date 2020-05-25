import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Authenticate/nav-bar";
import store from "./test-store";

afterEach(cleanup);

describe("Navbar", () => {
    test("render header", () => {
        const component = render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );

        const appBar = component.getByTestId("app-bar");
        expect(appBar.nodeName).toBe("HEADER");
    });

    test("render signin", () => {
        const component = render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const signin = component.getByTestId("signin");

        expect(signin.nodeName).toBe("A");
        expect(signin.textContent).toBe("signin");
        expect(signin.getAttribute('href')).toBe('/signin')
        
    });

    test("render signup", () => {
        const component = render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const signup = component.getByTestId("signup");

        expect(signup.nodeName).toBe("A");
        expect(signup.textContent).toBe("signup");
        expect(signup.getAttribute("href")).toBe("/signup");

    });

    test("render title", () => {
        const component = render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const title = component.getByTestId("title-link");

        expect(title.textContent).toBe("wwi-dashboard");
        expect(title.getAttribute("href")).toBe("/");
    });

    test("render menu icon", () => {
        const component = render(
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
        const menuIcon = component.getByTestId("menu-icon");

        expect(menuIcon.nodeName).toBe("svg");
        expect(menuIcon).toBeInTheDocument();
    });
});
