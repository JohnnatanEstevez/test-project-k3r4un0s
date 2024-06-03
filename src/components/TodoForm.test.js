import { render, screen } from "@testing-library/react";
import React from "react";
import TodoForm from "./TodoForm";
import user from "@testing-library/user-event";
describe("TodoForm", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<TodoForm onSubmit={onSubmit} />);
  });

  it("onSubmit is called when all fields pass validation", () => {
    user.type(getTitle(), "titulo 1");
    user.type(getDescription(), "titulo 1");
  });

  it("has 3 required fields on first step", () => {
    // TODO
  });

  // TODO: more tests during the video
});
function getTitle() {
  return screen.getByRole("textbox", {
    name: /ingrese el titulo/i,
  });
}
function getDescription() {
  return screen.getByRole("textbox", {
    name: /ingrese la descripción/i,
  });
}
function getExpiryDate() {
  return screen.getByDisplayValue("texbox", { name: "/mm/dd/yyyy" / i });
}
