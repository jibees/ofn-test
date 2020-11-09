import React from 'react';
import './assets/main.css'
import { Header } from './components/header/Header';
import { RecoilRoot } from 'recoil';
import { ProductList } from './components/product/ProductList';

function App() {
  return (
    <RecoilRoot>
      <div >
        <Header itemsCount={0} />
        <div className="w-full">
          
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
