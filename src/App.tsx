import React from "react";
import "./assets/main.css";
import { Header } from "./components/header/Header";
import { RecoilRoot } from "recoil";
import { ProductList } from "./containers/ProductList";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Header itemsCount={0} />
        <div className="w-full max-w-screen-lg m-auto">
          <React.Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </React.Suspense>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
