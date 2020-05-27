import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Authenticate/login";
import store from "./test-store";
import { heplerText, statusMessage } from "../constants";
import { Simulate } from "react-dom/test-utils";

function getComponent() { 
    const component = render(
        <Provider store={store}>
            <Login />
        </Provider>
    );

    return component;
}

afterEach(cleanup);
describe("Login", () => {
    test("title is Login", async () => {
        const component = getComponent();
        const header = component.getByTestId("header");

        expect(header).toBeInTheDocument;
        expect(header.textContent).toBe("Login");
    });

    test("email placeholder matches Email *", async () => {
        const component = getComponent();

        const email = component.getByTestId("email");
        const placeholder = email.firstChild;

        expect(placeholder.textContent).toEqual("Email *");
    });

    test("render fields helpertext on load", () => {
        const component = getComponent();

        const email = component.getByTestId("email");
        const password = component.getByTestId("password");

        expect(email.lastChild.nodeValue).toBeNull();
        expect(password.lastChild.nodeValue).toBeNull();
    });

    test("expect reset to be disabled on load", () => {
        const component = getComponent();

        const reset = component.getByTestId("reset");
        expect(reset.disabled).toBeTruthy();
    });

    test("expect helper to display Invalid email on change when not in email format", () => {
        const component = getComponent();

        const wrapper = component.getByTestId("email");
        const email = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        expect(helper.textContent).toMatch("");

        email.value = "aa";
        Simulate.change(email);

        expect(helper.textContent).toMatch(heplerText.INVALID_EMAIL);
    });

    test("expect helper to display Invalid email on blur when not in email format", () => {
        const component = getComponent();

        const wrapper = component.getByTestId("email");
        const email = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        expect(helper.textContent).toMatch("");

        email.value = "aa";
        Simulate.blur(email);

        expect(helper.textContent).toMatch(heplerText.INVALID_EMAIL);
    });

    test("expect helper to display 'Must be at least 6 characters' on change when password is to shortr", () => {
        const component = getComponent()

        const wrapper = component.getByTestId("password");
        const pass = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        expect(helper.textContent).toMatch("");

        pass.value = "aaaa";
        Simulate.change(pass);

        expect(helper.textContent).toMatch(heplerText.MUST_BE_6_CHAR);
    });

    test("expect helper to display 'Must be at least 6 characters' on blur when password is to shortr", () => {
        const component = getComponent();

        const wrapper = component.getByTestId("password");
        const pass = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        expect(helper.textContent).toMatch("");

        pass.value = "aaaa";
        Simulate.blur(pass);

        expect(helper.textContent).toMatch(heplerText.MUST_BE_6_CHAR);
    });

    test("expect reset to be enabled on dirty", () => {
        const component = getComponent();

        const wrapper = component.getByTestId("email");
        const email = wrapper.children[1].firstChild;
        const reset = component.getByTestId("reset");

        email.value = "some text";
        Simulate.change(email);

        expect(reset.disabled).toBeFalsy();
    });

    test("expect reset to clean fields", () => {
        const component = getComponent();

        const emailWrapper = component.getByTestId("email");
        const email = emailWrapper.children[1].firstChild;

        const passWrapper = component.getByTestId("password");
        const pass = passWrapper.children[1].firstChild;

        const reset = component.getByTestId("reset");

        expect(email.value).toEqual("");
        expect(pass.value).toEqual("");
        expect(reset.disabled).toBeTruthy();

        email.value = "some text";
        pass.value = "password";
        Simulate.change(email);
        Simulate.change(pass);

        expect(reset.disabled).toBeFalsy();

        Simulate.click(reset);

        expect(email.value).toEqual("");
        expect(pass.value).toEqual("");
        expect(reset.disabled).toBeTruthy();
    });

    test("expect to reset fields on valid login", () => {
        const component = getComponent();

        const note = component.getByTestId("note");

        const emailWrapper = component.getByTestId("email");
        const email = emailWrapper.children[1].firstChild;

        const passWrapper = component.getByTestId("password");
        const pass = passWrapper.children[1].firstChild;

        const login = component.getByTestId("login");

        expect(email.value).toEqual("");
        expect(pass.value).toEqual("");
        expect(reset.disabled).toBeTruthy();

        email.value = "tester@test.com";
        pass.value = "password";
        Simulate.change(email);
        Simulate.change(pass);
        Simulate.click(login);

        expect(note.value).toEqual(statusMessage.INVALID_USER);
    });

   


});
