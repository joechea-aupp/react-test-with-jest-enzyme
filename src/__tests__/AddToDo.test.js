import React from "react";
import { mount } from "enzyme";
import AddToDo from "../components/AddToDo";

describe("Testing AddToDo component", () => {
  it("Returns the contents of the input field using the onAdd prop", () => {
    const onAddFn = jest.fn();
    const wrapper = mount(<AddToDo onAdd={onAddFn} />);

    wrapper
      .find("input")
      .simulate("change", {
        target: { value: "This is an amazing task!" }
      })
      .simulate("keyup", { key: "Enter", keyCode: 13 });

    expect(wrapper.props().onAdd).toBeCalledWith({
      done: false,
      title: "This is an amazing task!"
    });

    expect(wrapper.find("input").props().value).toBe("");
  });
});
