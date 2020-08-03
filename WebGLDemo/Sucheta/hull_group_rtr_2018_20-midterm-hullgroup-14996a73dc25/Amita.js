var vaoCircleSun;
var vaoRectangle;
var vaoCircleMoon;

var vboPositionCirclePointsSun;
var vboColorCirclePointsSun;

var vboPositionCirclePointsMoon;
var vboColorCirclePointsMoon;

var vboPositionRectangle;
var vboColorRectangle;

var PI = 3.1415926;
var iMaxCirclePoints = 100;

var fZDisplacement = -5.6;

var fRadiusSun = 0.25;
var fRadiusMoon = 0.2;

var fXDisplacementSun = 3.0;
var fYDisplacementSun = 0.7;
var fMaxXDisplacementSun = 6.3;
var fMaxYDisplacementSun = 5.2;

var fXDisplacementMoon = 3.0;
var fYDisplacementMoon = 0.6;
var fMaxXDisplacementMoon = 6.3;
var fMaxYDisplacementMoon = 5.2;

var fRColorRectangle = 0.0;
var fGColorRectangle = 0.0;
var fBColorRectangle = 0.0;

var bStartAnimationForMoon = true;
var bStartAnimationForSun = false;

var iAnimationCount = 0;
var iMaxAnimationCount = 14;

function amitaInit() {

    //////////////////// AMITA'S PART /////////////////////////////////

    var rectangleVertices = new Float32Array([
        1.0, 0.5, 0.0,
        -1.0, 0.5, 0.0,
        -1.0, -0.5, 0.0,
        1.0, -0.5, 0.0]);

    /////////////////////////////////////////////////////////////// Main Rendering Quad ///////////////////////////////////////////////////////
    vaoRectangle = gl.createVertexArray();
    gl.bindVertexArray(vaoRectangle);

    vboPositionRectangle = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboPositionRectangle);
    gl.bufferData(gl.ARRAY_BUFFER, rectangleVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    ////////////////////////////////////// Main Rendering Quad - Color ///////////////////////////////////////////////////////
    vboColorRectangle = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboColorRectangle);
    var rectangleColors = new Float32Array([4 * 4]);
    gl.bufferData(gl.ARRAY_BUFFER, rectangleColors, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR,
        4,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);

    /////////////////////////////////////////////////////////////////////////////////////////////////// SUN ///////////////////////////////////////////////////////
    vaoCircleSun = gl.createVertexArray();
    gl.bindVertexArray(vaoCircleSun);

    ////////////////////////////////////// Sun - Position ///////////////////////////////////////////////////////

    vboPositionCirclePointsSun = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboPositionCirclePointsSun);
    var circleVerticesSun = new Float32Array([102 * 3]);
    gl.bufferData(gl.ARRAY_BUFFER, circleVerticesSun, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    ////////////////////////////////////// Sun - Color///////////////////////////////////////////////////////

    vboColorCirclePointsSun = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboColorCirclePointsSun);
    var circleColorsSun = new Float32Array([102 * 3]);
    gl.bufferData(gl.ARRAY_BUFFER, circleColorsSun, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR,
        3,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);

    /////////////////////////////////////////////////////////////////////////////////////////////////// MOON ///////////////////////////////////////////////////////

    // ** Moon colors, shader attribs, vbo, vao initialization
    vaoCircleMoon = gl.createVertexArray();
    gl.bindVertexArray(vaoCircleMoon);
    ////////////////////////////////// Moon - Position ///////////////////////////////////////////////////////

    vboPositionCirclePointsMoon = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboPositionCirclePointsMoon);
    var circleVerticesMoon = new Float32Array([102 * 3]);
    gl.bufferData(gl.ARRAY_BUFFER, circleVerticesMoon, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    ////////////////////////////////// Moon - Color ///////////////////////////////////////////////////////
    vboColorCirclePointsMoon = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vboColorCirclePointsMoon);
    var circleColorsMoon = new Float32Array([102 * 3]);
    gl.bufferData(gl.ARRAY_BUFFER, circleColorsMoon, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR,
        3,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);


}
function amitaDraw() {


    gl.useProgram(shaderProgramObjectG);
    gl.enable(gl.BLEND);
    if (bStartAnimationForSun == true) {
        drawSun(fRadiusSun);

    }
    if (bStartAnimationForMoon == true) {
        drawMoon(fRadiusMoon);


    }
    AmitaWindow();
    updateAmita();

    gl.useProgram(null);

}




/////////////////////////////////////// AMITA ////////////////////////
function drawSun(fRadius) {


    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [fXDisplacementSun, fYDisplacementSun, fZDisplacement]);
    //  mat4.scale(modelMatrix, modelMatrix, [8.5, 5.8, 1.0]);
    // mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vaoCircleSun);

    const circleVerticesSun = [0.0, 0.0, 0.0]; // circle center vertex

    for (var i = 0; i <= iMaxCirclePoints; i++) {
        var angle = ((2 * PI * i) / iMaxCirclePoints);

        circleVerticesSun.push(Math.cos(angle) * fRadius);
        circleVerticesSun.push(Math.sin(angle) * fRadius);
        circleVerticesSun.push(0.0);
    }
    //console.log("Circle Vertices: " + circleVerticesSun);

    gl.bindBuffer(gl.ARRAY_BUFFER, vboPositionCirclePointsSun);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(circleVerticesSun), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false,
        0,
        0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    const circleColorsSun = [1.0, 0.0, 0.0]; // RGB COLOR]

    for (i = 0; i <= iMaxCirclePoints; i++) {
        if (i % 2 == 0) {
            circleColorsSun.push(1.0, 0.0, 0.0);
        } else {
            circleColorsSun.push(1.0, 1.0, 0.0);
        }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vboColorCirclePointsSun);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(circleColorsSun), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR,
        3,
        gl.FLOAT,
        false,
        0,
        0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    //gl.vertexAttrib3f(WebGLMacros.WebGLMacros.VDG_ATTRIBUTE_COLOR, 1.0,1.0,0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 102);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);
}
function drawMoon(fRadius) {


    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [fXDisplacementMoon, fYDisplacementMoon, fZDisplacement]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vaoCircleMoon);

    const circleVerticesMoon = [0.0, 0.0, 0.0];// circle center vertex

    for (var i = 0; i <= iMaxCirclePoints; i++) {
        var angle = ((2 * PI * i) / iMaxCirclePoints);

        circleVerticesMoon.push(Math.cos(angle) * fRadius);
        circleVerticesMoon.push(Math.sin(angle) * fRadius);
        circleVerticesMoon.push(0.0);
    }
    //console.log("Circle Vertices: " + circleVerticesMoon);

    gl.bindBuffer(gl.ARRAY_BUFFER, vboPositionCirclePointsMoon);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(circleVerticesMoon), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false,
        0,
        0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var circleColorsMoon = [0.75, 0.75, 0.75]; // RGB COLOR]

    for (i = 0; i <= iMaxCirclePoints; i++) {
        circleColorsMoon.push(0.75, 0.75, 0.75);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vboColorCirclePointsMoon);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(circleColorsMoon), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR,
        3,
        gl.FLOAT,
        false,
        0,
        0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 102);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindVertexArray(null);
}

function AmitaWindow() {

    // Window
    modelMatrix = mat4.identity(modelMatrix);


    mat4.translate(modelMatrix, modelMatrix, [4.5, 2.2, -5.7]);
    mat4.scale(modelMatrix, modelMatrix, [3.0, 3.3, 0.5]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    // Rectangle
    gl.blendEquation(gl.FUNC_ADD);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);


    gl.bindVertexArray(vaoRectangle);
    const rectangleColors =
        [fRColorRectangle, fGColorRectangle, fBColorRectangle, 0.3,
            fRColorRectangle, fGColorRectangle, fBColorRectangle, 0.3,
            fRColorRectangle, fGColorRectangle, fBColorRectangle, 0.3,
            fRColorRectangle, fGColorRectangle, fBColorRectangle, 0.3];

    gl.bindBuffer(gl.ARRAY_BUFFER, vboColorRectangle);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(rectangleColors), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR,
        4,
        gl.FLOAT,
        false,
        0,
        0);

    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

    gl.bindVertexArray(null);




}
function updateAmita() {
    if (iAnimationCount < iMaxAnimationCount) {
        //console.log("iAnimationCount: " + iAnimationCount);
        // if(bStartAnimationForSun == true){
        // if(fXDisplacementSun < fMaxXDisplacementSun && fYDisplacementSun < fMaxYDisplacementSun)
        // {
        //     fXDisplacementSun = fXDisplacementSun + 0.009;
        //     fYDisplacementSun = fYDisplacementSun + 0.009;

        //     
        // }
        //     fRadiusSun = fRadiusSun - 0.0007;
        // }
        // else if(fRColorRectangle > 0.0)
        // {
        //     fRColorRectangle = fRColorRectangle - 0.002;
        //     fGColorRectangle = fGColorRectangle - 0.0002;
        // }
        // else if (fRColorRectangle <= 0.0 && fXDisplacementSun >= fMaxXDisplacementSun)
        // {
        //     bStartAnimationForSun = false;
        //     bStartAnimationForMoon = true;
        // }
        if (bStartAnimationForMoon == true) {
            if (fXDisplacementMoon < fMaxXDisplacementMoon && fYDisplacementMoon < fMaxYDisplacementMoon) {
                fXDisplacementMoon = fXDisplacementMoon + 0.01;
                fYDisplacementMoon = fYDisplacementMoon + 0.0095;

                fRadiusMoon = fRadiusMoon - 0.0004;
            }
            else if (fYDisplacementMoon >= fMaxYDisplacementMoon || fXDisplacementMoon >= fMaxXDisplacementMoon) {

                bStartAnimationForMoon = false;
                bStartAnimationForSun = true;
                resetAnimationAmita();
            }
        }




        if (bStartAnimationForSun == true) {
            if (fXDisplacementSun < fMaxXDisplacementSun && fYDisplacementSun < fMaxYDisplacementSun) {

                fXDisplacementSun = fXDisplacementSun + 0.01;
                fYDisplacementSun = fYDisplacementSun + 0.0095;

                fRColorRectangle = fRColorRectangle + 0.0095;
                fGColorRectangle = fGColorRectangle + 0.00090;


                fRadiusSun = fRadiusSun - 0.0006;
            }
            else {

                iAnimationCount = iAnimationCount + 1;
                bStartAnimationForSun = false;


            }
        }





    }
    if (fXDisplacementSun > fMaxXDisplacementSun) {

        if (fRColorRectangle >= 0.0) {
//            console.log("fRColorRectangle" + fRColorRectangle);

            fRColorRectangle = fRColorRectangle - 0.025;
            fGColorRectangle = fGColorRectangle - 0.0025;
        }
        else {
            bStartAnimationForMoon = true;
            resetAnimationAmita();
        }

    }
}

function resetAnimationAmita() {
 //   console.log("Reset Called ");
    fRadiusSun = 0.3;
    fRadiusMoon = 0.2;

    fXDisplacementSun = 3.0;
    fYDisplacementSun = 0.7;

    fXDisplacementMoon = 3.0;
    fYDisplacementMoon = 0.6;

    fRColorRectangle = 0.0;
    fGColorRectangle = 0.0;
    fBColorRectangle = 0.0;

    // bStartAnimationForMoon = false;
    // bStartAnimationForSun = true;

    if (iAnimationCount == iMaxAnimationCount) {
        bStartAnimationForSun = false;
    }

}






