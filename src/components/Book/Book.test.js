// @flow strict
import React from "react";
import renderer from "react-test-renderer";
import Book from "./Book";

describe("Book", () => {
  const props = {
    children: "test",
    title: "test"
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Book {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
