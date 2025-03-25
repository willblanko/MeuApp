# Meu Primeiro App React Native

Este é um aplicativo simples desenvolvido em React Native que implementa um contador básico. O aplicativo permite ao usuário incrementar e decrementar o valor do contador através de botões.

## Como funciona

O aplicativo utiliza o hook `useState` do React para gerenciar o estado do contador. Os botões "Incrementar" e "Decrementar" atualizam o valor do contador, que é exibido na tela.

### Estrutura do Código

- **`App.js`**: Contém a lógica principal do aplicativo.
  - **Estado**: `contador` é o valor atual do contador, gerenciado pelo `useState`.
  - **Botões**:
    - "Incrementar": Aumenta o valor do contador em 1.
    - "Decrementar": Diminui o valor do contador em 1.
  - **Estilos**: Definidos usando `StyleSheet` para personalizar a aparência do aplicativo.

### Componentes

- **`Text`**: Exibe o título e o valor atual do contador.
- **`Button`**: Botões para incrementar e decrementar o contador.
- **`View`**: Contêineres para organizar os componentes na tela.

### Estilos

- **`container`**: Centraliza todo o conteúdo na tela.
- **`titulo`**: Estilo para o título do aplicativo.
- **`contador`**: Estilo para o texto que exibe o valor do contador.
- **`botoesContainer`**: Organiza os botões em uma linha com espaçamento igual.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o aplicativo com `react-native run-android` (ou `run-ios` para iOS).

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
