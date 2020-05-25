import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import store from "./test-store";

afterEach(cleanup);

describe("App", () => {
    test("App rendered with nav component", async () => {
        const component = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const nav = component.getByTestId("navbar");
        expect(nav).toBeInTheDocument();
    });

});
