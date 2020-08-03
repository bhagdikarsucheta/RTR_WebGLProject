
const CHAR_DELTA = 0.5;

var sphere = null;
var stack = new Stack();

var delta = -5.0;
var diff = CHAR_DELTA;

function initCharacter() {
    sphere = new Mesh();
    makeSphere(sphere, 2.0, 50, 50);
}

function drawCharacter(pos, dir, cloths = false, sitting = false, typing = false) {
    // body
    let charScale = 0.6;
    let mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, pos);
    mat4.rotateY(mMatrix, mMatrix, degToRad(dir));
    stack.push(mMatrix);
    mat4.scale(mMatrix, mMatrix, [0.9 * charScale, 1.2 * charScale, 0.5 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    sphere.draw(0.98, 0.98, 0.98);

    if (cloths) {
        mat4.scale(mMatrix, mMatrix, [1.01, 1.01, 1.01]);
        gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
        gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
        gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
        sphere.draw(0.2, 0.2, 0.2);
    }

    // arms
    mMatrix = stack.peek();

    mat4.rotateZ(mMatrix, mMatrix, degToRad(-15.0));
    mat4.translate(mMatrix, mMatrix, [-0.9, 0.9, 0.1]);

    if (typing) { mat4.rotateX(mMatrix, mMatrix, -degToRad(50)); }
    mat4.rotateX(mMatrix, mMatrix, -degToRad(delta));
    mat4.translate(mMatrix, mMatrix, [0.0, -1.6 * charScale, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.3 * charScale, 0.8 * charScale, 0.3 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    sphere.draw(0.9, 0.9, 0.9);

    mMatrix = stack.peek();

    mat4.rotateZ(mMatrix, mMatrix, degToRad(15.0));
    mat4.translate(mMatrix, mMatrix, [0.9, 0.9, 0.1]);

    if (typing) { mat4.rotateX(mMatrix, mMatrix, -degToRad(50)); }
    mat4.rotateX(mMatrix, mMatrix, degToRad(delta));
    mat4.translate(mMatrix, mMatrix, [0.0, -1.6 * charScale, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.3 * charScale, 0.8 * charScale, 0.3 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    sphere.draw(0.9, 0.9, 0.9);

    // legs
    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [-0.45, -0.8, 0.0]);
    mat4.rotateZ(mMatrix, mMatrix, degToRad(15.0));

    if (sitting) { mat4.rotateX(mMatrix, mMatrix, degToRad(-85)); mat4.translate(mMatrix, mMatrix, [0.0, 0.2, -0.3]); }
    else if (!typing) { mat4.rotateX(mMatrix, mMatrix, degToRad(delta)); }

    mat4.translate(mMatrix, mMatrix, [0.0, -1.0 * charScale, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.3 * charScale, 0.5 * charScale, 0.3 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    if (cloths) { sphere.draw(0.1, 0.1, 0.1); }
    else { sphere.draw(0.9, 0.9, 0.9); }

    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [0.45, -0.8, 0.0]);
    mat4.rotateZ(mMatrix, mMatrix, degToRad(-15.0));

    if (sitting) { mat4.rotateX(mMatrix, mMatrix, degToRad(-85)); mat4.translate(mMatrix, mMatrix, [0.0, 0.2, -0.3]); }
    else if (!typing) { mat4.rotateX(mMatrix, mMatrix, -degToRad(delta)); }

    mat4.translate(mMatrix, mMatrix, [0.0, -1.0 * charScale, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.3 * charScale, 0.5 * charScale, 0.3 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    if (cloths) { sphere.draw(0.1, 0.1, 0.1); }
    else { sphere.draw(0.9, 0.9, 0.9); }

    // face
    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [0.0, 1.6, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.5 * charScale, 0.3 * charScale, 0.4 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    sphere.draw(0.95, 0.95, 0.95);

    // eyes
    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [-0.225, 1.5, 0.42]);
    mat4.scale(mMatrix, mMatrix, [0.06 * charScale, 0.06 * charScale, 0.06 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    sphere.draw(0.0, 0.0, 0.0);

    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [0.225, 1.5, 0.42]);
    mat4.scale(mMatrix, mMatrix, [0.06 * charScale, 0.06 * charScale, 0.06 * charScale]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    sphere.draw(0.0, 0.0, 0.0);
    stack.reset();
}

function updateCharacter(animate = true) {
    if (animate == true || delta != 0.0) {
        if (delta == 15.0) { diff = -CHAR_DELTA; }
        else if (delta == -15.0) { diff = CHAR_DELTA; }

        delta += diff;
    }
}
