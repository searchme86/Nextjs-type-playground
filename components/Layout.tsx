import React from 'react';
import BoxComp from './BoxComp';
import BtnComp from './BtnComp';
import InputComp from './InputComp';

function Layout() {
  return (
    <>
      <BoxComp>
        <InputComp />
        <InputComp />
      </BoxComp>
      <BtnComp />
    </>
  );
}

export default Layout;
