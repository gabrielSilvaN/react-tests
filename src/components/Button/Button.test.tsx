import { render, screen, act } from "@testing-library/react";
import { Button } from ".";

it("Should change button text correctly", () => {
  render(<Button data-testid="button" />);

  const buttonElement = screen.getByTestId("button");

  act(() => {
    buttonElement.click();
  });

  expect(buttonElement).toContainHTML("Clicked");
});
