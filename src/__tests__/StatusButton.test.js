import React from "react";
import { mount } from "enzyme";
import StatusButton from "../components/StatusButton";

describe("Testing StatusButton component", () => {
  it("Returns true when the status prop is false", () => {
    const onDoneFn = jest.fn();
    const wrapper = mount(<StatusButton status={false} onDone={onDoneFn} />);
    wrapper.find("div").simulate("click");
    expect(wrapper.props().onDone).toBeCalledWith(true);
    expect(wrapper.find("div").props().className).toBe("status-btn");
  });

  it("Returns false when the status prop is true", () => {
    const onDoneFn = jest.fn();
    const wrapper = mount(<StatusButton status={true} onDone={onDoneFn} />);
    wrapper.find("div").simulate("click");
    expect(wrapper.props().onDone).toBeCalledWith(false);
    expect(wrapper.find("div").props().className).toBe(
      "status-btn status-done"
    );
  });
});
