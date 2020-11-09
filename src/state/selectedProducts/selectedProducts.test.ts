import { snapshot_UNSTABLE } from "recoil";
import { selectedProductsIdState, selectedProductsCount } from ".";

describe("Test selectedProducts state", () => {
  const initialSnapshot = snapshot_UNSTABLE();
  it("Should be at the default value", () => {
    expect(
      initialSnapshot.getLoadable(selectedProductsCount).valueOrThrow()
    ).toBe(0);
  });
  it("Sould add a product and count must be equal to 1", () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
      set(selectedProductsIdState, [1022])
    );
    expect(testSnapshot.getLoadable(selectedProductsCount).valueOrThrow()).toBe(
      1
    );
  });
});
