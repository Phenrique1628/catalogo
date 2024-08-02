// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import Header from "./components/Header"
import Footer from "./components/Footer"; 

export default function Home() {

  return (
    <div>
        <Header title={"SECRETÁAAAAAAAAAAAARIA, que trabalha o dia inteiro comigo"}/>
        <Footer desenvolvedor={"Porque eu sou seu esquema preferido"}/>
    </div>

  );
}