import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import App from "@/App";

const renderRoute = (pathname: string) => {
  window.history.pushState({}, "Test route", pathname);
  return render(<App />);
};

describe("property routes", () => {
  afterEach(() => {
    cleanup();
    window.history.pushState({}, "Reset route", "/");
  });

  it("renders can-miquel from its slug route", async () => {
    renderRoute("/can-miquel");

    expect(
      await screen.findByRole("heading", { level: 1, name: "Ca'n Miquel" }),
    ).toBeInTheDocument();
  });

  it("renders test-vivienda from its slug route", async () => {
    renderRoute("/test-vivienda");

    expect(
      await screen.findByRole("heading", { level: 1, name: "Test Vivienda" }),
    ).toBeInTheDocument();
  });
});
