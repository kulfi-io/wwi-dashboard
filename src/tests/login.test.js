import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Authenticate/login";
import store from "./test-store";
import { heplerText } from "../constants";
import { Simulate } from "react-dom/test-utils";

afterEach(cleanup);
describe("Login", () => {
    test("title is Login", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const header = component.getByTestId("header");

        expect(header).toBeInTheDocument;
        expect(header.textContent).toBe("Login");
    });

    test("email placeholder matches Email *", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        const email = component.getByTestId("email");
        const placeholder = email.firstChild;

        expect(placeholder.textContent).toEqual("Email *");
    });

    test("helper displays 'Invalid email' on change when value is empty", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const email = component.getByTestId("email");
        const helper = email.lastChild;

        email.value = "";
        Simulate.change(email);

        expect(helper.textContent).toBe(heplerText.INVALID_EMAIL);
    });

    test("email label displays 'Invalid email' on blur when value is empty", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const email = component.getByTestId("email");
        const helper = email.lastChild;

        email.value = "";
        Simulate.blur(email);

        expect(helper.textContent).toBe(heplerText.INVALID_EMAIL);
    });

    test("email label displays 'Invalid email' on change  when value is invalid format", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const email = component.getByTestId("email");
        const helper = email.lastChild;

        email.value = "abc";
        Simulate.change(email);

        expect(helper.textContent).toBe(heplerText.INVALID_EMAIL);
    });

    test("email label displays 'Invalid email' on blur  when value is invalid format", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const email = component.getByTestId("email");
        const helper = email.lastChild;

        email.value = "abc";
        Simulate.blur(email);

        expect(helper.textContent).toBe(heplerText.INVALID_EMAIL);
    });

    test("password placeholder matches Password *", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        const password = component.getByTestId("password");
        const placeholder = password.firstChild;

        expect(placeholder.textContent).toEqual("Password *");
    });

    test("password label displays 'Password must be at least 6 characters' on change when value is empty", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const password = component.getByTestId("password");
        const helper = password.lastChild;

        password.value = "";
        Simulate.change(password);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_6_CHAR);
    });

    test("password label displays 'Password must be at least 6 characters' on blur when value is empty", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const password = component.getByTestId("password");
        const helper = password.lastChild;

        password.value = "";
        Simulate.blur(password);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_6_CHAR);
    });

    test("password label displays 'Must be at least 6 characters' on change when values is less than 6 character", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const password = component.getByTestId("password");
        const helper = password.lastChild;

        password.value = "abc";
        Simulate.change(password);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_6_CHAR);
    });

    test("password label displays 'Must be at least 6 characters' on blur when values is less than 6 character", async () => {
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const password = component.getByTestId("password");
        const helper = password.lastChild;

        password.value = "abc";
        Simulate.blur(password);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_6_CHAR);
    });
});
