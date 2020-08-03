var woodModelMatrixUniform = null;
var woodViewMatrixUniform = null;
var woodProjectionMatrixUniorm = null;
var woodSamplerUniform = null;
var noiseTetxure = null;

var woodShader = null;

function initWoodTexture() {
    // vertex shader
    let vertexShaderSourceCode =
        "#version 300 es" +
        "\n" +
        "in vec4 vPosition;" +
        "in vec2 vTexcoord;" +
        "uniform mat4 u_model_matrix;" +
        "uniform mat4 u_view_matrix;" +
        "uniform mat4 u_projection_matrix;" +
        "out vec2 out_Texcoord;" +
        "void main (void)" +
        "{" +
        "    gl_Position = u_projection_matrix * u_view_matrix * u_model_matrix * vPosition;" +
        "    out_Texcoord = vTexcoord;" +
        "}";

    vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderSourceCode);
    gl.compileShader(vertexShaderObject);

    if (!gl.getShaderParameter(vertexShaderObject, gl.COMPILE_STATUS)) {
        let error = gl.getShaderInfoLog(vertexShaderObject);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    // fragment shader
    let fragmentShaderSourceCode =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +
        "in vec2 out_Texcoord;" +
        "uniform sampler2D u_sampler;" +

        "vec3 lightWood = vec3(0.6, 0.3, 0.1);" +
        "vec3 darkWood = vec3(0.4, 0.2, 0.07);" +
        "float ringFreq = 4.0;" +
        "float lightGrains = 1.0;" +
        "float darkGrains = 1.0;" +
        "float grainThreshold = 0.5;" +
        "vec3 noiseScale = vec3(0.5, 0.5, 0.5);" +
        "float noisiness = 1.0;" +
        "float grainScale = 2.0;" +

        "out vec4 FragColor;" +
        "void main (void)" +
        "{" +
        "   vec3 noisevec = vec3(texture(u_sampler, out_Texcoord) * noisiness);" +
        "   vec2 location = (vec2(out_Texcoord*2.0)-vec2(1.0)) + noisevec.xy;" +
        "   float dist = sqrt(location.x * location.x + location.y * location.y);" +
        "   dist *= ringFreq;" +
        "   float r = fract(dist + noisevec[0] + noisevec[1] + noisevec[2]) * 2.0;" +
        "   if (r > 1.0)" +
        "       r = 2.0 - r;" +
        "   vec3 color = mix(lightWood, darkWood, r);" +
        "   r = fract((out_Texcoord.x + out_Texcoord.y) * grainScale + 0.5);" +
        "   noisevec[2] *= r;" +
        //"   if (r < grainThreshold)" +
        //"       color += lightWood + lightGrains * noisevec[2];" +
        //"   else" +
        "       color -= lightWood * darkGrains * noisevec[2];" +
        "   FragColor = vec4(color, 1.0);" +
        "}";

    fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderSourceCode);
    gl.compileShader(fragmentShaderObject);

    if (!gl.getShaderParameter(fragmentShaderObject, gl.COMPILE_STATUS)) {
        let error = gl.getShaderInfoLog(fragmentShaderObject);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    // shader program 
    woodShader = gl.createProgram();
    gl.attachShader(woodShader, vertexShaderObject);
    gl.attachShader(woodShader, fragmentShaderObject);

    // pre-linking binding of shader program object with vertex shader attributes
    gl.bindAttribLocation(woodShader, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(woodShader, WebGLMacros.VDG_ATTRIBUTE_TEXTURE, "vTexcoord");

    // linking
    gl.linkProgram(woodShader);
    if (!gl.getProgramParameter(woodShader, gl.LINK_STATUS)) {
        let error = gl.getProgramInfoLog(woodShader);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    // get mvp uniform location
    woodModelMatrixUniform = gl.getUniformLocation(woodShader, "u_model_matrix");
    woodViewMatrixUniform = gl.getUniformLocation(woodShader, "u_view_matrix");
    woodProjectionMatrixUniorm = gl.getUniformLocation(woodShader, "u_projection_matrix");
    woodSamplerUniform = gl.getUniformLocation(woodShader, "u_sampler");

    //Load cube textures 
    noiseTetxure = gl.createTexture();
    noiseTetxure.image = new Image();
    noiseTetxure.image.src = "perlin.png";
    noiseTetxure.image.onload = function () {
        gl.bindTexture(gl.TEXTURE_2D, noiseTetxure);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, noiseTetxure.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}

