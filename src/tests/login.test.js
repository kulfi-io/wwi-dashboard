import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/Authenticate/login";
import { Simulate } from "react-dom/test-utils";

describe("Login", () => {
    test("title is Login", async () => {
        const component = render(<Login />);
        const header = component.getByTestId("header");
        const headerWrapper = header.firstChild;
        const title = headerWrapper.firstChild;

        expect(title).toBeInTheDocument;
        expect(title.textContent).toBe('Login')
    });
    test("email label matches email", async () => {
        const component = render(<Login />);
        const label = component.container.querySelector("#email-label");

        expect(label.textContent).toBe("email");
    });

    test("email label displays 'Email is required' on change when value is empty", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "";
        Simulate.change(input);

        expect(label.textContent).toBe("Email is required");
    });

    test("email label displays 'Email is required' on blur when value is empty", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "";
        Simulate.blur(input);

        expect(label.textContent).toBe("Email is required");
    });

    test("email label displays 'Email is invalid' on change  when value is invalid format", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "abc";
        Simulate.change(input);

        expect(label.textContent).toBe("Email is invalid");
    });

    test("email label displays 'Email is required' on blur  when value is invalid format", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("email");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "abc";
        Simulate.blur(input);

        expect(label.textContent).toBe("Email is invalid");
    });

    test("password label matches password", async () => {
        const component = render(<Login />);
        const label = component.container.querySelector("#password-label");

        expect(label.textContent).toBe("password");
    });

    test("password label displays 'Password is required' on change when value is empty", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("password");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "";
        Simulate.change(input);

        expect(label.textContent).toBe("Password is required");
    });

    test("password label displays 'Password is required' on blur when value is empty", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("password");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "";
        Simulate.blur(input);

        expect(label.textContent).toBe("Password is required");
    });

    test("password label displays 'A least 6 characters' on change when values is less than 6 character", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("password");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "abc";
        Simulate.change(input);

        expect(label.textContent).toBe("A least 6 characters");
    });

    test("password label displays 'A least 6 characters' on blur when values is less than 6 character", async () => {
        const component = render(<Login />);
        const wrapper = component.getByTestId("password");

        const inputWrapper = wrapper.lastChild;
        let label = wrapper.firstChild;
        let input = inputWrapper.firstChild;

        input.value = "abc";
        Simulate.blur(input);

        expect(label.textContent).toBe("A least 6 characters");
    });
});
