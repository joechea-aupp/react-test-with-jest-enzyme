import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import App from "../App";

jest.mock("../services", () => {
  return {
    getToDos: () =>
      Promise.resolve([
        {
          title: "Book concert tickets",
          done: false,
          id: 1
        },
        {
          title: "Buy a new iPhone",
          done: true,
          id: 2
        },
        {
          title: "Write an article on React",
          done: true,
          id: 3
        }
      ]),
    addTodo: obj => Promise.resolve({ ...obj, id: 4 })
  };
});

describe("Testing StatusButton component", () => {
  it("Renders a snapshot successfully!", async () => {
    let wrapper;
    await act(async () => {
      wrapper = mount(<App />);
    });

    expect(wrapper.html()).toMatchSnapshot();

    wrapper
      .find(".add-todo > input")
      .simulate("change", {
        target: { value: "This is an amazing task!" }
      })
      .simulate("keyup", { key: "Enter", keyCode: 13 });

    await act(async () => wrapper.update());

    expect(wrapper.html()).toMatchSnapshot();
  });
});
