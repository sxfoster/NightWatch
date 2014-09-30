window.onload = function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 1024 / 768, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  //renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize('1024', '768');
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({
    color : 0x222222,
    wireframe : true
  });

  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  render();
};
