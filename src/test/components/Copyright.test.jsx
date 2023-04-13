/**
 * @jest-environment jsdom
 */

import { Copyright } from "../../components/Copyright";
import renderer from "react-test-renderer";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <Copyright page="https://github.com/DexDevLab">Daniel Almeida</Copyright>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseLeave();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
