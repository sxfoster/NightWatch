window.onload = function() {
  var canvas = document.getElementById('game-box');
  var gl = canvas.getContext('experimental-webgl');

  // asynchronous loading
  loadShaders(gl, ["fragment/fs-default", "vertex/vs-default"], function (shaders) {
    var fragmentWhatShader = shaders[0], vertexEverShader = shaders[1];
  });
};
