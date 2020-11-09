import React from "react";
import { useRecoilValue } from "recoil";
import { Header as HeaderComponent } from "../components/header/Header";
import { selectedProductsCount } from "../state/selectedProducts";

export function Header() {
  const itemsCount = useRecoilValue(selectedProductsCount);
  return <HeaderComponent itemsCount={itemsCount} />;
}
