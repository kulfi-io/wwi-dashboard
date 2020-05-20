import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Forgot from "../components/Authenticate/forgot";
import { Simulate } from "react-dom/test-utils";

describe("Login", () => {
    test("title is Forgot password", async () => {
        const component = render(<Forgot />);
        const header = component.getByTestId("header");
        const headerWrapper = header.firstChild;
        const title = headerWrapper.firstChild;

        expect(title).toBeInTheDocument;
        expect(title.textContent).toBe("Forgot password");
    });
    test("email label matches email", async () => {
        const component = render(<Forgot />);
        const label = component.container.querySelector("#email-label");

        expect(label.textContent).toBe("email");
    });

    test("email label displays 'Email is required' on change when value is empty", async () => {
        const component = render(<Forgot />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        const label = wrapper.firstChild;
        const input = inputWrapper.firstChild;

        input.value = "";
        Simulate.change(input);

        expect(label.textContent).toBe("Email is required");
    });

    test("email label displays 'Email is required' on blur when value is empty", async () => {
        const component = render(<Forgot />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "";
        Simulate.blur(input);

        expect(label.textContent).toBe("Email is required");
    });

    test("email label displays 'Email is invalid' on change  when value is invalid format", async () => {
        const component = render(<Forgot />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "abc";
        Simulate.change(input);

        expect(label.textContent).toBe("Email is invalid");
    });

    test("email label displays 'Email is required' on blur  when value is invalid format", async () => {
        const component = render(<Forgot />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "abc";
        Simulate.blur(input);

        expect(label.textContent).toBe("Email is invalid");
    });
});
