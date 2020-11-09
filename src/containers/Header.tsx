import React, { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { Header as HeaderComponent } from "../components/header/Header";
import { selectedProductsCount } from "../state/selectedProducts";
import { useHistory } from "react-router-dom";

export function Header() {
  const itemsCount = useRecoilValue(selectedProductsCount);
  const history = useHistory();
  const handleOnClickOnMyCart = useCallback(() => history.push("/my-cart"), [
    history,
  ]);
  const handleOnClickOnLogo = useCallback(() => history.push("/"), [history]);
  return (
    <HeaderComponent
      itemsCount={itemsCount}
      myCartHandler={handleOnClickOnMyCart}
      logoHandler={handleOnClickOnLogo}
    />
  );
}
