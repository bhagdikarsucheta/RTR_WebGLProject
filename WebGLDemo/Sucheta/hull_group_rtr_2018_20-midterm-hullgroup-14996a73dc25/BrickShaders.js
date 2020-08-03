var vertexShaderObjectBrick;
var fragmentShaderObjectBrick;
var shaderProgramObjectBrick;

var BrickColor;
var MortarColor;
var BrickSize;
var BrickPct;


var modelUniformBrick;
var viewUniformBrick;
var projectionUniformBrick;
var BrickColorBrick;
var MortarColorBrick;
var BrickSizeBrick;
var BrickPctBrick;
var LightPositionUniformBrick;


var vao_quad_brick;
var vbo_position_quad_brick;
var vbo_normals_quad_brick;

//ForPyramid
var vao_pyramid;
var vbo_position_pyramid;
var vbo_normals_pyrmaid;

function initBrick() {
    //vertex shaderProgramObjectBrick
    var vertexShaderSourceCodeBrick =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +
        "in vec4 vPosition;" +
        "in vec3 vNormal;" +
        "const  float SpecularContribution = 0.3;" +
        "const  float DiffuseContribution = 1.0 - SpecularContribution;" +
        "vec3 viewVec;" +
        "uniform mat4 u_model_matrix;" +
        "uniform mat4 u_view_matrix;" +
        "uniform mat4 u_projection_matrix;" +
        "out vec3 MCposition;" +
        "out float diffuseColor;" +
        "uniform vec4 u_LightPosition;" +
        "in vec2 vTexture0_Coord;" +
        "out vec2 out_texture0_coord;" +
        "uniform mat4 u_mvp_matrix;" +
        "uniform vec3 u_LDUniform;" +
        "uniform vec3 u_KDUniform;" +
        "void main(void)" +
        "{" +
        "vec4 eye_coordinates = u_view_matrix *u_model_matrix * vPosition;" +
        "mat3 normalMatrix = mat3(u_view_matrix * u_model_matrix);" +
        "vec3 tNorm = normalize(normalMatrix * vNormal);" +
        "vec3 s = vec3(normalize((u_LightPosition.xyz - eye_coordinates.xyz)));" +
        "vec3 reflectVec = normalize(reflect(-s,tNorm));" +
        "viewVec = normalize(-eye_coordinates.xyz);" +
        "float diffuse =normalize(float(max(dot(s,tNorm),0.0)));" +
        "float spec = 0.0;" +
        "if(diffuse > 0.0)" +
        "{" +
        "spec = float(max(dot(reflectVec,viewVec),0.0));" +
        "spec = float(pow(spec,16.0));" +
        "}" +

        "diffuseColor =float(u_LDUniform  * max(dot(s,tNorm),0.0));" +


        "gl_Position = u_projection_matrix * u_view_matrix * u_model_matrix * vPosition;" +
        "MCposition = vPosition.xyz;" +
        "}";
    //"diffuseColor =( DiffuseContribution *max(dot(s,tNorm),0.0) + SpecularContribution * spec);" +
    vertexShaderObjectBrick = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObjectBrick, vertexShaderSourceCodeBrick);
    gl.compileShader(vertexShaderObjectBrick);
    if (gl.getShaderParameter(vertexShaderObjectBrick, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(vertexShaderObjectBrick);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    //fragmentShader
    var fragmentShaderSourceCodeBrick =

        "#version 300 es" +
        "\n" +
        "#define Integral(x,p,notp) ((floor(x) * (p)) + max(fract(x) - (notp),0.0))" +
        "\n" +
        "precision highp float;" +
        "in vec2 out_texture0_coord;" +
        "uniform vec3 BrickColor,MortarColor;" +
        "uniform vec2 BrickSize;" +
        "uniform vec2 BrickPct;" +
        "in float LightIntensity;" +
        "in vec3 MCposition;" +
        "in vec2 out_TexCoord;" +
        "in float diffuseColor;" +
        "out vec4 FragColor;" +
        "void main(void)" +
        "{" +
        "vec3 color;" +
        "vec2 position,useBrick,fw;" +
        "position = MCposition.xy / BrickSize;" +
        "if(fract(position.y * 0.5)> 0.5)" +
        "position.x += 0.5;" +
        "position = fract(position);" +
        "useBrick = step(position,BrickPct);" +
        "color = mix(MortarColor,BrickColor,useBrick.x * useBrick.y);" +
        "if (diffuseColor == 0.0)" +
        "{ " +
        "   color = vec3(0.83, 0.79, 0.59);" +  
        "} " +
        "else" +
        "{ " +
        "   color = color * diffuseColor; " +
        "} " +
        "FragColor = vec4(color,1.0);" +
        "}";
    fragmentShaderObjectBrick = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObjectBrick, fragmentShaderSourceCodeBrick);
    gl.compileShader(fragmentShaderObjectBrick);
    if (gl.getShaderParameter(fragmentShaderObjectBrick, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(fragmentShaderObjectBrick);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }
    //shader program
    shaderProgramObjectBrick = gl.createProgram();
    gl.attachShader(shaderProgramObjectBrick, vertexShaderObjectBrick);
    gl.attachShader(shaderProgramObjectBrick, fragmentShaderObjectBrick);

    //pre-link binidng of shader program object with vertex shader attributes
    gl.bindAttribLocation(shaderProgramObjectBrick, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(shaderProgramObjectBrick, WebGLMacros.VDG_ATTRIBUTE_NORMAL, "vNormal");
    //linking
    gl.linkProgram(shaderProgramObjectBrick);
    if (!gl.getProgramParameter(shaderProgramObjectBrick, gl.LINK_STATUS)) {
        var error = gl.getProgramInfoLog(shaderProgramObjectBrick);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //Post Linking
    modelUniformBrick = gl.getUniformLocation(shaderProgramObjectBrick, "u_model_matrix");
    viewUniformBrick = gl.getUniformLocation(shaderProgramObjectBrick, "u_view_matrix");
    projectionUniformBrick = gl.getUniformLocation(shaderProgramObjectBrick, "u_projection_matrix");
    BrickColorBrick = gl.getUniformLocation(shaderProgramObjectBrick, "BrickColor");
    MortarColorBrick = gl.getUniformLocation(shaderProgramObjectBrick, "MortarColor");
    BrickSizeBrick = gl.getUniformLocation(shaderProgramObjectBrick, "BrickSize");
    BrickPctBrick = gl.getUniformLocation(shaderProgramObjectBrick, "BrickPct");
    LDUniformBrick = gl.getUniformLocation(shaderProgramObjectBrick, "u_LDUniform");
    KDUniformBrick = gl.getUniformLocation(shaderProgramObjectBrick, "u_KDUniform");
    LightPositionUniformBrick = gl.getUniformLocation(shaderProgramObjectBrick, "u_LightPosition");




    var PyramidVertices = new Float32Array([
        // Perspective triangle (Front face)
        0.0, 1.0, 0.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,

        0.0, 1.0, 0.0,
        1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,

        0.0, 1.0, 0.0,
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,

        0.0, 1.0, 0.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0
    ]);


    var PyramidNormals = new Float32Array([
        // Perspective triangle (Front face)
        0.0, 0.447214, 0.894427,
        0.0, 0.447214, 0.894427,
        0.0, 0.447214, 0.894427,

        // Right face
        0.894427, 0.447214, 0.0,
        0.894427, 0.447214, 0.0,
        0.894427, 0.447214, 0.0,

        // Back face
        0.0, 0.447214, -0.894427,
        0.0, 0.447214, -0.894427,
        0.0, 0.447214, -0.894427,

        // Left face
        -0.894427, 0.447214, 0.0,
        -0.894427, 0.447214, 0.0,
        -0.894427, 0.447214, 0.0
    ]);
    var chckerBoardVertices = new Float32Array([
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
    ]);
    var chckerBoardNormals = new Float32Array([
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0
    ]);
    /////////// PYRAMID //////////




    vao_pyramid = gl.createVertexArray();
    gl.bindVertexArray(vao_pyramid);
    //vbo for positions
    vbo_position_pyramid = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position_pyramid);
    gl.bufferData(gl.ARRAY_BUFFER, PyramidVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_normals_pyrmaid = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_normals_pyrmaid);
    gl.bufferData(gl.ARRAY_BUFFER, PyramidNormals, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_NORMAL,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_NORMAL);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);//done with vao
 


    ////////// Q U A D //////////////////
    vao_quad_brick = gl.createVertexArray();
    gl.bindVertexArray(vao_quad_brick);
    //vbo for positions
    vbo_position_quad_brick = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position_quad_brick);
    gl.bufferData(gl.ARRAY_BUFFER, chckerBoardVertices,gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    

    vbo_normals_quad_brick= gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_normals_quad_brick);
    gl.bufferData(gl.ARRAY_BUFFER, chckerBoardNormals, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_NORMAL,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_NORMAL);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);//done with vao
}


function drawPyramid() {

    gl.uniform2f(BrickPctBrick, 0.90, 0.85);
    gl.uniform3f(BrickColorBrick, 0.6, 0.2, 0.0);
    gl.uniform3f(MortarColorBrick, 0.85, 0.86, 0.84);
    gl.uniform2f(BrickSizeBrick, 0.20, 0.25);
    gl.uniform4f(LightPositionUniformBrick, 0.0, 0.0, 4.0, 1.0);
    gl.uniform3f(LDUniformBrick, 1.0, 1.0, 1.0);
    gl.uniform3f(KDUniformBrick, 0.1, 0.1, 0.1);

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [0.042, 11.78, -1.0]);
    mat4.scale(modelMatrix, modelMatrix, [8.5, 3.1, 9.0]);
    gl.uniformMatrix4fv(modelUniformBrick, false, modelMatrix);
    gl.uniformMatrix4fv(viewUniformBrick, false, viewMatrix);
    gl.uniformMatrix4fv(projectionUniformBrick, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_pyramid);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
    gl.bindVertexArray(null);
}
function EntryWall() {
    gl.uniform2f(BrickPctBrick, 0.90, 0.85);
    gl.uniform3f(BrickColorBrick, 0.6, 0.2, 0.0);
    gl.uniform3f(MortarColorBrick, 0.85, 0.86, 0.84);
    gl.uniform2f(BrickSizeBrick, 0.22, 0.25);
    gl.uniform4f(LightPositionUniformBrick, 0.0, 0.0, 4.0, 1.0);
    gl.uniform3f(LDUniformBrick, 1.0, 1.0, 1.0);
    gl.uniform3f(KDUniformBrick, 0.1, 0.1, 0.1);
    //Whole wall is divided in three parts as per the door
    //Wall 
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [0.042, 5.6, 8.1]);
    mat4.scale(modelMatrix, modelMatrix, [8.5, 3.1, 0.0001]);
    gl.uniformMatrix4fv(modelUniformBrick, false, modelMatrix);
    gl.uniformMatrix4fv(viewUniformBrick, false, viewMatrix);
    gl.uniformMatrix4fv(projectionUniformBrick, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_quad_brick);
    // gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.93, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    // //


    gl.uniform2f(BrickPctBrick, 0.90, 0.85);
    gl.uniform3f(BrickColorBrick, 0.6, 0.2, 0.0);
    gl.uniform3f(MortarColorBrick, 0.85, 0.86, 0.84);
    gl.uniform2f(BrickSizeBrick, 0.226, 0.333);
    gl.uniform4f(LightPositionUniformBrick, 0.0, 0.0, 4.0, 1.0);
    gl.uniform3f(LDUniformBrick, 1.0, 1.0, 1.0);
    gl.uniform3f(KDUniformBrick, 0.1, 0.1, 0.1);
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [1.70, -0.08, 8.1]);
    mat4.scale(modelMatrix, modelMatrix, [6.87, 2.59, 0.0000000001]);
    gl.uniformMatrix4fv(modelUniformBrick, false, modelMatrix);
    gl.uniformMatrix4fv(viewUniformBrick, false, viewMatrix);
    gl.uniformMatrix4fv(projectionUniformBrick, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_quad_brick);
    // gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.93, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    // gl.uniform2f(BrickPctBrick, 0.90, 0.85);
    // gl.uniform3f(BrickColorBrick, 0.6, 0.2, 0.0);
    // gl.uniform3f(MortarColorBrick, 0.85, 0.86, 0.84);
    // gl.uniform2f(BrickSizeBrick, 0.30, 0.35);
    // gl.uniform4f(LightPositionUniformBrick, 0.0, 0.0, 4.0, 1.0);
    // gl.uniform3f(LDUniformBrick, 1.0, 1.0, 1.0);
    // gl.uniform3f(KDUniformBrick, 0.1, 0.1, 0.1);
    // modelMatrix = mat4.identity(modelMatrix);
    // mat4.translate(modelMatrix, modelMatrix, [1.70, -0.1, 8.1]);
    // mat4.scale(modelMatrix, modelMatrix, [6.84, 2.65, 0.0000000001]);
    // gl.uniformMatrix4fv(modelUniformBrick, false, modelMatrix);
    // gl.uniformMatrix4fv(viewUniformBrick, false, viewMatrix);
    // gl.uniformMatrix4fv(projectionUniformBrick, false, perspectiveProjectionMatrix);
    // gl.bindVertexArray(vao_quad_brick);
    // // gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.93, 0.0, 0.0);
    // gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    // gl.bindVertexArray(null);


    //     modelmatrix = mat4.identity(modelMatrix);
    //     mat4.translate(modelMatrix, modelMatrix, [1.70, -0.1, 8.1]);
    //     // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    //     mat4.scale(modelMatrix, modelMatrix, [6.84, 1.62, 0.0]);
    //     gl.uniformMatrix4fv(modelUniformBrick, false, modelMatrix);
    //     gl.uniformMatrix4fv(viewUniformBrick, false, viewMatrix);
    //     gl.uniformMatrix4fv(projectionUniformBrick, false, perspectiveProjectionMatrix);
    //   //  gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.93, 0.0, 0.0);
    //     gl.bindVertexArray(vao_rectangle);
    //     gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    //     gl.bindVertexArray(null);
}