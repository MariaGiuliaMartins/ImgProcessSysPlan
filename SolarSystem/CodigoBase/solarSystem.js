import * as THREE from 'three';

const rendSize = new THREE.Vector2();
let scene, renderer, camera;
let group;
let cubeMesh;
let mouseDown = false;
let previousMousePosition = { x: 0, y: 0 };

function main() {
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
  rendSize.x = window.innerWidth;
  rendSize.y = window.innerHeight;
  renderer.setSize(rendSize.x, rendSize.y);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, rendSize.x / rendSize.y, 0.1, 1000);
  camera.position.set(100, -100, 600);
  scene.add(camera);

  group = new THREE.Group();
  scene.add(group);

  buildScene();
  buildInvisibleBox();

  renderer.clear();
  renderer.render(scene, camera);

  // Adicionar eventos do mouse
  renderer.domElement.addEventListener('mousedown', onMouseDown, false);
  renderer.domElement.addEventListener('mouseup', onMouseUp, false);
  renderer.domElement.addEventListener('mousemove', onMouseMove, false);

  // Atualizar o tamanho da renderização quando a janela for redimensionada
  window.addEventListener('resize', onWindowResize, false);

  requestAnimationFrame(animate);
}

function animate(time) {
  const sun = group.getObjectByName('Sun');
  const mercury = group.getObjectByName('Mercury');
  const venus = group.getObjectByName('Venus');
  const earth = group.getObjectByName('Earth');
  const mars = group.getObjectByName('Mars');
  const jupiter = group.getObjectByName('Jupiter');
  const saturn = group.getObjectByName('Saturn');
  const uranus = group.getObjectByName('Uranus');
  const neptune = group.getObjectByName('Neptune');
  const moon = group.getObjectByName('Moon');

  sun.rotation.y += 0.001;
  mercury.rotation.y = time * 0.0008;
  venus.rotation.y = time * 0.0007;
  earth.rotation.y = time * 0.0006;
  mars.rotation.y = time * 0.0005;
  jupiter.rotation.y = time * 0.0004;
  saturn.rotation.y = time * 0.0003;
  uranus.rotation.y = time * 0.0002;
  neptune.rotation.y = time * 0.0001;

  mercury.position.x = Math.cos(time * 0.0008) * 50;
  mercury.position.z = Math.sin(time * 0.0008) * 50;

  venus.position.x = Math.cos(time * 0.0007) * 70;
  venus.position.z = Math.sin(time * 0.0007) * 70;

  earth.position.x = Math.cos(time * 0.0006) * 90;
  earth.position.z = Math.sin(time * 0.0006) * 90;

  mars.position.x = Math.cos(time * 0.0005) * 110;
  mars.position.z = Math.sin(time * 0.0005) * 110;

  jupiter.position.x = Math.cos(time * 0.0004) * 150;
  jupiter.position.z = Math.sin(time * 0.0004) * 150;

  saturn.position.x = Math.cos(time * 0.0003) * 190;
  saturn.position.z = Math.sin(time * 0.0003) * 190;

  uranus.position.x = Math.cos(time * 0.0002) * 230;
  uranus.position.z = Math.sin(time * 0.0002) * 230;

  neptune.position.x = Math.cos(time * 0.0001) * 270;
  neptune.position.z = Math.sin(time * 0.0001) * 270;

  moon.position.x = Math.cos(time * 0.01) * 10 + earth.position.x;
  moon.position.z = Math.sin(time * 0.01) * 20 + earth.position.z;

  if (cubeMesh) {
    cubeMesh.rotation.y += 0.001;
  }

  renderer.clear();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

function buildScene() {
  const createPlanet = (name, texture, distanceFromSun, size) => {
    const planetGroup = new THREE.Group();

    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(texture) });
    const mesh = new THREE.Mesh(geometry, material);
    planetGroup.add(mesh);

    const distance = distanceFromSun * 50;
    planetGroup.position.x = distance;

    planetGroup.name = name;
    return planetGroup;
  };

  const planetSize = 8;

  const sun = createPlanet('Sun', 'sun.jpg', 0, 8);

  const mercury = createPlanet('Mercury', 'mercurio.jpg', 0.5, 3);

  const venus = createPlanet('Venus', 'venus.jpg', 1, 7);

  const earth = createPlanet('Earth', 'terra.jpg', 1.5, 7.5);

  const mars = createPlanet('Mars', 'marte.jpg', 2, 4);

  const jupiter = createPlanet('Jupiter', 'jupiter.jpg', 3, 12);

  const saturn = createPlanet('Saturn', 'saturno.jpg', 5.6, 7);

  const uranus = createPlanet('Uranus', 'urano.jpg', 11.2, 3);

  const neptune = createPlanet('Neptune', 'netuno.jpg', 18, 2.8);

  const moon = createPlanet('Moon', 'lua.jpg', 0.2, 1.5);

  const saturnRingGeometry = new THREE.RingGeometry(10, 14, 64);
  const saturnRingMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('saturnoBump.jpg'),
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8,
  });
  const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
  saturnRing.rotation.x = THREE.MathUtils.degToRad(-26.7);
  saturn.add(saturnRing);

  group.add(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, moon);
}

function buildInvisibleBox() {
  const cubeGeometry = new THREE.BoxGeometry(400, 400, 400);
  const cubeMaterial = new THREE.MeshNormalMaterial({
    wireframe: true,
    side: THREE.FrontSide,
    opacity: 0,
    transparent: true,
  });
  cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  group.add(cubeMesh);
}

function onMouseDown(event) {
  event.preventDefault();
  mouseDown = true;
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
}

function onMouseUp() {
  mouseDown = false;
}

function onMouseMove(event) {
  if (mouseDown) {
    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y,
    };

    group.rotation.y += deltaMove.x * 0.01;
    group.rotation.x += deltaMove.y * 0.01;
  }

  previousMousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
}

function onWindowResize() {
  rendSize.x = window.innerWidth;
  rendSize.y = window.innerHeight;
  camera.aspect = rendSize.x / rendSize.y;
  camera.updateProjectionMatrix();
  renderer.setSize(rendSize.x, rendSize.y);
}

main();
