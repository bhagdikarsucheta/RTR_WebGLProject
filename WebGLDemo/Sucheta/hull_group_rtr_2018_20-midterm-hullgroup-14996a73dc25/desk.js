
var vao_Cube = null;

function initDeskAndMonitor() {

    let cubeVertices = new Float32Array([
        //TOP FACE
        1.0, 1.3, -1.0,
        -1.0, 1.3, -1.0,
        -1.0, 1.3, 1.0,
        1.0, 1.3, 1.0,

        //BOTTOM FACE
        1.0, -1.3, -1.0,
        -1.0, -1.3, -1.0,
        -1.0, -1.3, 1.0,
        1.0, -1.3, 1.0,

        //FRONT FACE
        1.0, 1.3, 1.0,
        -1.0, 1.3, 1.0,
        -1.0, -1.3, 1.0,
        1.0, -1.3, 1.0,

        //BACK FACE
        1.0, 1.3, -1.0,
        -1.0, 1.3, -1.0,
        -1.0, -1.3, -1.0,
        1.0, -1.3, -1.0,

        //RIGHT FACE
        1.0, 1.3, -1.0,
        1.0, 1.3, 1.0,
        1.0, -1.3, 1.0,
        1.0, -1.3, -1.0,

        //LEFT FACE
        -1.0, 1.3, 1.0,
        -1.0, 1.3, -1.0,
        -1.0, -1.3, -1.0,
        -1.0, -1.3, 1.0
    ]);

    let texcoords = new Float32Array([
        /* Top */
        0.0, 1.3,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.3,

        /* Bottom */
        1.0, 1.3,
        0.0, 1.3,
        0.0, 0.0,
        1.0, 0.0,

        /* Front */
        1.0, 1.3,
        0.0, 1.3,
        0.0, 0.0,
        1.0, 0.0,

        /* Back */
        1.0, 0.0,
        1.0, 1.3,
        0.0, 1.3,
        0.0, 0.0,

        /* Right */
        1.0, 0.0,
        1.0, 1.3,
        0.0, 1.3,
        0.0, 0.0,

        /* Left */
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.3,
        0.0, 1.3
    ]);


    vao_Cube = gl.createVertexArray();
    gl.bindVertexArray(vao_Cube);

    let vbo_Position_Cube = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Position_Cube);
    gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);

    let vboTexcoords = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboTexcoords);
    gl.bufferData(gl.ARRAY_BUFFER, texcoords, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_TEXTURE);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);
}

function drawMonitor() {
    ////////////// Monitor
    let mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, [1.5, 0.8, -5.0]);
    mat4.scale(mMatrix, mMatrix, [0.5, 0.2, 0.05]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_Cube);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    //monitor stand
    mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, [1.5, 0.5, -5.0]);
    mat4.scale(mMatrix, mMatrix, [0.04, 0.15, 0.05]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_Cube);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    //monitor base
    mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, [1.5, 0.28, -5.0]);
    mat4.scale(mMatrix, mMatrix, [0.2, 0.02, 0.2]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, mMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_Cube);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);
}

function drawDesk() {

    let mMatrix = mat4.create();
    //gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.5, 0.35, 0.05);

    mat4.translate(mMatrix, mMatrix, [3.5, -0.5, -4.0]);
    stack.push(mMatrix);

    mat4.scale(mMatrix, mMatrix, [1.95, 0.05, 1.75]);

    gl.bindTexture(gl.TEXTURE_2D, noiseTetxure);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_Cube);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    //Legs 1
    mMatrix = mat4.create();
    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [2.0, -1.27, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.05, 1.0, 1.75]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_Cube);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    //Legs 2
    mMatrix = mat4.create();
    mMatrix = stack.peek();

    mat4.translate(mMatrix, mMatrix, [-2.0, -1.27, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.05, 1.0, 1.75]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_Cube);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    stack.reset();
}
