# Funções do Código JavaScript

## main()
Responsável por inicializar:
- cena,
- renderizador,
- câmera,
- grupos e objetos.

Também configura eventos do mouse e o redimensionamento da janela.

## animate(time)
Responsável por animar a cena. 

Calcula as rotações e translações dos planetas e atualiza a renderização da cena.

## buildScene()
Constrói os objetos da cena, incluindo o Sol, os planetas, a Lua e o anel de Saturno. 

Cada planeta é criado como um grupo contendo uma esfera com textura.

## buildInvisibleBox()
Cria um cubo invisível que envolve todos os elementos da cena. 

Permite movimentar a cena como um todo quando o mouse é arrastado.

## onMouseDown(event)
Trata o evento de pressionar o botão do mouse. 

Atualiza a posição anterior do mouse.

## onMouseUp()
Trata o evento de soltar o botão do mouse. 

Indica que o botão não está mais pressionado.

## onMouseMove(event)
Trata o evento de mover o mouse com o botão pressionado. 

Calcula a diferença de movimento do mouse e atualiza a rotação do grupo da cena.

## onWindowResize()
Torna a cena responsiva ao redimensionar a janela do navegador. 

Atualiza o tamanho da renderização e a proporção da câmera.
