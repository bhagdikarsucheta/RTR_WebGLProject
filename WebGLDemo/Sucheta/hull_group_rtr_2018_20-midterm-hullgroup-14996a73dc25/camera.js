const dirX = 0;
const dirY = 1;
const dirZ = 2;

var camera = {
    pos: new Float32Array([-6.0, 0.0, 30.0]),
    center: new Float32Array([-5.0, 0.0, 0.0]),
    up: new Float32Array([0.0, 1.0, 0.0]),
    radius: 15.0
}

function moveCamera(dir, steps) {
    camera.pos[dir] += steps;
    camera.center[dir] += steps;
}

function updateCameraPosition(pos) {
    camera.pos = new Float32Array(pos);
}

function updateCameraCenter(center) {
    camera.center = new Float32Array(center);
}

function updateCameraUp(up) {
    camera.up = new Float32Array(up);
}

function updateCameraAngle(angle) {
    let newCenter = [camera.radius * Math.sin(angle), 0.0, -camera.radius * Math.cos(angle)];
    newCenter[0] += camera.pos[0];
    newCenter[2] += camera.pos[2];

    updateCameraCenter(newCenter);
}

function updateCamera() {
    mat4.lookAt(viewMatrix, camera.pos, camera.center, camera.up);
}
