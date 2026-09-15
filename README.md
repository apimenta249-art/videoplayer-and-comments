# Estudo em JS básico

Este é um projeto pessoal criado para **estudar, testar e praticar JavaScript**, utilizando HTML como interface para visualizar na prática o funcionamento de diferentes recursos da linguagem.

O projeto não tem como objetivo ser uma aplicação final ou seguir necessariamente boas práticas de desenvolvimento. A ideia principal é servir como um **ambiente de experimentação**, onde novos conceitos podem ser adicionados, modificados ou substituídos conforme o aprendizado evolui.

## 📁 Estrutura do projeto

```text
/
├── index.html
├── script.js
├── style.css
└── assets/
    └── ...
```

### `index.html`

É a estrutura principal da página e funciona como a interface dos testes.

Neste arquivo estão os elementos HTML utilizados pelo JavaScript, incluindo:

* Título e textos da página;
* Reprodução de vídeo;
* Botões;
* Formulários;
* Campos para usuário, comentário e resultado;
* Links e outros elementos utilizados nos experimentos.

O arquivo também carrega o `style.css` para estilização e o `script.js`, que contém a lógica JavaScript.

### `script.js`

É o arquivo responsável pelos testes e experimentos em JavaScript.

Atualmente, ele contém exemplos envolvendo:

* `window.alert()`;
* `window.confirm()`;
* `window.prompt()`;
* Declaração de variáveis com `var` e `let`;
* Strings e concatenação;
* `document.getElementById()`;
* Manipulação do valor de elementos HTML;
* Conversão de strings para números com `parseFloat()`;
* Operações matemáticas;
* Comunicação entre JavaScript e campos do HTML.

Por exemplo, o código utiliza `prompt()` para receber informações do usuário e posteriormente coloca esses valores diretamente nos campos correspondentes da página.
Também existem testes relacionados à conversão de valores recebidos pelo `prompt()` para números utilizando `parseFloat()` e à realização de operações matemáticas.

### `style.css`

Arquivo responsável pela aparência visual da página.

Ele é referenciado pelo `index.html`, mas pode ser alterado ou completamente reestruturado conforme novos testes de HTML e CSS forem adicionados.

### `assets/`

Diretório destinado aos arquivos utilizados pelo projeto, como vídeos, imagens e outros recursos.

Atualmente, o `index.html` utiliza um vídeo localizado dentro desse diretório.

## 🧪 Objetivo do projeto

O objetivo deste repositório é acompanhar meu aprendizado de desenvolvimento web, principalmente em **JavaScript**, permitindo testar conceitos diretamente no navegador e observar seus resultados.

Por isso, é normal encontrar neste projeto:

* Código experimental;
* Comentários relacionados ao processo de aprendizado;
* Diferentes formas de realizar uma mesma tarefa;
* Testes incompletos;
* Código que posteriormente poderá ser substituído;
* Exemplos simples utilizados exclusivamente para aprendizado.

## 🔧 Modificações e contribuições

Este projeto está aberto para experimentação.

**Você pode modificar, reorganizar, melhorar ou substituir qualquer parte do código sem problemas.**

Se você quiser utilizar algum arquivo como base para seus próprios testes, sinta-se à vontade para:

* Alterar o HTML;
* Modificar ou substituir o JavaScript;
* Refatorar funções e variáveis;
* Adicionar novos exercícios;
* Criar novos arquivos;
* Alterar o CSS;
* Remover experimentos antigos;
* Testar novas funcionalidades.

Não é necessário manter a estrutura ou a implementação original. A finalidade deste repositório é justamente permitir **estudo, experimentação e evolução do código**.

## 📌 Observação

Este projeto é mantido principalmente como um registro do processo de aprendizado. Portanto, nem todo código presente aqui representa necessariamente a forma mais eficiente, moderna ou recomendada de implementar determinada funcionalidade.

Caso encontre alguma implementação que possa ser melhorada, fique à vontade para modificá-la e experimentar uma abordagem diferente.
