import React from "react";
import { mount } from "enzyme";
import Icon from "./Icon";

describe("<Icon />", () => {
  let Wrapper;
  beforeAll(() => {
    Wrapper = mount(<Icon />);
  });

  it("renders without crashing", () => {
    expect(Wrapper).not.toBeNull();
  });
});
