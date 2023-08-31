import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../secaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";
export default function Main(){
   return(
    <main>
      <SecaoCapa/>
      <SecaoProdutos/>
      <SecaoSobre />
      <SecaoContato />
    </main>
   )
}