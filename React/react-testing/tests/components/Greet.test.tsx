import "@testing-library/jest-dom/vitest";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Mosh" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/mosh/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});

// describe("Greet", () => {
//   it("should render Hello with the name when name is provided", () => {
//     // this render function renders the component into a virtual Dom that is implemented by JS Dom
//     render(<Greet name="Mosh" />);

//     // screen.debug();
//     const heading = screen.getByRole("heading");
//     expect(heading).toBeInTheDocument();
//     expect(heading).toHaveTextContent(/mosh/i);
//   });

//   // it("should render login button when name is not provided", () => {
//   //   render(<Greet />);

//   //   const button = screen.getByRole("button");
//   //   expect(button).toBeInTheDocument();
//   //   expect(button).toHaveTextContent(/login/i);
//   // });
// });
