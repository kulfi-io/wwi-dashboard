import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("App", () => {
    test("App rendered with nav component", async () => {
        const component = render(<App />);
        const nav = component.getByTestId("navbar");

        expect(nav).toBeInTheDocument();
    });

     test("App rendered with login component", async () => {
         const component = render(<App />);
         const login = component.getByTestId("auth-login");

         expect(login).toBeInTheDocument();
     });
});
