var animateZAstro = 10.0;
var animateZMedi = 10.0;
var animateZComp = 10.0;

function drawAstro() {

    gl.useProgram(textureShader);

    let mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, [-9.45, animateYAstro, animateZAstro]);
    mat4.rotateY(mMatrix, mMatrix, degToRad(90.0));
    mat4.scale(mMatrix, mMatrix, [0.65*(1632.0/1200.0), 1.0, 1.0]);

    gl.uniformMatrix4fv(texModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);
    gl.uniform1f(mixUniform, Mixvar);
    gl.uniform1f(flagUniform, FlagFade);

    gl.bindTexture(gl.TEXTURE_2D, astroTex);
    gl.uniform1i(texSamplerUniform, 0);

    gl.bindVertexArray(vaoT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    gl.useProgram(null);
}

function drawMedi() {

    gl.useProgram(textureShader);

    let mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, [-9.45, animateYMedi, animateZMedi]);
    mat4.rotateY(mMatrix, mMatrix, degToRad(90.0));
    mat4.scale(mMatrix, mMatrix, [0.65*(1577.0/1105.0), 1.0, 1.0]);

    gl.uniformMatrix4fv(texModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);
    gl.uniform1f(mixUniform, Mixvar);
    gl.uniform1f(flagUniform, FlagFade);

    gl.bindTexture(gl.TEXTURE_2D, mediTex);
    gl.uniform1i(texSamplerUniform, 0);

    gl.bindVertexArray(vaoT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    gl.useProgram(null);
}

function drawComp() {

    gl.useProgram(textureShader);

    let mMatrix = mat4.create();

    mat4.translate(mMatrix, mMatrix, [-9.45, animateYComp, animateZComp]);
    mat4.rotateY(mMatrix, mMatrix, degToRad(90.0));
    mat4.scale(mMatrix, mMatrix, [0.65*(1425.0/1264.0), 1.0, 1.0]);

    gl.uniformMatrix4fv(texModelMatrixUniform, false, mMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);
    gl.uniform1f(mixUniform, Mixvar);
    gl.uniform1f(flagUniform, FlagFade);

    gl.bindTexture(gl.TEXTURE_2D, compTex);
    gl.uniform1i(texSamplerUniform, 0);

    gl.bindVertexArray(vaoT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    gl.useProgram(null);
}
