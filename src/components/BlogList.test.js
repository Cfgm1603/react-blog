import { render, screen } from "@testing-library/react";
import BlogList from "./BlogList.jsx"
describe("BlogList", () => {
    it("Must show the title", () => {
        render(<BlogList />);
        expect(screen.queryByText(/Movies/i)).toBeInTheDocument();
  })
} )

