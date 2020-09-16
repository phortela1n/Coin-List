import renderer from "react-test-renderer";
import Profile from "./Profile";
import React from "react";

describe("Profile snapshot", () => {
  const tree = renderer.create(<Profile />);
  it("should match", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
