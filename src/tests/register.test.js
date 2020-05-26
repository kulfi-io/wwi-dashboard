import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Register from "../components/Authenticate/register";
import store from "./test-store";
import { heplerText } from "../constants";
import { Simulate } from "react-dom/test-utils";

afterEach(cleanup);
describe("Register", () => {
    test("title is Login", async () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );
        const header = component.getByTestId("header");

        expect(header).toBeInTheDocument;
        expect(header.textContent).toBe("Register");
    });

    test("render placeholder in corresponding fields", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const fnWrapper = component.getByTestId("firstName");
        const fnLabel = fnWrapper.children[0].firstChild;

        const lnWrapper = component.getByTestId("lastName");
        const lnLabel = lnWrapper.children[0].firstChild;

        const emlWrapper = component.getByTestId("email");
        const emlLabel = emlWrapper.children[0].firstChild;

        const passWrapper = component.getByTestId("password");
        const passLabel = passWrapper.children[0].firstChild;

        const conPassWrapper = component.getByTestId("confirm");
        const conPassLabel = conPassWrapper.children[0].firstChild;

        expect(fnLabel.textContent).toEqual("First Name");
        expect(lnLabel.textContent).toEqual("Last Name");
        expect(emlLabel.textContent).toEqual("Email");
        expect(passLabel.textContent).toEqual("Password");
        expect(conPassLabel.textContent).toEqual("Confirm Password");
    });

    test("expect reset to clean fields", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const fnWrapper = component.getByTestId("firstName");
        const fnInput = fnWrapper.children[1].firstChild;

        const lnWrapper = component.getByTestId("lastName");
        const lnInput = lnWrapper.children[1].firstChild;

        const emlWrapper = component.getByTestId("email");
        const emlInput = emlWrapper.children[1].firstChild;

        const passWrapper = component.getByTestId("password");
        const passInput = passWrapper.children[1].firstChild;

        const conPassWrapper = component.getByTestId("confirm");
        const conPassInput = conPassWrapper.children[1].firstChild;

        const reset = component.getByTestId("reset");

        expect(fnInput.value).toEqual("");
        expect(lnInput.value).toEqual("");
        expect(emlInput.value).toEqual("");
        expect(passInput.value).toEqual("");
        expect(conPassInput.value).toEqual("");

        expect(reset.disabled).toBeTruthy();

        fnInput.value = "some text";
        lnInput.value = "txt";
        emlInput.value = "txt";
        passInput.value = "txt";
        conPassInput.value = "txt";

        Simulate.change(fnInput);
        Simulate.change(lnInput);
        Simulate.change(emlInput);
        Simulate.change(passInput);
        Simulate.change(conPassInput);

        expect(fnInput.value).toEqual("some text");
        expect(lnInput.value).toEqual("txt");
        expect(emlInput.value).toEqual("txt");
        expect(passInput.value).toEqual("txt");
        expect(conPassInput.value).toEqual("txt");

        expect(reset.disabled).toBeFalsy();

        Simulate.click(reset);

        expect(fnInput.value).toEqual("");
        expect(lnInput.value).toEqual("");
        expect(emlInput.value).toEqual("");
        expect(passInput.value).toEqual("");
        expect(conPassInput.value).toEqual("");

        expect(reset.disabled).toBeTruthy();
    });

    test("expect reset to be enabled on dirty", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("email");
        const email = wrapper.children[1].firstChild;
        const reset = component.getByTestId("reset");

        email.value = "some text";
        Simulate.change(email);

        expect(reset.disabled).toBeFalsy();
    });

    test("expect email field to display Invalid Email validation message on change", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("email");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "some";
        Simulate.change(input);

        expect(helper.textContent).toEqual(heplerText.INVALID_EMAIL);
    });

    test("expect email field to display Invalid Email validation message on blur", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("email");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "some";
        Simulate.blur(input);

        expect(helper.textContent).toEqual(heplerText.INVALID_EMAIL);
    });

    test("expect email field to display Invalid Email validation message on change", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("email");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "some";
        Simulate.change(input);

        expect(helper.textContent).toEqual(heplerText.INVALID_EMAIL);
    });

    test("expect First Name to display Must be at least 3 Characters validation message on change", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("firstName");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "so";
        Simulate.change(input);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_3_CHAR);
    });

    test("expect First Name to display Must be at least 3 Characters validation message on blur", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("firstName");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "so";
        Simulate.blur(input);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_3_CHAR);
    });

    test("expect Last Name to display Must be at least 3 Characters validation message on change", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("lastName");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "so";
        Simulate.change(input);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_3_CHAR);
    });

    test("expect last Name to display Must be at least 3 Characters validation message on blur", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("lastName");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "so";
        Simulate.blur(input);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_3_CHAR);
    });

    test("expect Password to display Must be at least 6 Characters validation message on change", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("password");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "so";
        Simulate.change(input);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_6_CHAR);
    });

    test("expect Password to display Must be at least 6 Characters validation message on blur", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const wrapper = component.getByTestId("password");
        const input = wrapper.children[1].firstChild;
        const helper = wrapper.lastChild;

        input.value = "so";
        Simulate.blur(input);

        expect(helper.textContent).toEqual(heplerText.MUST_BE_6_CHAR);
    });

    test("expect Confirm to display Invalid match for mismatched passwords", () => {
        const component = render(
            <Provider store={store}>
                <Register />
            </Provider>
        );

        const passWrapper = component.getByTestId("password");
        const passInput = passWrapper.children[1].firstChild;

         const conWrapper = component.getByTestId("confirm");
         const conInput = conWrapper.children[1].firstChild;
         const conHelper = conWrapper.lastChild;

        passInput.value = "password";
        Simulate.blur(passInput);
        conInput.value = "password1";
        Simulate.blur(conInput);

        expect(conHelper.textContent).toEqual(heplerText.INVALID_MATCH);
    });
});
