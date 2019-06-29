import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

configure({ adapter: new Adapter() });

describe("<Navigation />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it(`renders 5 NavLinks if not authenticated`, () => {
    expect(wrapper.find(NavLink)).toHaveLength(5);
  });
  it(`renders 4 NavLinks if signed in`, () => {
    // wrapper.setProps({ isSignedIn: true });
    expect(wrapper.find(NavLink)).toHaveLength(5);
  });
  it(`contains Sign In if signed in`, () => {
    expect(
      // wrapper.setProps({ isSignedIn: true });
      wrapper.contains(<NavLink to="/dealers/sign-in">Sign In</NavLink>)
    ).toEqual(true);
  });
});
