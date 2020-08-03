var vaoChair = null;

function initChair() {
    let vertices = new Float32Array([
        //TOP FACE
        0.75, 0.75, -0.75,
        -0.75, 0.75, -0.75,
        -0.75, 0.75, 0.75,
        0.75, 0.75, 0.75,

        //BOTTOM FACE
        0.75, -0.75, -0.75,
        -0.75, -0.75, -0.75,
        -0.75, -0.75, 0.75,
        0.75, -0.75, 0.75,

        //FRONT FACE
        0.75, 0.75, 0.75,
        -0.75, 0.75, 0.75,
        -0.75, -0.75, 0.75,
        0.75, -0.75, 0.75,

        //BACK FACE
        0.75, 0.75, -0.75,
        -0.75, 0.75, -0.75,
        -0.75, -0.75, -0.75,
        0.75, -0.75, -0.75,

        //RIGHT FACE
        0.75, 0.75, -0.75,
        0.75, 0.75, 0.75,
        0.75, -0.75, 0.75,
        0.75, -0.75, -0.75,

        //LEFT FACE
        -0.75, 0.75, 0.75,
        -0.75, 0.75, -0.75,
        -0.75, -0.75, -0.75,
        -0.75, -0.75, 0.75
    ]);

    let texcoords = new Float32Array([
        /* Top */
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,

        /* Bottom */
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,

        /* Front */
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,

        /* Back */
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        /* Right */
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        /* Left */
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
    ]);

    gl.bindVertexArray(vaoChair);

    let vboVertices = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboVertices);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
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

function drawChair() {

    let mMatrix = mat4.create();
    mat4.translate(mMatrix, mMatrix, [3.0, -1.5, -0.8]);
    mat4.rotateY(mMatrix, mMatrix, degToRad(-90));
    stack.push(mMatrix);

    gl.bindTexture(gl.TEXTURE_2D, noiseTetxure);

    // base 
    mat4.scale(mMatrix, mMatrix, [1.0, 0.3, 1.0]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoChair);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4)
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);


    // legs 1
    mMatrix = mat4.create();
    mMatrix = stack.peek();
    mat4.translate(mMatrix, mMatrix, [0.6, -0.6, 0.6]);
    mat4.scale(mMatrix, mMatrix, [0.22, 1.0, 0.22]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoChair);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    // legs 2
    mMatrix = mat4.create();
    mMatrix = stack.peek();
    mat4.translate(mMatrix, mMatrix, [0.6, -0.6, -0.6]);
    mat4.scale(mMatrix, mMatrix, [0.22, 1.0, 0.22]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoChair);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    // legs 3
    mMatrix = mat4.create();
    mMatrix = stack.peek();
    mat4.translate(mMatrix, mMatrix, [-0.6, -0.6, 0.6]);
    mat4.scale(mMatrix, mMatrix, [0.22, 1.0, 0.22]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoChair);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    // legs 4
    mMatrix = mat4.create();
    mMatrix = stack.peek();
    mat4.translate(mMatrix, mMatrix, [-0.6, -0.6, -0.6]);
    mat4.scale(mMatrix, mMatrix, [0.22, 1.0, 0.22]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoChair);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    // support
    mMatrix = mat4.create();
    mMatrix = stack.peek();
    mat4.translate(mMatrix, mMatrix, [0.6, 1.35, 0.0]);
    mat4.scale(mMatrix, mMatrix, [0.22, 1.5, 1.0]);

    gl.uniformMatrix4fv(woodModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(woodViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(woodProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoChair);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    gl.bindVertexArray(null);

    stack.reset();
}