/*
 * Thanks to:
 * http://webreflection.blogspot.com/2010/09/fragment-and-vertex-shaders-my-way-to.html
 * for the external shader loading solution
 */


var gl = canvas.getContext("experimental-webgl");

// synchronous order, one shader
var myFragmentShader = loadShaders(gl, "fs/myFragment");

// synch, more shaders
var shaders = loadShaders(gl, [
    "vs/what",
    "vs/ever"
]);
// [whatShader, everShader]


// asynchronous loading
loadShaders(gl, ["fs/what", "vs/ever"], function (shaders) {
    var
        fragmentWhatShader = shaders[0],
        vertexEverShader = shaders[1];
    ;
});


// asynch in "don't care mode, just cache them"
loadShaders(gl, ["fs/what", "vs/ever"], true);