var checkTexture = null;
var checkSmallTexture = null;
const checkImageWidth = 64;
const checkImageHeight = 64;

var texModelMatrixUniform = null;
var texViewMatrixUniform = null;
var texProjectionMatrixUniorm = null;
var texSamplerUniform = null;

//fade in fade out
var mixUniform;
var Mixvar = 4.0;

//Flag
var FlagFade =2.0;
var flagUniform;

//hull shader fade in fade out
var mixHullGroupUniform;
//var flagHullGroupUniform;

var textureShader = null;

function initShaderWithTexture() {
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
        "out vec4 FragColor;" +
        "uniform float mixVar;" +
        "uniform float Flag;" +
        "vec4 color;" +
    
       "void main(void)" +
       "{" +
       "  color = texture(u_sampler,out_Texcoord);" +
       "if(Flag == 0.0f)" +
       "{" +
       "   FragColor = vec4(color);" +
       "}" +
       "if(Flag==1.0)" +
       "{" +
       "   FragColor = mix(vec4(color),vec4(0.0),mixVar);" +
       "}" +
        "if(Flag == 2.0)" +
        "{" +
            "FragColor = mix(vec4(color),vec4(0.0),mixVar);" +
        "}" +
       "}"

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
    textureShader = gl.createProgram();
    gl.attachShader(textureShader, vertexShaderObject);
    gl.attachShader(textureShader, fragmentShaderObject);

    // pre-linking binding of shader program object with vertex shader attributes
    gl.bindAttribLocation(textureShader, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(textureShader, WebGLMacros.VDG_ATTRIBUTE_TEXTURE, "vTexcoord");

    // linking
    gl.linkProgram(textureShader);
    if (!gl.getProgramParameter(textureShader, gl.LINK_STATUS)) {
        let error = gl.getProgramInfoLog(textureShader);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    // get mvp uniform location
    texModelMatrixUniform = gl.getUniformLocation(textureShader, "u_model_matrix");
    texViewMatrixUniform = gl.getUniformLocation(textureShader, "u_view_matrix");
    texProjectionMatrixUniorm = gl.getUniformLocation(textureShader, "u_projection_matrix");
    texSamplerUniform = gl.getUniformLocation(textureShader, "u_sampler");
    mixUniform = gl.getUniformLocation(textureShader, "mixVar");
    flagUniform = gl.getUniformLocation(textureShader, "Flag");
//    mixHullGroupUniform = gl.getUniformLocation(textureShader, "mixVar");

    // create textures
    let checkData = makeCheckImage();
    checkTexture = gl.createTexture();
    checkTexture.image = new Image();
    gl.bindTexture(gl.TEXTURE_2D, checkTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, checkImageWidth, checkImageHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, checkData);
    gl.bindTexture(gl.TEXTURE_2D, null);

    // create small tiles texture
    checkData = makeSmallCheckTexture();
    checkSmallTexture = gl.createTexture();
    checkSmallTexture.image = new Image();
    gl.bindTexture(gl.TEXTURE_2D, checkSmallTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, checkImageWidth, checkImageHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, checkData);
    gl.bindTexture(gl.TEXTURE_2D, null);

}

function makeSmallCheckTexture() {
    let checkImage = new Uint8Array(checkImageWidth * checkImageHeight * 4);

    for (let i = 0; i < checkImageHeight; i++) {
        for (let j = 0; j < checkImageWidth; j++) {
            let c = ((i & 2) ^ (j & 2));

            if (c == 2) {
                checkImage[((i * 64) + j) * 4 + 0] = 255;
                checkImage[((i * 64) + j) * 4 + 1] = 255;
                checkImage[((i * 64) + j) * 4 + 2] = 255;
            }
            else {
                checkImage[((i * 64) + j) * 4 + 0] = 135;
                checkImage[((i * 64) + j) * 4 + 1] = 206;
                checkImage[((i * 64) + j) * 4 + 2] = 235;
            }
            checkImage[((i * 64) + j) * 4 + 3] = 255;
        }
    }
    return checkImage;
}

function makeCheckImage() {
    let checkImage = new Uint8Array(checkImageWidth * checkImageHeight * 4);

    for (let i = 0; i < checkImageHeight; i++) {
        for (let j = 0; j < checkImageWidth; j++) {
            let c = ((i & 8) ^ (j & 8));

            if (c == 8) {
                checkImage[((i * 64) + j) * 4 + 0] = 50;
                checkImage[((i * 64) + j) * 4 + 1] = 50;
                checkImage[((i * 64) + j) * 4 + 2] = 50;
            }
            else {
                checkImage[((i * 64) + j) * 4 + 0] = 80;
                checkImage[((i * 64) + j) * 4 + 1] = 80;
                checkImage[((i * 64) + j) * 4 + 2] = 80;
            }
            checkImage[((i * 64) + j) * 4 + 3] = 255;
        }
    }

    return checkImage;
}
