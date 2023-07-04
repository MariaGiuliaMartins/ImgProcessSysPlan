Este é um projeto que representa o Sistema Solar em 3D utilizando a biblioteca Three.js. Ele exibe os planetas em suas órbitas ao redor do Sol e permite interações do usuário com o mouse para girar a visualização.

O seguinte projeto disponível online foi tomado como referência: http://sg-webgl.azurewebsites.net/

# Pré-requisitos

Antes de executar o projeto, certifique-se de ter baixado o projeto completo, incluindo a pasta [Assets](https://github.com/MariaGiuliaMartins/ImgProcessSysPlan/tree/main/Assets) que contém as dependências necessárias. As seguintes dependências estão 

incluídas na pasta Assets:
- [Three.js](https://threejs.org/)

# Instalação

Baixe o projeto completo.

Abra o arquivo [`solarSystem.html`](https://github.com/MariaGiuliaMartins/ImgProcessSysPlan/blob/main/SolarSystem/CodigoBase/solarSystem.html) em um navegador da web para visualizar o Sistema Solar em 3D.

# Uso

Ao abrir o arquivo [`solarSystem.html`](https://github.com/MariaGiuliaMartins/ImgProcessSysPlan/blob/main/SolarSystem/CodigoBase/solarSystem.html), você verá a representação em 3D do Sistema Solar. Os planetas estão dispostos em suas órbitas ao redor do Sol. Você pode interagir com a visualização usando o mouse:

- Clique e segure o botão do mouse para girar a visualização.
- Solte o botão do mouse para parar de girar.
- Mova o mouse enquanto mantém o botão pressionado para controlar a rotação.
- Além disso, a página exibe uma lista dos planetas na ordem em que eles estão localizados em relação ao Sol.

# Passos para a criação da cena

1 - Criação do Sol e dos planetas com as texturas e dimensões de distância e tamanho

- Tamanho retirado de: [Dialnet-DemonstreEmAulaComparacaoEntreOsTamanhosDosPlaneta-5165587.pdf](https://github.com/MariaGiuliaMartins/ImgProcessSysPlan/blob/main/Dialnet-DemonstreEmAulaComparacaoEntreOsTamanhosDosPlaneta-5165587.pdf)

- Distancias retiradas de: https://planetario.ufsc.br/o-sistema-solar/

2 - Rotação dos planetas e translação em torno do Sol

3 - Adição de um cubo com faces transparentes envolta dos planetas

4 - Permitindo que o cubo girasse com o clique do mouse

5 - Fixando o sistema solar dentro do cubo para que quando girasse, tudo girasse com o clique do mouse

6 - Adicionando os aneis de Saturno

- Uso de geometria de disco

- Inclinação do anel retirada de: http://www.ccvalg.pt/astronomia/noticias/2022/09/20_saturno_crisalida.htm#:~:text=20%20de%20setembro%20de%202022&text=Girando%20%C3%A0%20volta%20do%20equador,em%20que%20orbita%20o%20Sol.

7 - Deixando a Terra levemente inclinada

- Inclinação retirada de: https://www.infoescola.com/astronomia/inclinacao-axial-da-terra/

8 - Adicionando a lua ao redor da terra e fazendo sua rotação e translação

9 - Apagando as arestas do cubo
