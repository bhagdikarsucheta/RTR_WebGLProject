
var canvas = null;
var gl = null;
var bFullscreen = null;
var canvas_original_width;
var canvas_original_height;

var drawQuadZ;
var startAnimation = false;

/////Aditya's////
var vao_rectangle;
var vbo_brickNormals;
var ClockAngle = 0;
////////////////////


//For audio
var x;

var dirLettersA = 1.0;
var dirLettersM = 1.0;
var dirLettersC = 1.0;

var vertexShaderObjectBackWall;
var fragmentShaderObjectBackWall;
var shaderProgramObjectBackWall;

var flag = 0;
var vertexShaderObjectFlooring;
var fragmentShaderObjectFlooring;
var shaderProgramObjectFlooring;

var vertexShaderObjectG;
var fragmentShaderObjectG;
var shaderProgramObjectG;
var mvpUniformG;

//// Wall Fade in Fade Out
var WallFlag=1.0;
var WallMix=0.0;

var WallMixUniform;
var WallFlagUniform;


//Flags for The starting fadeIN
var flagStartTexture = 1;
var mixStartTextureUniform;
var mixStartTexture = 0.0;



//Gayatri Glass Color Variables
var r = 0.48;
var g = 0.56;
var b = 0.77;
var r1 = 0.75;
var g1 = 0.79;
var b1 = 0.88;
var alpha = 1.0;

var vaoT;
var vbo_PositionT;
var vbo_texcoordsT;

var mvpUniformDownFlooring;
var u_Translation;

var vao_quad;
var vbo_quad_position;
var vbo_quad_color;

var vao_line;
var vbo_line_color;
var vbo_line_position;

var vao_point;
var vbo_point_color;
var vbo_point_position;

var vao;
var vbo_Position;
var vbo_Color;
var vbo_texture;
var smiley_texture = 0;

var mvpUniform;
var u_Translation;

var perspectiveProjectionMatrix;

var projectionMatrixUniorm;
var modelMatrixUniform;
var viewMatrixUniform;

var drawCircleZ;

//floor 
var projectionMatrixUniormFloor;
var modelMatrixUniformFloor;
var viewMatrixUniformFloor;


var projectionMatrixUniormCommon;
var modelMatrixUniformCommon;
var viewMatrixUniformCommon;

var modelMatrix;
var viewMatrix;
var ProjectionMatrix;


//Aaditya
var VerticesOfCircle = new Float32Array(10000);
var gAngleAngleAll = -90.0;
var gAngleFrontDoor = 0;
var gAngleBathDoor = 0;
var gAngleHandle = 0;
var vao_CirclePoint;
var vbo_CirclePoint;
var numOfPoints = 0.0;
var vao_Circle;
var vbo_Position_Circle;
var vbo_Color_Circle;
var scaleMatrix;

var audioElement;
///audio context
//var AudioContext = new AudioContext();

//var oscillatorNode = audioCtx.createOscillator();
//var gainNode = audioCtx.createGain();

//var finish = audioCtx.destination;

//// character ////////

var charPos = [-6.75, -1.0, 25.0];
var charAngle = 180;
var charAnimate = true;
var charCloths = true;
var charSitting = false;
var charTyping = false;

///////////////////////


//Kundali Cube
var vao_CubeKundali;
var vbo_Position_CubeKundali;
var vbo_textureKundali;

//Texture address
var cube_texture = 0;
var VS_Texture = 0;
var code_image = 0;
var image_first = 0;
var doorNoteTexture = 0;
var groupNameTexture = 0;
var image_ubuntu = 0;
var booting = 0;

var winBoot = 0;
var winDesktop = 0;
var winEditor = 0;
var winCode = 0;
var UbuntuTexture = 0;
var ubuntuDesktopTexture = 0;
var ubuntuCodeTexture = 0;
var ubuntuTerminalTexture = 0;

var sanskritTex = 0;

var astroTex = 0;
var mediTex = 0;
var compTex = 0;

var dirLettersA = 1.0;
var dirLettersM = 1.0;
var dirLettersC = 1.0;

var vertexShaderObjectKundaliCube;
var shaderProgramObjectKundaliCube;
var fragmentShaderObjectKundaliCube;

var modelMatrixUniformKundaliCube;
var viewMatrixUniformKundaliCube;
var projectionMatrixUniformKundaliCube;
var uniform_texture0_samplerImage;

//Texture Memory Cube

var projectionMatrixUniormFBO;
var modelMatrixUniformFBO;
var viewMatrixUniformFBO;

//variables for framebuffer shader object
var gVertexShaderObject_FBO;
var gFragmentShaderObject_FBO;
var gShaderProgramObject_FBO;
var gMVPUniform_FBO;
var SamplerUniform_FBO;


var modelMatrixFBO;
var viewMatrixFBO;
var ProjectionMatrixFBO;

var FBO;
var Texture_FBO;
var fboRender;

var angleX = 0.0;
var angleY = 0.0;
var angleZ = 0.0;


var gVao_CubeTexture;
var gVBO_Texture;
var gVBO_Position;

var cameraAngle = 0.0;

var scene = 0;
var delay = 0;

var animateYAstro = 0.3;
var animateYMedi = 0.1;
var animateYComp = 0.5;
var groupName = "groupName.png";
var imageOnScreen = "Vijay_Kundali.png";
var imageOnScreenStart = "DesktopTexture1.png";
var imageCode = "CodePic.png";
var imageWindow = "Desktop.png";
var doorNote = "doorNote.png";
var bootImage = "booting.png";

var winBootImage = "winBoot.png";
var winDesktopImage = "WindowsImage.png";
var winCodeImage = "CodePic2.png";
var winEditorImage = "DesktopTexture12.png";

var ubuntuImage = "Ubuntu-16-04.png";
var ubuntuDesktop = "UbuntuDesktop.png";
var ubuntuTerminal = "UbuntuTerminal.png";
var ubuntuCode = "UbuntuCode.png";

var sanskritImage = "sanskrit.png";

var astroImage = "astro.png";
var mediImage = "medi.png";
var compImage = "comp.png";

var audioContext = null;
var track = null;

//var kundaliTexture = "Vijay_Kundali.png";

var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame;

var AudioContext = window.AudioContext || window.webkitAudioContext;

function main() {
    canvas = document.getElementById("AMC");
    if (!canvas)
        console.log("Obtaining Canvas Failed\n");
    else
        console.log("Obtaining Canvas Succeeded\n");
    //x = document.createElement("audio");

    //x.src = "MidTerm.mp3";
   // const x = document.querySelector('button');
    canvas_original_width = canvas.width;
    canvas_original_height = canvas.height;

    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("click", mouseDown, false);
    window.addEventListener("resize", resize, false);

    //audioElement.play();
    init();

    resize();
    draw();
}

function toggleFullScreen() {
    var fullscreen_element =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null;

    if (fullscreen_element == null) {
        if (canvas.requestFullscreen)
            canvas.requestFullscreen();
        else if (canvas.mozRequestFullScreen)
            canvas.mozRequestFullScreen();
        else if (canvas.webkitRequestFullscreen)
            canvas.webkitRequestFullscreen();
        else if (canvas.oRequestFullscreen)
            canvas.oRequestFullscreen();
        else if (canvas.msRequestFullscreen)
            canvas.msRequestFullscreen();
        bFullscreen = true;

    }
    else {
        if (document.exitFullscreen)
            document.exitFullscreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if (document.webkitExitFullScreen)
            document.webkitExitFullScreen();
        else if (document.msExitFullscreen)
            document.msExitFullscreen();
        bFullscreen = false;
    }
}

function init() {
    gl = canvas.getContext("webgl2");
    if (gl == null) {
        console.log("Failed to get the rendering context for WEBGL");
        return;
    }

    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

    ////////////// Back Wall //////////////
    initBackWall();
    ////////////// Down Flooring /////////////
    initDownFlooring();
    ////////////// common shader /////////////
    initCommonShader();
    ///////////// Brick Shader  /////////
    initBrick();
    /////////////////////////Dynamic Draw Quad,Line,Point//////////////////////////
    initDynamicDraw();
    //////////////////////init circlular shapes
    initcircleShapes();
    
    //// character ////////

    initCharacter();

    ///////////////////////

    //// desk and monitor ////////

    initDeskAndMonitor();
    initChair();
    initMonitor();
    initFBO();
    createFramebuffer();
    //////////////////////////////

    /////////////////////////Amita's Code
    amitaInit();
    /////////////////////////////////////

    initShaderWithTexture();
    initWoodTexture();

    ///Adding Depth 
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.POLYGON_OFFSET_FILL);

    perspectiveProjectionMatrix = mat4.create();

    ///////////// Audio
    audioContext = new AudioContext();

    audioElement = document.querySelector('audio');

    track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

}



function initMonitor() {
    /////////////////////////////////////////////////// Cube inside Monitor


    //VERTEX SHADER
    var vertexShaderSourceCodeKundaliCube =
        "#version 300 es" +
        "\n" +
        "in vec4 vPosition;" +
        "in vec2 vTexture0_Coord;" +
        "out vec2 out_texture0_coord;" +
        "uniform mat4 u_model_matrix;" +
        "uniform mat4 u_view_matrix;" +
        "uniform mat4 u_projection_matrix;" +
        "void main(void)" +
        "{" +
        "gl_Position = u_projection_matrix*u_view_matrix*u_model_matrix * vPosition;" +
        "out_texture0_coord = vTexture0_Coord;" +
        "}";

    vertexShaderObjectKundaliCube = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObjectKundaliCube, vertexShaderSourceCodeKundaliCube);
    gl.compileShader(vertexShaderObjectKundaliCube);
    if (gl.getShaderParameter(vertexShaderObjectKundaliCube, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(vertexShaderObjectKundaliCube);
        if (error.length > 0) {
            alert(error);
            unitialize();
        }
    }


    //fragment shader
    var fragmentShaderSourceCodeKundaliCube =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +
        "in vec2 out_texture0_coord;" +
        "uniform highp sampler2D u_texture0_sampler;" +
        "out vec4 FragColor;" +
        "vec4 color;" +
        "void main (void)" +
        "{" +
        "   FragColor = texture(u_texture0_sampler, out_texture0_coord);" +
        "}";

    fragmentShaderObjectKundaliCube = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObjectKundaliCube, fragmentShaderSourceCodeKundaliCube);
    gl.compileShader(fragmentShaderObjectKundaliCube);
    if (gl.getShaderParameter(fragmentShaderObjectKundaliCube, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(fragmentShaderObjectKundaliCube);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //shader program 
    shaderProgramObjectKundaliCube = gl.createProgram();
    gl.attachShader(shaderProgramObjectKundaliCube, vertexShaderObjectKundaliCube);
    gl.attachShader(shaderProgramObjectKundaliCube, fragmentShaderObjectKundaliCube);


    gl.bindAttribLocation(shaderProgramObjectKundaliCube, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(shaderProgramObjectKundaliCube, WebGLMacros.VDG_ATTRIBUTE_TEXTURE, "vTexture0_Coord");

    gl.linkProgram(shaderProgramObjectKundaliCube);
    if (!gl.getProgramParameter(shaderProgramObjectKundaliCube, gl.LINK_STATUS)) {
        var error = gl.getProgramInfoLog(shaderProgramObjectKundaliCube);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    //Load cube textures kunadali 
    //    image = imageOnScreen;

    loadTexturesKundali(imageOnScreen);
    loadTextures(imageOnScreenStart);
    loadTexturesCodeImage(imageCode);
    loadTexturesWindowImage(imageWindow);
    loadDoorNoteTexture();
    loadTexturesUbuntu(ubuntuImage);
    loadUbuntuDesktopImage(ubuntuDesktop);
    loadUbuntuTerminalImage(ubuntuTerminal);
    booting = loadTextureFromFile(bootImage);

    winBoot = loadTextureFromFile(winBootImage);
    winDesktop = loadTextureFromFile(winDesktopImage);
    winCode = loadTextureFromFile(winCodeImage);
    winEditor = loadTextureFromFile(winEditorImage);

    ubuntuCodeTexture = loadTextureFromFile(ubuntuCode);

    sanskritTex = loadTextureFromFile(sanskritImage);

    astroTex = loadTextureFromFile(astroImage);
    mediTex = loadTextureFromFile(mediImage);
    compTex = loadTextureFromFile(compImage);
    loadGroupNameTexture(groupName);

    modelMatrixUniformKundaliCube = gl.getUniformLocation(shaderProgramObjectKundaliCube, "u_model_matrix");
    viewMatrixUniformKundaliCube = gl.getUniformLocation(shaderProgramObjectKundaliCube, "u_view_matrix");
    projectionMatrixUniformKundaliCube = gl.getUniformLocation(shaderProgramObjectKundaliCube, "u_projection_matrix");
    uniform_texture0_samplerImage = gl.getUniformLocation(shaderProgramObjectKundaliCube, "u_texture0_sampler");

    var cubeVertices = new Float32Array([
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,

        //BOTTOM FACE
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,

        //FRONT FACE
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,

        //BACK FACE
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,

        //RIGHT FACE
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,

        //LEFT FACE
        -1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0]);

    var cubeTexcoords = new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ]);

    vao_CubeKundali = gl.createVertexArray();
    gl.bindVertexArray(vao_CubeKundali);

    vbo_Position_CubeKundali = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Position_CubeKundali);
    gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_textureKundali = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_textureKundali);
    gl.bufferData(gl.ARRAY_BUFFER, cubeTexcoords, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_TEXTURE);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    gl.bindVertexArray(null);

}

function initBackWall() {
    //////////////////////////////////////////////////////////////// Shader Sucheta Gayatri Back Wall //////////////////////////////////////////////////////////

    //VERTEX SHADER
    var vertexShaderSourceCodeBackWall =
        "   #version 300 es" +
        "   \n" +
        "   in vec4 vPosition;" +
        "   in vec2 vTexture0_Coord;" +
        "   out vec2 out_texture0_coord;" +
        "   in vec4 vColor;" +
        "   out vec4 out_Color;" +

        "   uniform mat4 u_model_matrix;" +
        "   uniform mat4 u_view_matrix;" +
        "   uniform mat4 u_projection_matrix;" +

        "   void main(void)" +
        "   {" +
        "       gl_Position = u_projection_matrix*u_view_matrix*u_model_matrix*vPosition;" +
        "       out_texture0_coord = vTexture0_Coord;" +
        "       out_Color = vColor;" +
        "   }";

    vertexShaderObjectBackWall = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObjectBackWall, vertexShaderSourceCodeBackWall);
    gl.shaderSource(vertexShaderObjectBackWall, vertexShaderSourceCodeBackWall);
    gl.compileShader(vertexShaderObjectBackWall);
    if (gl.getShaderParameter(vertexShaderObjectBackWall, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(vertexShaderObjectBackWall);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //FRAGMENT SHADER
    var fragmentShaderSourceCodeBackWall =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +
        "float PI=3.141592653589793;" +
        "in vec2 out_texture0_coord;" +
        "out vec4 FragColor;" +
        "in vec4 out_Color;" +
        "float circular_gradient(vec2 tex_coords,float scale)" +
        "{" +
        "     float s = tex_coords[0]*2.1;" +
        "     float t = tex_coords[1];" +
        "     float percent = abs(sin(s * scale*PI)) * abs(sin(t * scale*PI));" +
        "     return percent;" +
        "}" +

        "vec4 overlay(vec2 tex_coords)" +
        "{" +
        "       vec3 color = vec3(0.196, 0.804, 0.196);" +
        "       const int n=2;" +
        "       float scale = 2.0;" +
        "       float percent = 0.0;" +
        "       for(int j=0;j<n;j++)" +
        "       {" +
        "           percent += (0.2/float(n)) * circular_gradient(tex_coords,scale);" +
        "           scale *= 7.0;" +
        "       }" +
        "       return vec4(color*percent,1.0);" +
        "   }" +

        "void main(void)" +
        "{" +
        "   FragColor = out_Color + overlay(out_texture0_coord);" +
        "}";

    fragmentShaderObjectBackWall = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObjectBackWall, fragmentShaderSourceCodeBackWall);
    gl.compileShader(fragmentShaderObjectBackWall);
    if (gl.getShaderParameter(fragmentShaderObjectBackWall, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(fragmentShaderObjectBackWall);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //shader program 
    shaderProgramObjectBackWall = gl.createProgram();
    gl.attachShader(shaderProgramObjectBackWall, vertexShaderObjectBackWall);
    gl.attachShader(shaderProgramObjectBackWall, fragmentShaderObjectBackWall);


    gl.bindAttribLocation(shaderProgramObjectBackWall, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(shaderProgramObjectBackWall, WebGLMacros.VDG_ATTRIBUTE_TEXTURE, "vTexture0_Coord");
    gl.bindAttribLocation(shaderProgramObjectBackWall, WebGLMacros.VDG_ATTRIBUTE_COLOR, "vColor");

    gl.linkProgram(shaderProgramObjectBackWall);
    if (!gl.getProgramParameter(shaderProgramObjectBackWall, gl.LINK_STATUS)) {
        var error = gl.getProgramInfoLog(shaderProgramObjectBackWall);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    modelMatrixUniform = gl.getUniformLocation(shaderProgramObjectBackWall, "u_model_matrix");
    viewMatrixUniform = gl.getUniformLocation(shaderProgramObjectBackWall, "u_view_matrix");
    projectionMatrixUniorm = gl.getUniformLocation(shaderProgramObjectBackWall, "u_projection_matrix");

    var quadVertices = new Float32Array([
        -1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0]);


    var texCoords = new Float32Array([
        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,
    ]);

    var color = new Float32Array(16);
    /*Plain wall*/
    /*Faint Yellow*/
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.8, 0.8);

    vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    vbo_Position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_quad_color = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, color, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_texture = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texture);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_TEXTURE);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);

}




function initDownFlooring() {
    ////////////////////////////////////////////////////////////////Shader Sucheta Down Flooring///////////////////////////////////////

    //VERTEX SHADER
    var vertexShaderSourceCodeFloor =
        "   #version 300 es" +
        "   \n" +
        "   in vec4 vPosition;" +
        "   in vec2 vTexture0_Coord;" +
        "   out vec2 out_texture0_coord;" +
        "   in vec4 vColor;" +
        "   out vec4 out_Color;" +

        "   uniform mat4 u_model_matrix;" +
        "   uniform mat4 u_view_matrix;" +
        "   uniform mat4 u_projection_matrix;" +
        "   void main(void)" +
        "   {" +
        "       gl_Position = u_projection_matrix*u_view_matrix*u_model_matrix*vPosition;" +
        "       out_texture0_coord = vTexture0_Coord;" +
        "       out_Color = vColor;" +
        "   }";

    vertexShaderObjectFlooring = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObjectFlooring, vertexShaderSourceCodeFloor);
    gl.compileShader(vertexShaderObjectFlooring);
    if (gl.getShaderParameter(vertexShaderObjectFlooring, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(vertexShaderObjectFlooring);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //FRAGMENT SHADER
    var fragmentShaderSourceCodeFloor =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +

        "in vec2 out_texture0_coord;" +
        "float PI=3.141592653589793;" +
        "out vec4 FragColor;" +
        "float circular_gradient(vec2 tex_coords,float scale)" +
        "{" +
        "    float s = tex_coords[0];" +
        "    float t = tex_coords[1];" +
        "    float percent = abs(cos(s * scale*PI)) * abs(cos(t * scale*PI));" +
        "    return percent;" +
        "}" +

        "vec4 overlay(vec2 tex_coords)" +
        "{" +
        "   vec3 brown = vec3(0.871, 0.722, 0.529);" +
        "   const int n=3;" +
        "   float scale = 0.5;" +
        "   float percent = 0.0;" +
        "   for(int j=0;j<n;j++)" +
        "   {" +
        "       percent += (1.0/float(n)) * circular_gradient(tex_coords,scale);" +
        "       scale *= 5.0*2.0;" +
        "   }" +
        "   return vec4(brown*percent,1.0);" +

        "}" +

        "void main(void)" +
        "{" +
        "   FragColor = overlay(out_texture0_coord);" +
        "}";

    fragmentShaderObjectFlooring = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObjectFlooring, fragmentShaderSourceCodeFloor);
    gl.compileShader(fragmentShaderObjectFlooring);
    if (gl.getShaderParameter(fragmentShaderObjectFlooring, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(fragmentShaderObjectFlooring);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //shader program 
    shaderProgramObjectFlooring = gl.createProgram();
    gl.attachShader(shaderProgramObjectFlooring, vertexShaderObjectFlooring);
    gl.attachShader(shaderProgramObjectFlooring, fragmentShaderObjectFlooring);


    gl.bindAttribLocation(shaderProgramObjectFlooring, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(shaderProgramObjectFlooring, WebGLMacros.VDG_ATTRIBUTE_TEXTURE, "vTexture0_Coord");
    gl.bindAttribLocation(shaderProgramObjectFlooring, WebGLMacros.VDG_ATTRIBUTE_COLOR, "vColor");

    gl.linkProgram(shaderProgramObjectFlooring);
    if (!gl.getProgramParameter(shaderProgramObjectFlooring, gl.LINK_STATUS)) {
        var error = gl.getProgramInfoLog(shaderProgramObjectFlooring);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    modelMatrixUniformFloor = gl.getUniformLocation(shaderProgramObjectFlooring, "u_model_matrix");
    viewMatrixUniformFloor = gl.getUniformLocation(shaderProgramObjectFlooring, "u_view_matrix");
    projectionMatrixUniormFloor = gl.getUniformLocation(shaderProgramObjectFlooring, "u_projection_matrix");

    var quadVertices = new Float32Array([
        -1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0]);


    var texCoords = new Float32Array([
        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,
    ]);

    vaoT = gl.createVertexArray();
    gl.bindVertexArray(vaoT);

    vbo_PositionT = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_PositionT);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_texcoordsT = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texcoordsT);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_TEXTURE);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);

}


function initCommonShader() {

    /////////////////////////////////////////////////////////////////////////////////////////// Common Color Shader////////////////////////////////////////////////////////////////////////////////////////
    var vertexShaderSourceCodeG =
        "#version 300 es" +
        "\n" +
        "in vec4 vPosition;" +
        "in vec4 vColor;" +
        "uniform mat4 u_model_matrix;" +
        "uniform mat4 u_view_matrix;" +
        "uniform mat4 u_projection_matrix;" +
        "out vec4 out_color;" +
        "void main(void)" +
        "{" +
        "    gl_Position = u_projection_matrix*u_view_matrix*u_model_matrix * vPosition;" +
        "    out_color = vColor;" +
        "    gl_PointSize = 2.0;" +
        "}";
    vertexShaderObjectG = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObjectG, vertexShaderSourceCodeG);
    gl.compileShader(vertexShaderObjectG);
    if (gl.getShaderParameter(vertexShaderObjectG, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(vertexShaderObjectG);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    //fragmanet Shader
    var fragmentShaderSourceCodeG =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +
        "in vec4 out_color;" +
        "out vec4 FragColor;" +
        "vec4 color;" +
        "uniform float WallMix;" +
        "uniform float WallFlag;" +

        "void main(void)" +
        "{" +
        "  color = out_color;" +
            "if(WallFlag == 0.0f)" +
            "{" +
            "   FragColor = vec4(color);" +
            "}" +

            "else if(WallFlag==1.0)" +
            "{" +
            "   FragColor = mix(vec4(color),vec4(0.0),WallMix);" +
            "}" +

        "}"

    fragmentShaderObjectG = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObjectG, fragmentShaderSourceCodeG);
    gl.compileShader(fragmentShaderObjectG);
    if (gl.getShaderParameter(fragmentShaderObjectG, gl.COMPILE_STATUS) == false);
    {
        var error = gl.getShaderInfoLog(fragmentShaderObjectG);
        if (error.length > 0) {
            alert(error);
            alert(error);
            uninitialize();
        }
    }

    //shader program 
    shaderProgramObjectG = gl.createProgram();
    gl.attachShader(shaderProgramObjectG, vertexShaderObjectG);
    gl.attachShader(shaderProgramObjectG, fragmentShaderObjectG);

    gl.bindAttribLocation(shaderProgramObjectG, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(shaderProgramObjectG, WebGLMacros.VDG_ATTRIBUTE_COLOR, "vColor");

    //linking
    gl.linkProgram(shaderProgramObjectG);
    if (!gl.getProgramParameter(shaderProgramObjectG, gl.LINK_STATUS)) {
        var error = gl.getProgramInfoLog(shaderProgramObjectG);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }

    modelMatrixUniformCommon = gl.getUniformLocation(shaderProgramObjectG, "u_model_matrix");
    viewMatrixUniformCommon = gl.getUniformLocation(shaderProgramObjectG, "u_view_matrix");
    projectionMatrixUniormCommon = gl.getUniformLocation(shaderProgramObjectG, "u_projection_matrix");
    WallMixUniform = gl.getUniformLocation(shaderProgramObjectG, "WallMix");
    WallFlagUniform = gl.getUniformLocation(shaderProgramObjectG, "WallFlag");

}


function initcircleShapes() {
    /////////////////////////Aditya Code /////////////////////////


    var rectangleVertices = new Float32Array([
        1.0, 1.0, 0.0,
        -1.0, 1.0, 0.0,
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0

    ]);
    var wallNormals = new Float32Array([
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0
    ]);


    //Radius();
    initCircle();

    //Circle
    vao_Circle = gl.createVertexArray();
    gl.bindVertexArray(vao_Circle);
    vbo_Position_Circle = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Position_Circle);
    gl.bufferData(gl.ARRAY_BUFFER, VerticesOfCircle, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);


    /// QUAD
    vao_rectangle = gl.createVertexArray();
    gl.bindVertexArray(vao_rectangle);
    vbo_rectangle = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_rectangle);
    gl.bufferData(gl.ARRAY_BUFFER, rectangleVertices, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0, 0, 1);
    vbo_brickNormals = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_brickNormals);
    gl.bufferData(gl.ARRAY_BUFFER, wallNormals, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_NORMAL,
        3,
        gl.FLOAT,
        false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_NORMAL);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);//done with vao

}

function initDynamicDraw() {

    /*Quad */
    /*Quad */
    vao_quad = gl.createVertexArray();
    gl.bindVertexArray(vao_quad);

    vbo_quad_position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_quad_color = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);

    /*Line */
    vao_line = gl.createVertexArray();
    gl.bindVertexArray(vao_line);

    vbo_line_color = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_line_color);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_line_position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_line_position);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);

    /*POINT */
    vao_point = gl.createVertexArray();
    gl.bindVertexArray(vao_point);

    vbo_point_color = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_point_color);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_COLOR, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_COLOR);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    vbo_point_position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_point_position);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);

}
function loadTexturesKundali(imageOnScreen) {


    cube_texture = gl.createTexture();
    cube_texture.image = new Image();
    cube_texture.image.src = imageOnScreen;
    cube_texture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, cube_texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cube_texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}

function loadTexturesUbuntu(ubuntuImage) {

    UbuntuTexture = gl.createTexture();
    UbuntuTexture.image = new Image();
    UbuntuTexture.image.src = ubuntuImage;
    UbuntuTexture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, UbuntuTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, UbuntuTexture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}




function loadTexturesWindowImage(imageWindow) {
    image_first = gl.createTexture();
    image_first.image = new Image();
    image_first.image.src = imageWindow;
    image_first.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, image_first);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image_first.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}

function loadTextures(imageOnScreenStart) {


    VS_Texture = gl.createTexture();
    VS_Texture.image = new Image();
    VS_Texture.image.src = imageOnScreenStart;
    VS_Texture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, VS_Texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, VS_Texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}



function loadTexturesCodeImage(imageCode) {


    code_image = gl.createTexture();
    code_image.image = new Image();
    code_image.image.src = imageCode;
    code_image.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, code_image);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, code_image.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}

function loadUbuntuDesktopImage(ubuntuDesktop) {


    ubuntuDesktopTexture = gl.createTexture();
    ubuntuDesktopTexture.image = new Image();
    ubuntuDesktopTexture.image.src = ubuntuDesktop;
    ubuntuDesktopTexture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, ubuntuDesktopTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, ubuntuDesktopTexture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}

function loadUbuntuTerminalImage(ubuntuTerminal) {


    ubuntuTerminalTexture = gl.createTexture();
    ubuntuTerminalTexture.image = new Image();
    ubuntuTerminalTexture.image.src = ubuntuTerminal;
    ubuntuTerminalTexture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, ubuntuTerminalTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, ubuntuTerminalTexture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}

function loadDoorNoteTexture() {


    doorNoteTexture = gl.createTexture();
    doorNoteTexture.image = new Image();
    doorNoteTexture.image.src = doorNote;
    doorNoteTexture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, doorNoteTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, doorNoteTexture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
}
function loadGroupNameTexture(groupName) {

    groupNameTexture = gl.createTexture();
    groupNameTexture.image = new Image();
    groupNameTexture.image.src = groupName;
    groupNameTexture.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, groupNameTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, groupNameTexture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

}
function loadTextureFromFile(img) {

    let tex;
    tex = gl.createTexture();
    tex.image = new Image();
    tex.image.src = img;
    tex.image.onload = function () {

        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.bindTexture(gl.TEXTURE_2D, null);

    }
    return tex;
}


function createFramebuffer() {
    FBO = gl.createFramebuffer();
    //bind framebuffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    //create texture for our color buffer
    Texture_FBO = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, Texture_FBO);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1404, 1080, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    //gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, 1024, 1024);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    //now attach color texture to the FBO
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, Texture_FBO, 0);


    fboRender = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, fboRender);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, 1404, 1080);

    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, fboRender);

    var attachments = [gl.COLOR_ATTACHMENT0];
    gl.drawBuffers(attachments);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

}

function initFBO() {
    ///////////////////////////////// Cube Block ///////////////////////////////////

    //*************VERTEX SHADER************//

    //VERTEX SHADER
    var vertexShaderSourceCode_FBO =
        "#version 300 es" +
        "\n" +
        "in vec4 vPosition;" +
        "in vec2 vTexture0_Coord;" +
        "out vec2 out_texture0_coord;" +
        "uniform mat4 u_model_matrix;" +
        "uniform mat4 u_view_matrix;" +
        "uniform mat4 u_projection_matrix;" +
        "void main(void)" +
        "{" +
        "gl_Position = u_projection_matrix*u_view_matrix*u_model_matrix * vPosition;" +
        "out_texture0_coord = vTexture0_Coord;" +
        "}";

    gVertexShaderObject_FBO = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(gVertexShaderObject_FBO, vertexShaderSourceCode_FBO);
    gl.compileShader(gVertexShaderObject_FBO);
    if (gl.getShaderParameter(gVertexShaderObject_FBO, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(gVertexShaderObject_FBO);
        if (error.length > 0) {
            alert(error);
            unitialize();
        }
    }

    //fragment shader
    var fragmentShaderSourceCode_FBO =
        "#version 300 es" +
        "\n" +
        "precision highp float;" +
        "in vec2 out_texture0_coord;" +
        "uniform highp sampler2D u_texture0_sampler;" +
        "out vec4 FragColor;" +
        "void main(void)" +
        "{" +
        "   FragColor =texture(u_texture0_sampler,out_texture0_coord);" +
        "}"

    gFragmentShaderObject_FBO = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(gFragmentShaderObject_FBO, fragmentShaderSourceCode_FBO);
    gl.compileShader(gFragmentShaderObject_FBO);
    if (gl.getShaderParameter(gFragmentShaderObject_FBO, gl.COMPILE_STATUS) == false) {
        var error = gl.getShaderInfoLog(gFragmentShaderObject_FBO);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }


    //shader program 
    gShaderProgramObject_FBO = gl.createProgram();
    gl.attachShader(gShaderProgramObject_FBO, gVertexShaderObject_FBO);
    gl.attachShader(gShaderProgramObject_FBO, gFragmentShaderObject_FBO);


    gl.bindAttribLocation(gShaderProgramObject_FBO, WebGLMacros.VDG_ATTRIBUTE_VERTEX, "vPosition");
    gl.bindAttribLocation(gShaderProgramObject_FBO, WebGLMacros.VDG_ATTRIBUTE_TEXTURE, "vTexture0_Coord");

    gl.linkProgram(gShaderProgramObject_FBO);
    if (!gl.getProgramParameter(gShaderProgramObject_FBO, gl.LINK_STATUS)) {
        var error = gl.getProgramInfoLog(gShaderProgramObject_FBO);
        if (error.length > 0) {
            alert(error);
            uninitialize();
        }
    }



    modelMatrixUniformFBO = gl.getUniformLocation(gShaderProgramObject_FBO, "u_model_matrix");
    viewMatrixUniformFBO = gl.getUniformLocation(gShaderProgramObject_FBO, "u_view_matrix");
    projectionMatrixUniormFBO = gl.getUniformLocation(gShaderProgramObject_FBO, "u_projection_matrix");
    SamplerUniform_FBO = gl.getUniformLocation(gShaderProgramObject_FBO, "u_texture0_sampler");

    var cubeVertices2 = new Float32Array([
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,

        //BOTTOM FACE
        1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,

        //FRONT FACE
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,

        //BACK FACE
        1.0, 1.0, -1.0,
        -1.0, 1.0, -1.0,
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,

        //RIGHT FACE
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,

        //LEFT FACE
        -1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0]);

    var cubeTexcoords2 = new Float32Array([
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ]);


    gVao_CubeTexture = gl.createVertexArray();
    gl.bindVertexArray(gVao_CubeTexture);

    gVBO_Position = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gVBO_Position);
    gl.bufferData(gl.ARRAY_BUFFER, cubeVertices2, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_VERTEX);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    gVBO_Texture = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gVBO_Texture);
    gl.bufferData(gl.ARRAY_BUFFER, cubeTexcoords2, gl.STATIC_DRAW);
    gl.vertexAttribPointer(WebGLMacros.VDG_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(WebGLMacros.VDG_ATTRIBUTE_TEXTURE);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);


    gl.bindVertexArray(null);
}


function resize() {

    if (bFullscreen == true) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    else {
        canvas.width = canvas_original_width;
        canvas.height = canvas_original_height;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);

    //setPerspectiveMatrix();
    mat4.perspective(perspectiveProjectionMatrix, 45.0, parseFloat(canvas.width) / parseFloat(canvas.height), 0.1, 100.0);

}

function degToRad(degrees) {

    return (degrees * Math.PI / 180.0);
}


function draw() {

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    viewMatrix = mat4.create();
    scaleMatrix = mat4.create();
    modelMatrix = mat4.create();

    updateCamera();

    //mat4.lookAt(viewMatrix, [-3.7, 0.0, 1.9], [-18.75, 0.0, 1.97], [0.0, 1.0, 0.0]);

    //////////////////// FBO  /////////////////////////////////////
    //////////////////// FBO 
    if (scene >= 0) {
        gl.useProgram(shaderProgramObjectKundaliCube);

        drawBlank();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);



        gl.useProgram(shaderProgramObjectG);
        drawCabinate();
        if (scene >= 0 && scene < 10) {
            OutsideYard();
           
            gl.useProgram(null);
        }
       


     }
    if (scene >= 30) {
      //  x.pause();
    }
    // ///////////////////////////////////////////////////Back Design Wall (Sucheta's)////////////////////////////////////
    gl.useProgram(shaderProgramObjectBackWall);


    DrawBackDesignWall();

    gl.useProgram(null);

    /////////////////////////////////////////// Back Wall With All Object's(Gayatri's) ////////////////////////////////////////////////////
    gl.useProgram(shaderProgramObjectG);

    DrawBookShelf();
    DrawGlass();

    DrawWindow();

    DrawFile();
    DrawBackWallSkirting();
    DrawBookPatternOne();
    DrawTable();
    DrawLeftWall();
    stand();

    gl.useProgram(null);

    // //  ////////////////////////////////////////////////Down Flooring (Sucheta's)//////////////////////////////////////////// 
    gl.useProgram(shaderProgramObjectFlooring);

    DrawDownFlooring();

    gl.useProgram(null);


    //  /////////////////////////////////////////// Left Wall (Aditya's) ////////////////////////////////////////////////////
    if (scene > 3) {
        bathRoomTiles();
    }
    gl.useProgram(shaderProgramObjectG);
    Wall();

    Calender();
    Door();
    clock();
    tubeLight();
    frontDoor();
    stand();

    /////////////////////////////////////////////////////////////////////// Rutwik's
    drawCharacter(charPos, charAngle, charCloths, charSitting, charTyping);
    gl.useProgram(woodShader);
    drawDesk();
    drawChair();

    gl.useProgram(null);

    /////////// Brick Shader ////////////
    gl.useProgram(shaderProgramObjectBrick);

    EntryWall();
    drawPyramid();
    gl.useProgram(null);

  // drawTextureOnMonitor(winBoot);
    // /////////////////////////////////////// Add keyboard
    if (scene >= 13) {
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw VS Texture 
    if (scene == 13) {
        gl.useProgram(shaderProgramObjectKundaliCube);
        drawTextureOnMonitor(winBoot);
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }
    // ////////////////////////////////////////////////////////////////////

    // //////////////////////////////////////////////////////////////////
    if (scene == 14) {
        gl.useProgram(shaderProgramObjectKundaliCube);
        drawTextureOnMonitor(winDesktop);
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }
    // ////////////////////////////////////////////////////////////////////

    // //////////////////////////////////////////////////////////////////
    if (scene == 15) {
        gl.useProgram(shaderProgramObjectKundaliCube);
        drawTextureOnMonitor(winEditor);
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);
    }
    // ////////////////////////////////////////////////////////////////////

    // //////////////////////////////////////////////////////////////////
    if (scene == 16) {
        gl.useProgram(shaderProgramObjectKundaliCube);
        drawTextureOnMonitor(winCode);
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }
    // ////////////////////////////////////////////////////////////////////

    // //////////////////////////////////////////////////////////////////
    if (scene == 17) {
        gl.useProgram(shaderProgramObjectKundaliCube);
        drawKundaliCube();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }
    // //////////////////////////////////////////////////////////////////// WIN END ///

    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw VS Texture 
    if (scene == 18) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        //    imageOnScreen = "Vijay_Kundali.png";

        // drawKundaliCube();
        //drawFirstTexture();
        drawBootTexture();
        //drawBlanck();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Code Image

    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw VS Texture 
    if (scene == 19) {

        gl.useProgram(shaderProgramObjectKundaliCube);

        drawWindowsWallpaperImage()
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Code Image
    if (scene == 20) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawFirstTexture();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);
    }

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Code Image
    if (scene == 21) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawCodeImage();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 22) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawKundaliCube();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 23) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawUbuntuWallpaperImage();

        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 24) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawUbuntuDesktopImage();

        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 25) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawUbuntuTerminalImage();

        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 26) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawTextureOnMonitor(ubuntuCodeTexture);

        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 27) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawKundaliCube();
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// Draw Kundali Cube
    if (scene == 28) {

        gl.useProgram(shaderProgramObjectKundaliCube);
        drawTextureOnMonitor(sanskritTex);
        gl.useProgram(null);

        gl.useProgram(gShaderProgramObject_FBO);
        drawFramebufferMemory();
        gl.useProgram(null);

        drawAll();
        gl.useProgram(shaderProgramObjectG);

        keyboard();
        gl.useProgram(null);

    }

    if (scene >= 29) {
        drawAstro();
        drawMedi();
        drawComp();
    }


    requestAnimationFrame(draw, canvas);
    update();
}

function drawAll() {

    ///////////////////////////////////////////////////Back Design Wall (Sucheta's)////////////////////////////////////
    gl.useProgram(shaderProgramObjectBackWall);


    DrawBackDesignWall();

    gl.useProgram(null);

    /////////////////////////////////////////// Back Wall With All Object's(Gayatri's) ////////////////////////////////////////////////////
    gl.useProgram(shaderProgramObjectG);

    DrawBookShelf();
    DrawGlass();

    DrawWindow();

    DrawFile();
    DrawBackWallSkirting();
    DrawBookPatternOne();
    DrawTable();
    DrawLeftWall();
    stand();
    gl.useProgram(null);

    //  ////////////////////////////////////////////////Down Flooring (Sucheta's)//////////////////////////////////////////// 
    gl.useProgram(shaderProgramObjectFlooring);

    DrawDownFlooring();

    gl.useProgram(null);


    //  /////////////////////////////////////////// RIGHT Wall (Aditya's) ////////////////////////////////////////////////////
    if (scene > 3) {
        bathRoomTiles();
    }
    gl.useProgram(shaderProgramObjectG);
    Wall();

    Calender();
    Door();
    clock();
    tubeLight();
    frontDoor();
    /////////////////////////////////////////////////////////////////////// Rutwik's ///////////////////////////////////////////////
    drawCharacter(charPos, charAngle, charCloths, charSitting, charTyping);
    gl.useProgram(woodShader);
    drawDesk();
    drawChair();

    gl.useProgram(null);

    
    /////////// Aditya's Brick Shader ////////////
    gl.useProgram(shaderProgramObjectBrick);

    EntryWall();
    drawPyramid();
    gl.useProgram(null);
   
 

}

function update() {

    if (!startAnimation) {
     
        gl.useProgram(textureShader);
        if (Mixvar >= 0.0) {
            Mixvar = Mixvar - 0.0097;
        }
        else{
            Mixvar = 0.0;
            FlagFade = 1.0;
            scene = 0;
        }
        drawGroupName();
        gl.useProgram(null);
        return;
    }

    angleX = angleX + 0.5;
    if (angleX >= 360.0)
        angleX = 0.0;

    angleY = angleY + 0.5;
    if (angleY >= 360.0)
        angleY = 0.0;


    angleZ = angleZ + 0.5;
    if (angleZ >= 360.0)
        angleZ = 0.0;

    animateYAstro = animateYAstro + (dirLettersA * 0.005);
    if (animateYAstro >= 0.9) { dirLettersA = -dirLettersA }
    else if (animateYAstro <= 0.1) { dirLettersA = -dirLettersA }

    animateYMedi = animateYMedi + (dirLettersM * 0.0045);
    if (animateYMedi >= 0.9) { dirLettersM = -dirLettersM }
    else if (animateYMedi <= 0.1) { dirLettersM = -dirLettersM }

    animateYComp = animateYComp + (dirLettersC * 0.0055);
    if (animateYComp >= 0.9) { dirLettersC = -dirLettersC }
    else if (animateYComp <= 0.1) { dirLettersC = -dirLettersC }

    switch (scene) {
        case 0:
            // move camera forward (z+)
            if (camera.pos[dirZ] > 14.0) { moveCamera(dirZ, -0.025); charPos[dirZ] -= 0.025; }
            else { scene++; }
            break;

        case 1:
            // front door open
            charAnimate = false;
            if (gAngleFrontDoor < 90.0) { gAngleFrontDoor += 1; }
            else { scene++; }
            break;

        case 2:
            charAnimate = true;
            // move camera forward (z+)
            if (camera.pos[dirZ] > 6.0) {
                moveCamera(dirZ, -0.025);
                charPos[dirZ] -= 0.025;
            }
            else { scene++; }
            break;

        case 3:
            // rotate camera to right
            if (cameraAngle < 90.0) {
                if (camera.pos[dirZ] > 2.0) {
                    moveCamera(dirZ, -0.025);
                }
                updateCameraAngle(degToRad(cameraAngle)); cameraAngle += 0.5;
                if (charAngle > 90.0) { charAngle -= 5.0; }
                else { charPos[dirX] += 0.025; }
            }
            else { scene++; }
            break;

        case 4:
            // move camera forward (x+)
            if (charPos[dirX] < 7.0) {
                moveCamera(dirX, 0.010);
                charPos[dirX] += 0.025;
            }
            else { scene++; }
            break;

        case 5:
            // open bathroom door
            charAnimate = false;
            if (gAngleBathDoor > -90.0) { gAngleBathDoor -= 1; gAngleFrontDoor -= 1; }
            else { scene++; }
            break;

        case 6:
            // character goes inside the bath
            charAnimate = true;
            if (camera.pos[dirX] < 3.0) { moveCamera(dirX, 0.030); }

            if (charPos[dirX] < 10.0) { charPos[dirX] += 0.025; }
            else if (charAngle < 180) { charAngle += 5.0; }
            else if (gAngleBathDoor < 0.0) {
                gAngleBathDoor += 1;
                if (charPos[dirZ] > -2.0) { charPos[dirZ] -= 0.035; }
            }
            else { scene++; charCloths = false; }
            break;

        case 7:
            // bath door opens and character appears
            if (ClockAngle > -60.0) { ClockAngle -= (60.0 / 500.0) }
            if (delay < 500) { delay++; }
            else if (gAngleBathDoor > -90.0) {
                charAngle = 360.0;
                gAngleBathDoor -= 1;
                if (charPos[dirZ] < 0.97) { charPos[dirZ] += 0.035; }
            }
            else { scene++; delay = 0; }
            break;

        case 8:
            // character walks out and bath door closes
            if (camera.pos[dirX] > 0.65) { moveCamera(dirX, -0.030); }
            if (charAngle > 270.0) { charAngle -= 5.0; }
            else if (charPos[dirX] > 4.8) {
                charPos[dirX] -= 0.035;
                if (gAngleBathDoor < 0.0) { gAngleBathDoor += 1.0; }
            }
            else { scene++; }
            break;

        case 9:
            // rotate camera to right
            charAnimate = false;
            if (charAngle > 180.0) { charAngle -= 5.0; }
            if (cameraAngle > -30.0) {
                if (camera.pos[dirZ] < 2.0) {
                    moveCamera(dirX, +0.025);
                }
                updateCameraAngle(degToRad(cameraAngle));
                cameraAngle -= 0.5;
            }
            else {
                scene++;
                charAnimate = true;
            }
            break;

        case 10:
            // move character forward
            if (charPos[dirZ] > -2.1) { charPos[dirZ] -= 0.025; }
            else if (charPos[dirX] > 3.0) { charPos[dirX] -= 0.025; }
            else { scene++; }
            break;

        case 11:
            // jump
            if (charPos[dirY] < 0.3) { charPos[dirY] += 0.1; charAnimate = false; }
            if (charPos[dirZ] < -1.0) { charPos[dirZ] += 0.035; }
            else { scene++; }
            break;

        case 12:
            // sits on chair and starts typing
            if (charPos[dirY] > 0.0) { charPos[dirY] -= 0.1; }
            else {
                scene++;
                charSitting = true;
                charTyping = true;
                charAnimate = true;
            }
            break;

        case 13:
            //Gayatri Color code
            if (r >= 0.0 || g >= 0.0 || b >= 0.0 || r1 >= 0.0 || g1 >= 0.0 || b1 >= 0.0) {
                r = r - 0.002;
                g = g - 0.002;
                b = b - 0.007;
                r1 = r1 - 0.017;
                g1 = g1 - 0.017;
                b1 = b1 - 0.017;
                //alpha = alpha - 0.05;
            }
            else { scene++; }
            break;

        case 14:
            amitaDraw();
            if (delay < 200) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 15:
            amitaDraw();
            if (delay < 200) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 16:
            amitaDraw();
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 17:
            amitaDraw();
            charTyping = false;
            charAnimate = false;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 18:
            amitaDraw();
            charTyping = true;
            charAnimate = true;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 19:
            amitaDraw();
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 20:
            amitaDraw();
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 21:
            amitaDraw();
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 22:
            amitaDraw();
            charTyping = false;
            charAnimate = false;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 23:
            amitaDraw();
            charTyping = true;
            charAnimate = true;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 24:
            amitaDraw();
            charTyping = true;
            charAnimate = true;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 25:
            amitaDraw();
            charTyping = true;
            charAnimate = true;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 26:
            amitaDraw();
            charTyping = true;
            charAnimate = true;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }

            break;

        case 27:
            amitaDraw();
            charTyping = false;
            charAnimate = false;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 28:
            amitaDraw();
            charTyping = false;
            charAnimate = false;
            if (delay < 300) { delay++; }
            else { scene++; delay = 0; }
            break;

        case 29:
            // camera walks towards the wall
            if (cameraAngle > -90) {
                cameraAngle -= 0.5;
                updateCameraAngle(degToRad(cameraAngle));
            }
            if (camera.pos[dirX] > -3.75) { moveCamera(dirX, -0.075); }
            else {
                scene++;
            }
            break;

        case 30:
            // astro medi comp letters animation
            if (animateZAstro > 4.0) { animateZAstro -= 0.15; }
            if (animateZMedi > 1.0) { animateZMedi -= 0.15; }
            if (animateZComp > -1.7) { animateZComp -= 0.15; }
            if (Mixvar <= 4.0) {
                Mixvar = Mixvar + 0.00098;
            }
            if (WallMix <= 4.0) {
                WallMix = WallMix + 0.003;
            }
            else{
                audioElement.pause();
            }
            break;

        default:
            break;
    }

    updateCharacter(charAnimate);

}
function OutsideYard() {
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [1.9, -2.55, 17.1]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(90.0));
    mat4.scale(modelMatrix, modelMatrix, [6.6, 8.8, 9.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.00, 0.5, 0.00);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    HeroPath();
}
function HeroPath() {
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [-6.5, -2.55, 17.1]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(90.0));
    mat4.scale(modelMatrix, modelMatrix, [1.8, 8.8, 9.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.48, 0.47, 0.45);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    LeftYard();
}
function LeftYard() {
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [-20.0, -3.1, 17.1]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(90.0));
    mat4.scale(modelMatrix, modelMatrix, [11.6, 68.8, 9.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.00, 0.5, 0.00);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    // RightYard(); 
}
function RightYard() {

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [25.9, -2.6, 17.1]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(90.0));
    mat4.scale(modelMatrix, modelMatrix, [11.6, 68.8, 9.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.00, 0.6, 0.00);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}

function DrawBackDesignWall() {
    ///*BACK DESIGN WALL WITH PATTERN*//

    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [0.0, 2.8, -6.8]);
    mat4.scale(modelMatrix, modelMatrix, [8.5, 5.8, 1.0]);
    //mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);

    gl.uniformMatrix4fv(modelMatrixUniform, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao);

    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

    gl.bindVertexArray(null);
}

function DrawLeftWall() {

    modelMatrix = mat4.identity(modelMatrix);

    //gl.polygonOffset(0.0, 0.0);
    mat4.translate(modelMatrix, modelMatrix, [-8.45, 3.1, 1.0]);

    mat4.rotateY(modelMatrix, modelMatrix, degToRad(90.0));
    mat4.scale(modelMatrix, modelMatrix, [7.0, 5.8, 7.0]);

    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);

    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.93, 0.89, 0.69);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

}

function DrawDownFlooring() {

    ///*DOWN DESIGN FLOOR WITH PATTERN*//

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [0.0, -3.5, 1.1]);

    mat4.scale(modelMatrix, modelMatrix, [8.5, 0.8, 7.0]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(-90.0));


    // mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    //mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelMatrix);
    gl.uniformMatrix4fv(modelMatrixUniformFloor, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformFloor, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormFloor, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vaoT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

}

function DrawBookShelf() {


    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [-0.5, 0.0, -5.65]);


    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);


    drawQuadZ = -5.65;
    /*Wooden quad Background*/
    /*back Face*/
    var quadVertices = new Float32Array([-2.8, -2.7, 0.05,
    -2.8, 0.0, 0.05,
    -1.0, 0.0, 0.05,
    -1.0, -2.7, 0.05]);

    var quadColor = new Float32Array([0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Left face*/
    var quadVertices = new Float32Array([-2.8, -2.7, 0.05,
    -2.8, 0.0, 0.05,
    -2.8, 0.0, 0.5,
    -2.8, -2.7, 0.5]);

    var quadColor = new Float32Array([0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Right face*/
    var quadVertices = new Float32Array([-1.0, -2.7, 0.05,
    -1.0, 0.0, 0.05,
    -1.0, 0.0, 0.5,
    -1.0, -2.7, 0.5]);

    var quadColor = new Float32Array([0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Front face*/
    var quadVertices = new Float32Array([-2.8, -2.7, 0.5,
    -2.8, 0.0, 0.5,
    -1.0, 0.0, 0.5,
    -1.0, -2.7, 0.5]);

    var quadColor = new Float32Array([0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Top face*/
    var quadVertices = new Float32Array([-2.8, 0.0, 0.05,
    -2.8, 0.0, 0.5,
    -1.0, 0.0, 0.5,
    -1.0, 0.0, 0.05]);

    var quadColor = new Float32Array([0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Bottom Drawer Quad */
    quadVertices = new Float32Array([-2.8, -2.7, 0.5,
    -2.8, -1.8, 0.5,
    -1.0, -1.8, 0.5,
    -1.0, -2.7, 0.5]);

    quadColor = new Float32Array([0.25, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0,
        0.25, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*First Horizontal Wooden quad */
    quadVertices = new Float32Array([-2.8, -1.1, 0.5,
    -2.8, -1.15, 0.5,
    -1.0, -1.15, 0.5,
    -1.0, -1.1, 0.5]);

    quadColor = new Float32Array([0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Second Horizontal Wooden quad */
    quadVertices = new Float32Array([-2.8, -0.5, 0.5,
    -2.8, -0.55, 0.5,
    -1.0, -0.55, 0.5,
    -1.0, -0.5, 0.5]);

    quadColor = new Float32Array([0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0,
        0.5, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}

function DrawBackWall() {
    var color = new Float32Array(16);
    /*Plain wall*/
    /*Faint Yellow*/
    color[0] = 0.93;
    color[1] = 0.89;
    color[2] = 0.69;
    color[3] = 1.0;
    color[4] = 0.93;
    color[5] = 0.89;
    color[6] = 0.69;
    color[7] = 1.0;
    color[8] = 0.93;
    color[9] = 0.89;
    color[10] = 0.69;
    color[11] = 1.0;
    color[12] = 0.93;
    color[13] = 0.89;
    color[14] = 0.69;
    color[15] = 1.0;
    var quad_width = 10.0;
    var quad_height = 6.0;
    var left_bottom_x = -5.0;
    var left_bottom_y = -3.0;
    var left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*Lower Dark Shade*/
    color[0] = 0.69;
    color[1] = 0.68;
    color[2] = 0.13;
    color[3] = 1.0;
    color[4] = 0.69;
    color[5] = 0.68;
    color[6] = 0.13;
    color[7] = 1.0;
    color[8] = 0.69;
    color[9] = 0.68;
    color[10] = 0.13;
    color[11] = 1.0;
    color[12] = 0.69;
    color[13] = 0.68;
    color[14] = 0.13;
    color[15] = 1.0;

    quad_width = 10.0;
    quad_height = 0.3;
    left_bottom_x = -5.0;
    left_bottom_y = -3.0;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*Upper Dark Shade*/
    quad_width = 10.0;
    quad_height = 0.1;
    left_bottom_x = -5.0;
    left_bottom_y = 2.9;
    left_bottom_z = 0.0;
    color[0] = 0.88;
    color[1] = 0.87;
    color[2] = 0.42;
    color[3] = 1.0;
    color[4] = 0.39;
    color[5] = 0.38;
    color[6] = 0.07;
    color[7] = 1.0;
    color[8] = 0.39;
    color[9] = 0.38;
    color[10] = 0.07;
    color[11] = 1.0;
    color[12] = 0.88;
    color[13] = 0.87;
    color[14] = 0.42;
    color[15] = 1.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
}


function DrawBookPatternOne() {
    var color = new Float32Array(16);
    color[0] = 1.0;
    color[1] = 1.0;
    color[2] = 0.0;
    color[3] = 1.0;
    color[4] = 1.0;
    color[5] = 1.0;
    color[6] = 0.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 1.0;
    color[13] = 1.0;
    color[14] = 0.0;
    color[15] = 1.0;

    var quad_width = 0.2;
    var quad_height = 0.6;
    var left_bottom_x = -1.78;
    var left_bottom_y = -1.8;
    var left_bottom_z = 0.0;

    /*Yellow Book*/
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    var linColor = new Float32Array(8);
    linColor[0] = 0.0;
    linColor[1] = 0.0;
    linColor[2] = 0.0;
    linColor[3] = 1.0;
    linColor[4] = 0.0;
    linColor[5] = 0.0;
    linColor[6] = 0.0;
    linColor[7] = 1.0;

    var beginning_point_x = -1.18;
    var beginning_point_y = -1.3;
    var book_width = 0.2;
    DrawLine(beginning_point_x, beginning_point_y, book_width, linColor);

    linColor[0] = 0.0;
    linColor[1] = 0.0;
    linColor[2] = 0.0;
    linColor[3] = 1.0;
    linColor[4] = 0.0;
    linColor[5] = 0.0;
    linColor[6] = 0.0;
    linColor[7] = 1.0;

    beginning_point_x = -1.18;
    beginning_point_y = -1.35;
    book_width = 0.2;
    DrawLine(beginning_point_x, beginning_point_y, book_width, linColor);

    color[0] = 1.0;
    color[1] = 0.0;
    color[2] = 0.0;
    color[3] = 1.0;
    color[4] = 1.0;
    color[5] = 0.0;
    color[6] = 0.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 1.0;
    color[13] = 0.0;
    color[14] = 0.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.6;
    left_bottom_x = -1.98;
    left_bottom_y = -1.8;
    left_bottom_z = 0.0;

    /*Red Book*/
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    var linColor = new Float32Array(8);
    linColor[0] = 0.0;
    linColor[1] = 0.0;
    linColor[2] = 0.0;
    linColor[3] = 1.0;
    linColor[4] = 0.0;
    linColor[5] = 0.0;
    linColor[6] = 0.0;
    linColor[7] = 1.0;

    beginning_point_x = -1.59;
    beginning_point_y = -1.3;
    book_width = 0.2;
    DrawLine(beginning_point_x, beginning_point_y, book_width, linColor);

    linColor[0] = 0.0;
    linColor[1] = 0.0;
    linColor[2] = 0.0;
    linColor[3] = 1.0;
    linColor[4] = 0.0;
    linColor[5] = 0.0;
    linColor[6] = 0.0;
    linColor[7] = 1.0;

    beginning_point_x = -1.39;
    beginning_point_y = -1.35;
    book_width = 0.2;
    DrawLine(beginning_point_x, beginning_point_y, book_width, linColor);

    color[0] = 0.0;
    color[1] = 0.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 0.0;
    color[5] = 0.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 0.0;
    color[13] = 0.0;
    color[14] = 1.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.6;
    left_bottom_x = -2.19;
    left_bottom_y = -1.8;
    left_bottom_z = 0.0;

    ///*Blue Book*/
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    var linColor = new Float32Array(8);
    linColor[0] = 0.0;
    linColor[1] = 0.0;
    linColor[2] = 0.0;
    linColor[3] = 1.0;
    linColor[4] = 0.0;
    linColor[5] = 0.0;
    linColor[6] = 0.0;
    linColor[7] = 1.0;

    beginning_point_x = -1.6;
    beginning_point_y = -1.3;
    book_width = 0.2;
    DrawLine(beginning_point_x, beginning_point_y, book_width, linColor);

    linColor[0] = 0.0;
    linColor[1] = 0.0;
    linColor[2] = 0.0;
    linColor[3] = 1.0;
    linColor[4] = 0.0;
    linColor[5] = 0.0;
    linColor[6] = 0.0;
    linColor[7] = 1.0;

    beginning_point_x = -1.6;
    beginning_point_y = -1.35;
    book_width = 0.2;
    DrawLine(beginning_point_x, beginning_point_y, book_width, linColor);

    color[0] = 0.5;
    color[1] = 0.5;
    color[2] = 0.0;
    color[3] = 1.0;
    color[4] = 0.5;
    color[5] = 0.5;
    color[6] = 0.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 0.5;
    color[13] = 0.5;
    color[14] = 0.0;
    color[15] = 1.0;

    ///*Horizontal Books first*/
    color[0] = 0.0;
    color[1] = 1.0;
    color[2] = 0.0;
    color[3] = 1.0;
    color[4] = 0.0;
    color[5] = 1.0;
    color[6] = 0.0;
    color[7] = 1.0;

    color[8] = 0.0;
    color[9] = 1.0;
    color[10] = 0.0;
    color[11] = 1.0;
    color[12] = 0.0;
    color[13] = 0.0;
    color[14] = 0.0;
    color[15] = 1.0;

    quad_width = 0.7;
    quad_height = 0.1;
    left_bottom_x = -3.3;
    left_bottom_y = -1.8;
    left_bottom_z = 0.0;

    ///*Green Book*/
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 0.25;
    color[1] = 0.5;
    color[2] = 0.5;
    color[3] = 1.0;
    color[4] = 0.25;
    color[5] = 0.5;
    color[6] = 0.5;
    color[7] = 1.0;

    color[8] = 0.25;
    color[9] = 0.5;
    color[10] = 0.5;
    color[11] = 1.0;
    color[12] = 0.0;
    color[13] = 0.0;
    color[14] = 0.0;
    color[15] = 1.0;

    quad_width = 0.7;
    quad_height = 0.1;
    left_bottom_x = -3.3;
    left_bottom_y = -1.7;
    left_bottom_z = 0.0;

    ///*Blue Book*/
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
}

function DrawBackWallSkirting() {
    var color = new Float32Array(16);




    /*Upper Dark Shade*/
    quad_width = 17.0;
    quad_height = 0.3;
    left_bottom_x = -8.5;
    left_bottom_y = 8.5;
    left_bottom_z = 0.0;
    color[0] = 0.88;
    color[1] = 0.87;
    color[2] = 0.42;
    color[3] = 1.0;
    color[4] = 0.39;
    color[5] = 0.38;
    color[6] = 0.07;
    color[7] = 1.0;
    color[8] = 0.39;
    color[9] = 0.38;
    color[10] = 0.07;
    color[11] = 1.0;
    color[12] = 0.88;
    color[13] = 0.87;
    color[14] = 0.42;
    color[15] = 1.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

}

function DrawGlass() {

    ////////////// GAYATRI'S DYNAMIC GLASS /////////////////////////

    drawQuadZ = -5.75;
    let color = new Float32Array(16);
    color[0] = r;
    color[1] = g;
    color[2] = b;
    color[3] = alpha;
    color[4] = r;
    color[5] = g;
    color[6] = b;
    color[7] = alpha;

    color[8] = r1;
    color[9] = g1;
    color[10] = b1;
    color[11] = alpha;
    color[12] = r;
    color[13] = g;
    color[14] = b;
    color[15] = alpha;

    var quad_width = 6.0;
    var quad_height = 3.4;
    var left_bottom_x = 1.5;
    var left_bottom_y = 0.5;
    var left_bottom_z = 0.3;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
}

function DrawWindow() {
    let color = new Float32Array(16);

    /*Outer Green */
    color[0] = 0.51;
    color[1] = 0.81;
    color[2] = 0.41;
    color[3] = 1.0;
    color[4] = 0.51;
    color[5] = 0.81;
    color[6] = 0.41;
    color[7] = 1.0;

    color[8] = 0.51;
    color[9] = 0.81;
    color[10] = 0.41;
    color[11] = 1.0;
    color[12] = 0.51;
    color[13] = 0.81;
    color[14] = 0.41;
    color[15] = 1.0;
    drawQuadZ = -5.74;
    /*OUTER GREEN - LEFT*/
    quad_width = 0.1;
    quad_height = 3.5;
    left_bottom_x = 1.4;
    left_bottom_y = 0.5;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*TOP*/
    quad_width = 6.2;
    quad_height = 0.1;
    left_bottom_x = 1.4;
    left_bottom_y = 3.9;
    left_bottom_z = 0.5;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*RIGHT*/
    quad_width = 0.1;
    quad_height = 3.5;
    left_bottom_x = 7.5;
    left_bottom_y = 0.5;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*Bottom*/
    quad_width = 6.2;
    quad_height = 0.1;
    left_bottom_x = 1.4;
    left_bottom_y = 0.4;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*Olive Green for shadow */
    /*inner shadow - LEFT*/
    color[0] = 0.23;
    color[1] = 0.39;
    color[2] = 0.12;
    color[3] = 1.0;
    color[4] = 0.23;
    color[5] = 0.39;
    color[6] = 0.12;
    color[7] = 1.0;

    color[8] = 0.66;
    color[9] = 0.85;
    color[10] = 0.52;
    color[11] = 1.0;
    color[12] = 0.66;
    color[13] = 0.85;
    color[14] = 0.52;
    color[15] = 1.0;

    quad_width = 0.05;
    quad_height = 3.4;
    left_bottom_x = 1.5;
    left_bottom_y = 0.5;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*inner shadow - TOP*/
    color[0] = 0.66;
    color[1] = 0.85;
    color[2] = 0.52;
    color[3] = 1.0;
    color[4] = 0.23;
    color[5] = 0.39;
    color[6] = 0.12;
    color[7] = 1.0;

    color[8] = 0.23;
    color[9] = 0.39;
    color[10] = 0.12;
    color[11] = 1.0;
    color[12] = 0.66;
    color[13] = 0.85;
    color[14] = 0.52;
    color[15] = 1.0;

    quad_width = 6.0;
    quad_height = 0.05;
    left_bottom_x = 1.5;
    left_bottom_y = 3.85;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*inner shadow - RIGHT*/
    color[0] = 0.66;
    color[1] = 0.85;
    color[2] = 0.52;
    color[3] = 1.0;
    color[4] = 0.66;
    color[5] = 0.85;
    color[6] = 0.52;
    color[7] = 1.0;

    color[8] = 0.23;
    color[9] = 0.39;
    color[10] = 0.12;
    color[11] = 1.0;
    color[12] = 0.23;
    color[13] = 0.39;
    color[14] = 0.12;
    color[15] = 1.0;

    quad_width = 0.05;
    quad_height = 3.4;
    left_bottom_x = 7.45;
    left_bottom_y = 0.5;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*inner shadow - BOTTOM*/
    color[0] = 0.23;
    color[1] = 0.39;
    color[2] = 0.12;
    color[3] = 1.0;
    color[4] = 0.66;
    color[5] = 0.85;
    color[6] = 0.52;
    color[7] = 1.0;

    color[8] = 0.66;
    color[9] = 0.85;
    color[10] = 0.52;
    color[11] = 1.0;
    color[12] = 0.23;
    color[13] = 0.39;
    color[14] = 0.12;
    color[15] = 1.0;

    quad_width = 6.0;
    quad_height = 0.05;
    left_bottom_x = 1.5;
    left_bottom_y = 0.5;
    left_bottom_z = 0.3;
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    DrawPlant();
}


function DrawFile() {
    drawQuadZ = -5.145;
    var color = new Float32Array(16);
    drawCircleZ = -5.59;
    color[0] = 0.0;
    color[1] = 1.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 0.0;
    color[5] = 1.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 0.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 0.0;
    color[13] = 1.0;
    color[14] = 1.0;
    color[15] = 1.0;

    var quad_width = 0.2;
    var quad_height = 0.52;
    var left_bottom_x = -1.78;
    var left_bottom_y = -1.1;
    var left_bottom_z = 0.0;

    /*First File*/
    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 1.0;
    color[1] = 1.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 1.0;
    color[5] = 1.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 1.0;
    color[13] = 1.0;
    color[14] = 1.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.07;
    left_bottom_x = -1.78;
    left_bottom_y = -0.65;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
    // DrawCircle(-1.09, -0.95, 0.08);

    /*Second File*/
    color[0] = 0.5;
    color[1] = 0.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 0.5;
    color[5] = 0.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 0.5;
    color[9] = 0.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 0.5;
    color[13] = 0.0;
    color[14] = 1.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.52;
    left_bottom_x = -1.99;
    left_bottom_y = -1.1;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 1.0;
    color[1] = 1.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 1.0;
    color[5] = 1.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 1.0;
    color[13] = 1.0;
    color[14] = 1.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.07;
    left_bottom_x = -1.99;
    left_bottom_y = -0.65;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
    //DrawCircle(-1.3, -0.95, 0.08);

    /*Third File*/
    color[0] = 0.5;
    color[1] = 0.5;
    color[2] = 0.5;
    color[3] = 1.0;
    color[4] = 0.5;
    color[5] = 0.5;
    color[6] = 0.5;
    color[7] = 1.0;

    color[8] = 0.5;
    color[9] = 0.5;
    color[10] = 0.5;
    color[11] = 1.0;
    color[12] = 0.5;
    color[13] = 0.5;
    color[14] = 0.5;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.52;
    left_bottom_x = -2.20;
    left_bottom_y = -1.1;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 1.0;
    color[1] = 1.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 1.0;
    color[5] = 1.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 1.0;
    color[13] = 1.0;
    color[14] = 1.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.07;
    left_bottom_x = -2.20;
    left_bottom_y = -0.65;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
    //DrawCircle(-1.5, -0.95, 0.08);

    /*Fourth File*/
    color[0] = 0.5;
    color[1] = 1.0;
    color[2] = 0.5;
    color[3] = 1.0;
    color[4] = 0.5;
    color[5] = 1.0;
    color[6] = 0.5;
    color[7] = 1.0;

    color[8] = 0.5;
    color[9] = 1.0;
    color[10] = 0.5;
    color[11] = 1.0;
    color[12] = 0.5;
    color[13] = 1.0;
    color[14] = 0.5;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.52;
    left_bottom_x = -2.41;
    left_bottom_y = -1.1;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 1.0;
    color[1] = 1.0;
    color[2] = 1.0;
    color[3] = 1.0;
    color[4] = 1.0;
    color[5] = 1.0;
    color[6] = 1.0;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 1.0;
    color[10] = 1.0;
    color[11] = 1.0;
    color[12] = 1.0;
    color[13] = 1.0;
    color[14] = 1.0;
    color[15] = 1.0;

    quad_width = 0.2;
    quad_height = 0.07;
    left_bottom_x = -2.41;
    left_bottom_y = -0.65;
    left_bottom_z = 0.0;

    DrawQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);
    // DrawCircle(-1.72, -0.95, 0.08);
}


function DrawPlant() {

    var modelViewProjection = mat4.create();
    var translationMatrix = mat4.create();
    var rotationalMatrix = mat4.create();
    var scaleMatrix = mat4.create();

    modelMatrix = mat4.identity(modelMatrix);
    //modelViewMatrix = setCamera(modelViewMatrix);
    mat4.translate(translationMatrix, translationMatrix, [3.9, 0.0, -5.6]);
    mat4.multiply(modelMatrix, modelMatrix, translationMatrix);


    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    var quadVertices = new Float32Array([3.0, 0.5, 0.0,
        2.8, 1.0, 0.0,
        3.4, 1.0, 0.0,
        3.2, 0.5, 0.0]);

    var quadColor = new Float32Array([0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 0.0, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}


function DrawTable() {
    modelMatrix = mat4.identity(modelMatrix);

    //gl.polygonOffset(0.0, 0.0);
    mat4.translate(modelMatrix, modelMatrix, [-0.5, -1.65, -5.6]);

    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(90.0));
    //mat4.scale(modelMatrix, modelMatrix, [7.0, 3.1, 7.0]);

    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);


    drawQuadZ = -5.78;
    /*Back face*/
    var quadVertices = new Float32Array([-0.8, -0.9, 0.05,
    -0.8, 0.3, 0.05,
        0.8, 0.3, 0.05,
        0.8, -0.9, 0.05]);

    var quadColor = new Float32Array([0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Left face*/
    var quadVertices = new Float32Array([-0.8, -0.9, 0.05,
    -0.8, 0.3, 0.05,
    -0.8, 0.3, 0.5,
    -0.8, -0.9, 0.5]);

    var quadColor = new Float32Array([0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Right face*/
    var quadVertices = new Float32Array([0.8, -0.9, 0.05,
        0.8, 0.3, 0.05,
        0.8, 0.3, 0.5,
        0.8, -0.9, 0.5]);

    var quadColor = new Float32Array([0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    /*Front face*/
    var quadVertices = new Float32Array([-0.8, -0.9, 0.5,
    -0.8, 0.3, 0.5,
        0.8, 0.3, 0.5,
        0.8, -0.9, 0.5]);

    var quadColor = new Float32Array([0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0,
        0.25, 0.0, 0.25, 1.0]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    /*Grey Boxes */
    quadVertices = new Float32Array([-0.7, -0.7, 0.55,
    -0.7, -0.3, 0.55,
        0.7, -0.3, 0.55,
        0.7, -0.7, 0.55]);

    quadColor = new Float32Array([0.61, 0.61, 0.61, 1.0,
        0.61, 0.61, 0.61, 1.0,
        0.61, 0.61, 0.61, 1.0,
        0.61, 0.61, 0.61, 1.0,]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    quadVertices = new Float32Array([-0.7, -0.2, 0.55,
    -0.7, 0.2, 0.55,
        0.7, 0.2, 0.55,
        0.7, -0.2, 0.55]);

    gl.bindVertexArray(vao_quad);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    DrawCircle(0.05, 0.0, 0.3, 0.57);
    DrawCircle(0.05, 0.0, -0.2, 0.57);

}

function DrawQuad(x, y, z, width, height, color) {

    var quadVertices = new Float32Array([-0.5, -0.5, 0.0,
    -0.5, 0.5, 0.0,
        0.5, 0.5, 0.0,
        0.5, -0.5, 0.0]);

    var quadColor = new Float32Array(16);
    quadColor[0] = color[0];
    quadColor[1] = color[1];
    quadColor[2] = color[2];
    quadColor[3] = color[3];
    quadColor[4] = color[4];
    quadColor[5] = color[5];
    quadColor[6] = color[6];
    quadColor[7] = color[7];
    quadColor[8] = color[8];
    quadColor[9] = color[9];
    quadColor[10] = color[10];
    quadColor[11] = color[11];
    quadColor[12] = color[12];
    quadColor[13] = color[13];
    quadColor[14] = color[14];
    quadColor[15] = color[15];
    //modelViewMatrix = setCameraAndGetModelViewMatrix();
    var modelViewProjection = mat4.create();
    var translationMatrix = mat4.create();
    var rotationalMatrix = mat4.create();
    var scaleMatrix = mat4.create();
    //modelViewMatrix = setCamera(modelViewMatrix);
    modelMatrix = mat4.identity(modelMatrix);
    var tx = x + (width / 2.0);
    var ty = y + (height / 2.0);
    mat4.translate(translationMatrix, translationMatrix, [tx, ty, drawQuadZ]);
    mat4.multiply(modelMatrix, modelMatrix, translationMatrix);

    mat4.scale(scaleMatrix, scaleMatrix, [width, height, 1.0]);
    mat4.multiply(modelMatrix, modelMatrix, scaleMatrix);



    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);



    gl.bindVertexArray(vao_quad);

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}

function DrawQuadRight(x, y, z, width, height, color) {

    var quadVertices = new Float32Array([-0.5, -0.5, 0.0,
    -0.5, 0.5, 0.0,
        0.5, 0.5, 0.0,
        0.5, -0.5, 0.0]);

    var quadColor = new Float32Array(16);
    quadColor[0] = color[0];
    quadColor[1] = color[1];
    quadColor[2] = color[2];
    quadColor[3] = color[3];
    quadColor[4] = color[4];
    quadColor[5] = color[5];
    quadColor[6] = color[6];
    quadColor[7] = color[7];
    quadColor[8] = color[8];
    quadColor[9] = color[9];
    quadColor[10] = color[10];
    quadColor[11] = color[11];
    quadColor[12] = color[12];
    quadColor[13] = color[13];
    quadColor[14] = color[14];
    quadColor[15] = color[15];
    // modelViewMatrix = setCameraAndGetModelViewMatrix();
    //var modelViewProjection = mat4.create();
    //var translationMatrix = mat4.create();
    //var rotationalMatrix = mat4.create();
    //var scaleMatrix = mat4.create();
    //modelViewMatrix = setCamera(modelViewMatrix);
    modelMatrix = mat4.identity(modelMatrix);
    //viewMatrix = setCamera(viewMatrix);
    scaleMatrix = mat4.identity(scaleMatrix);
    var tx = x + (width / 2.0);
    var ty = y + (height / 2.0);



    mat4.translate(modelMatrix, modelMatrix, [tx, ty, -0.4]);
    //  mat4.multiply(modelMatrix, modelMatrix, translationMatrix);

    mat4.scale(scaleMatrix, scaleMatrix, [width, height, 1.0]);

    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-90.0));
    mat4.multiply(modelMatrix, modelMatrix, scaleMatrix);

    //mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);




    gl.bindVertexArray(vao_quad);

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}

function DrawLine(x, y, width, color) {
    // modelViewMatrix = setCameraAndGetModelViewMatrix();
    var modelViewProjection = mat4.create();
    var translationMatrix = mat4.create();
    var rotationalMatrix = mat4.create();
    var scaleMatrix = mat4.create();

    var lineVertices = new Float32Array(6);
    lineVertices[0] = -0.5;
    lineVertices[1] = 0.0;
    lineVertices[2] = 0.0;
    lineVertices[3] = 0.5;
    lineVertices[4] = 0.0;
    lineVertices[5] = 0.0;

    var linColor = new Float32Array(8);
    linColor[0] = color[0];
    linColor[1] = color[1];
    linColor[2] = color[2];
    linColor[3] = color[3];

    linColor[4] = color[4];
    linColor[5] = color[5];
    linColor[6] = color[6];
    linColor[7] = color[7];

    var tx = x + (width / 2.0);
    var ty = y;
    //modelViewMatrix = setCamera(modelViewMatrix);
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(translationMatrix, translationMatrix, [tx, ty, -5.56]);
    mat4.multiply(modelMatrix, modelMatrix, translationMatrix);

    mat4.scale(scaleMatrix, scaleMatrix, [width, 1.0, 1.0]);
    mat4.multiply(modelMatrix, modelMatrix, scaleMatrix);




    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_line);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_line_color);
    gl.bufferData(gl.ARRAY_BUFFER, linColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_line_position);
    gl.bufferData(gl.ARRAY_BUFFER, lineVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.LINES, 0, 2);
    gl.bindVertexArray(null);
}

function DrawCircle(radius, x, y, z) {
    //console.log("circle");
    var angle;
    var circle_vertices = new Float32Array(3);

    var circle_color = new Float32Array(4);
    circle_color[0] = 0.0;
    circle_color[1] = 0.0;
    circle_color[2] = 0.0;
    circle_color[3] = 1.0;

    gl.bindVertexArray(vao_point);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_point_color);
    gl.bufferData(gl.ARRAY_BUFFER, circle_color, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    for (angle = 0; angle <= 2 * Math.PI; angle += 0.005) {
        circle_vertices[0] = Math.cos(angle) * radius + x;
        circle_vertices[1] = -0.2 + Math.sin(angle) * radius + y;
        circle_vertices[2] = z;

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_point_position);
        gl.bufferData(gl.ARRAY_BUFFER, circle_vertices, gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.POINTS, 0, 1);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    gl.bindVertexArray(null);
}



function keyDown(event) {
    switch (event.keyCode) {
        case 27:
            uninitialize();
            window.close();
            break;

        case 70:
            toggleFullScreen();
            startAnimation = true;
            Mixvar = 0.0;
            FlagFade = 1.0;
            audioElement.play();
            //x.play();
           
            break;

        // case 75:
        //     ClockAngle = ClockAngle + 1;
        //     break;

        // case 82:
        //     ClockAngle = ClockAngle - 1;
        //     break;

        // case 84:

        //     break;

        // case 37: // Use left arrow to move the camera to the left. 
        //     cameraAngle -= 0.01;
        //     updateCameraAngle(cameraAngle);
        //     // camera.angle -= 0.0075;
        //     break;

        // case 38: // Use up arrow to move the camera forward. 
        //     // camMovZ = camMovZ - 0.2;
        //     moveCamera(2, -0.2);
        //     //camera.pos[2] -= 0.2;
        //     break;

        // case 39: // Use right arrow to move the camera to the right. 
        //     cameraAngle += 0.01;
        //     updateCameraAngle(cameraAngle);
        //     // camera.angle += 0.0075;
        //     break;

        // case 40: // Use down arrow to move the camera backward.  
        //     // camMovZ = camMovZ + 0.2;
        //     moveCamera(2, 0.2);
        //     // camera.pos[2] += 0.2;
        //     break;

        // case 87: // W
        //     charPos[2] += 0.5;
        //     break;

        // case 83: // S
        //     charPos[2] -= 0.5;
        //     break;

        // case 65: // A
        //     charPos[0] -= 0.5;
        //     break;

        // case 68: // D
        //     charPos[0] += 0.5;
        //     break;
    }
}


function mouseDown() {


    // alert("mouseDown");
}

/////////////////////////// A D I T Y A ////////////////////////////////////////////

function initCircle() {
    var n = 0;
    //int k = 0;
    for (var fAngle = 0.0; fAngle < (2.0 * Math.PI); fAngle = fAngle + 0.002) {
        VerticesOfCircle[(3 * n) + 0] = Math.cos(fAngle);
        VerticesOfCircle[(3 * n) + 1] = Math.sin(fAngle);
        VerticesOfCircle[(3 * n) + 2] = 0.0;
        n = n + 1;
    }
}



function calenderLines() {
    //MiddleLine

    //
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [8.35, 4.55, -2.95]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.005, 0.58, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [8.35, 4.35, -2.95]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.005, 0.58, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    //
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [8.35, 4.15, -2.95]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.005, 0.58, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [8.35, 3.95, -2.95]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.005, 0.58, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [8.35, 3.75, -2.95]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.005, 0.58, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


}

//var modelViewProjectionMatrix = mat4.create();
function bathRoomTiles() {

    //// Bathroom Tiles

    modelMatrix = mat4.identity(modelMatrix);

    //mat4.rotateY(modelViewMatrix, modelViewMatrix, degToRad(gAngleAngleAll));
    //  push(modelViewMatrix);

    mat4.translate(modelMatrix, modelMatrix, [12.4, 0.0, 2.9]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-90.0));
    mat4.scale(modelMatrix, modelMatrix, [4.0, 4.835, 0.0]);
    mat4.translate(modelMatrix, modelMatrix, [-1.0, 0.0, 0.0]);

    //mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, 0.0]);
    // mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelMatrix);
    gl.useProgram(textureShader);
    //gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.000, 1.000, 0.000);
    gl.uniformMatrix4fv(texModelMatrixUniform, false, modelMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, checkSmallTexture);

    //gl.uniform1i(texSamplerUniform, 0);
    gl.bindVertexArray(vaoT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    // bathroom floor
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [13.0, -3.5, 1.1]);

    mat4.scale(modelMatrix, modelMatrix, [4.5, 0.8, 3.0]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(-90.0));

    gl.uniformMatrix4fv(texModelMatrixUniform, false, modelMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, checkTexture);

    //gl.uniform1i(texSamplerUniform, 0);
    gl.bindVertexArray(vaoT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

}

function clock() {

    //Clock
    //modelMatrix = mat4.identity(modelMatrix);
    modelMatrix = mat4.identity(modelMatrix);

    //
    mat4.translate(modelMatrix, modelMatrix, [8.48, 4.2, 1.015]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.9, 0.9, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    //Inner Clock
    modelMatrix = mat4.identity(modelMatrix);
    //
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.45, 4.2, 1.015]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.75, 0.75, 0.0]);
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.9, 0.9, 0.9);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);


    //Time
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.2, 1.015]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);


    //12
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.85, 1.015]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    //1
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.75, 1.35]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    //  //2
    modelMatrix = mat4.identity(modelMatrix);
    //
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.51, 1.57]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);



    //3
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.22, 1.65]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);



    ////4
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 3.9, 1.6]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    ////5
    modelMatrix = mat4.identity(modelMatrix);
    //
    //   mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 3.65, 1.38]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);



    ////6
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 3.55, 1.015]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    ////7

    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 3.63, 0.65]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleTriangle));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    //  gl.lineWidth(15.0);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    ////8

    modelMatrix = mat4.identity(modelMatrix);
    //
    //mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 3.87, 0.43]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);

    ////9
    modelMatrix = mat4.identity(modelMatrix);
    //
    //mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.22, 0.35]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);


    ////10
    modelMatrix = mat4.identity(modelMatrix);
    //
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.56, 0.445]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);


    ////11
    modelMatrix = mat4.identity(modelMatrix);
    //
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.76, 0.685]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.048, 0.048, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_Circle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 3100 * 1);
    gl.bindVertexArray(null);




    //clock Minute Hand 
    modelMatrix = mat4.identity(modelMatrix);
    //
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.41, 4.22, 1.015]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(ClockAngle));
    mat4.scale(modelMatrix, modelMatrix, [0.02, 0.32, 0.0]);
    mat4.translate(modelMatrix, modelMatrix, [0.0, 0.88, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.3, 0.3, 0.3);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    //Clock hour Hand

    modelMatrix = mat4.identity(modelMatrix);
    //
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.translate(modelMatrix, modelMatrix, [8.41, 4.2, 0.85]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(-90.0));
    mat4.scale(modelMatrix, modelMatrix, [0.028, 0.25, 0.0]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.3, 0.3, 0.3);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

}

function tubeLight() {
    //TubeLight

    //TubeLight
    modelMatrix = mat4.identity(modelMatrix);
    // var modelViewProjectionMatrix = mat4.create(); modelViewProjectionMatrix = mat4.identity(modelViewProjectionMatrix);

    mat4.translate(modelMatrix, modelMatrix, [8.48, 5.81, 1.0]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [1.4, 0.15, 0.0]);
    //

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.6, 0.6, 0.6);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    //middle
    modelMatrix = mat4.identity(modelMatrix);
    //

    mat4.translate(modelMatrix, modelMatrix, [8.45, 5.8, 1.0]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [1.1, 0.08, 0.0]);
    //

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 1.0, 1.0, 1.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);




    // +


    //TubeLightHolder
    modelMatrix = mat4.identity(modelMatrix);
    //

    mat4.translate(modelMatrix, modelMatrix, [8.45, 5.8, -0.336]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.06, 0.17, 0.1]);
    //

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.8, 0.8, 0.8);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    //RightTubeLightHolder
    modelMatrix = mat4.identity(modelMatrix);
    //

    mat4.translate(modelMatrix, modelMatrix, [8.45, 5.8, 2.33]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.05, 0.085, 0.1]);
    //

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.8, 0.8, 0.8);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    //
    modelMatrix = mat4.identity(modelMatrix);
    //

    mat4.translate(modelMatrix, modelMatrix, [8.45, 5.8, -0.2]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.095, 0.03, 0.1]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.3, 0.3, 0.3);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    //
    modelMatrix = mat4.identity(modelMatrix);
    //

    mat4.translate(modelMatrix, modelMatrix, [8.45, 5.8, 2.19]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.095, 0.03, 0.1]);
    //
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.3, 0.3, 0.3);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);




}
function drawGroupName() {

   
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [-6.0, -0.10, 27.51]);
    mat4.scale(modelMatrix, modelMatrix, [2.2, 1.588, 0.0]);

    gl.useProgram(textureShader);
    gl.bindTexture(gl.TEXTURE_2D, groupNameTexture);
    gl.uniformMatrix4fv(texModelMatrixUniform, false, modelMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);
    gl.uniform1f(mixUniform,Mixvar);
    gl.uniform1f(flagUniform, FlagFade);
    gl.bindVertexArray(vaoT);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.8, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    gl.useProgram(null);

}
function Door() {

    ////////////////// //////////////////  //////////////////

    //DOOR ACTUAL
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [8.45, -0.19, 2.51]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-90.0));
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleBathDoor));
    mat4.scale(modelMatrix, modelMatrix, [1.4, 2.488, 0.0]);
    mat4.translate(modelMatrix, modelMatrix, [-1.0, 0.0, 0.0]);

    //  mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.useProgram(textureShader);

    gl.bindTexture(gl.TEXTURE_2D, doorNoteTexture);
    gl.uniformMatrix4fv(texModelMatrixUniform, false, modelMatrix);
    gl.uniformMatrix4fv(texViewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(texProjectionMatrixUniorm, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vaoT);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.8, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    gl.useProgram(null);




    //// Door
    gl.useProgram(shaderProgramObjectG);
    ////Left
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [8.45, -0.16, -0.40]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.11, 2.528, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    //Top
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [8.40, 2.38, 1.103]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [1.603, 0.10, 0.0]);
    //mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    ////Right
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [8.45, -0.16, 2.610]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.10, 2.528, 0.0]);
    // mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

}

function Calender() {
    calenderLines();
    //Calender
    modelMatrix = mat4.identity(modelMatrix);
    //   var modelViewProjectionMatrix = mat4.create(); modelViewProjectionMatrix = mat4.identity(modelViewProjectionMatrix);
    // gl.polygonOffset(3.0, 3.0);
    mat4.translate(modelMatrix, modelMatrix, [8.45, 4.2, -3.0]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.6, 0.6, 0.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelMatrix);

    //  mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 1.0, 1.0, 1.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    // gl.polygonOffset(4.0, 4.0);
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [8.43, 4.8, -3.0]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.63, 0.06, 0.0]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.9, 0.4, 0.1);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}


function stand() {
    modelMatrix = mat4.identity(modelMatrix);
    //   var modelViewProjectionMatrix = mat4.create(); modelViewProjectionMatrix = mat4.identity(modelViewProjectionMatrix);
    // gl.polygonOffset(3.0, 3.0);
    mat4.translate(modelMatrix, modelMatrix, [3.85, 0.2, -3.0]);
    //  mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.2, 0.6, 0.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelMatrix);

    //  mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}

function keyboard() {
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [4.0, -0.39, -2.0]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(-80.0));
    mat4.scale(modelMatrix, modelMatrix, [1.2, 0.2, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}



function frontDoor() {
    ////////////////// //////////////////  //////////////////

    //DOOR ACTUAL
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [-8.246, -0.92, 8.2]);
    //mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleFrontDoor));
    mat4.scale(modelMatrix, modelMatrix, [1.44, 2.48, 0.0]);
    mat4.translate(modelMatrix, modelMatrix, [1.0, 0.3, 0.0]);

    //  mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.6, 0.6, 0.7);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);




    ////Left
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [-8.335, -0.18, 8.14]);
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.092, 2.481, 0.0]);
    //  mat4.lookAt(viewMatrix, [AnimateX, AnimateY, AnimateZ], [AnimateX, 0.0, 0.0], [0.0, 1.0, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    //Top
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [-6.785, 2.39, 8.14]);
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [1.642, 0.11, 0.0]);
    //mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    ////Right
    modelMatrix = mat4.identity(modelMatrix);

    mat4.translate(modelMatrix, modelMatrix, [-5.260, -0.2, 8.14]);
    // mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.11, 2.492, 0.0]);
    // mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.4, 0.2, 0.2);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

}


function Wall() {
    //Whole wall is divided in three parts as per the door
    //Wall 
    modelMatrix = mat4.identity(modelMatrix);

    //gl.polygonOffset(0.0, 0.0);
    mat4.translate(modelMatrix, modelMatrix, [8.5, 5.6, 1.10]);

    mat4.rotateY(modelMatrix, modelMatrix, degToRad(90.0));
    mat4.scale(modelMatrix, modelMatrix, [7.0, 3.1, 7.0]);

    //  mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.uniform1f(WallMixUniform, WallMix);
    gl.uniform1f(WallFlagUniform, WallFlag);

    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.93, 0.89, 0.69);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
    //
    modelmatrix = mat4.identity(modelMatrix);
    //console.log("2  "+modelViewMatrix);
    //var modelViewProjectionMatrix = mat4.create(); modelViewProjectionMatrix = mat4.identity(modelViewProjectionMatrix);
    //  gl.polygonOffset(1.0, 1.0);
    mat4.translate(modelMatrix, modelMatrix, [8.5, 0.55, 5.40]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [2.7, 3.25, 0.0]);


    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.uniform1f(WallMixUniform, WallMix);
    gl.uniform1f(WallFlagUniform, WallFlag);

    gl.bindVertexArray(vao_rectangle);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);


    modelmatrix = mat4.identity(modelMatrix);

    //gl.polygonOffset(2.0, 2.0);
    mat4.translate(modelMatrix, modelMatrix, [8.5, -0.1, -3.2]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [2.7, 2.6, 0.0]);


    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.uniform1f(WallMixUniform, WallMix);
    gl.uniform1f(WallFlagUniform, WallFlag);

    gl.bindVertexArray(vao_rectangle);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}


function DrawPosterFrame() {
    var color = new Float32Array(16);
    /*Black*/
    color[0] = 0.0;
    color[1] = 0.0;
    color[2] = 0.0;
    color[3] = 1.0;
    color[4] = 0.0;
    color[5] = 0.0;
    color[6] = 0.0;
    color[7] = 1.0;
    color[8] = 0.0;
    color[9] = 0.0;
    color[10] = 0.0;
    color[11] = 1.0;
    color[12] = 0.0;
    color[13] = 0.0;
    color[14] = 0.0;
    color[15] = 1.0;
    var quad_width = 0.1;
    var quad_height = 2.5;
    var left_bottom_x = -1.0;
    var left_bottom_y = 0.0;
    var left_bottom_z = 0.0;
    /*Left*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    var quad_width = 1.9;
    var quad_height = 0.1;
    var left_bottom_x = -0.9;
    var left_bottom_y = 2.4;
    var left_bottom_z = 0.0;
    /*top*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    var quad_width = 0.1;
    var quad_height = 2.5;
    var left_bottom_x = 0.9;
    var left_bottom_y = 0.0;
    var left_bottom_z = 0.0;
    /*right*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    var quad_width = 1.9;
    var quad_height = 0.1;
    var left_bottom_x = -0.9;
    var left_bottom_y = 0.0;
    var left_bottom_z = 0.0;
    /*bottom*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*Black*/
    color[0] = 0.89;
    color[1] = 0.89;
    color[2] = 0.89;
    color[3] = 1.0;

    color[4] = 0.89;
    color[5] = 0.89;
    color[6] = 0.89;
    color[7] = 1.0;

    color[8] = 0.89;
    color[9] = 0.89;
    color[10] = 0.89;
    color[11] = 1.0;

    color[12] = 0.89;
    color[13] = 0.89;
    color[14] = 0.89;
    color[15] = 1.0;
    var quad_width = 1.8;
    var quad_height = 2.3;
    var left_bottom_x = -0.9;
    var left_bottom_y = 0.1;
    var left_bottom_z = 0.0;
    /*Left*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    /*Inner Shadow frame*/
    color[0] = 1.0;
    color[1] = 0.980;
    color[2] = 0.980;
    color[3] = 1.0;

    color[4] = 1.0;
    color[5] = 0.980;
    color[6] = 0.980;
    color[7] = 1.0;

    color[8] = 0.863;
    color[9] = 0.863;
    color[10] = 0.863;
    color[11] = 1.0;

    color[12] = 0.863;
    color[13] = 0.863;
    color[14] = 0.863;
    color[15] = 1.0;
    var quad_width = 0.1;
    var quad_height = 2.3;
    var left_bottom_x = -0.9;
    var left_bottom_y = 0.1;
    var left_bottom_z = 0.0;
    /*Left*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 0.863;
    color[1] = 0.863;
    color[2] = 0.863;
    color[3] = 1.0;

    color[4] = 1.0;
    color[5] = 0.980;
    color[6] = 0.980;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 0.980;
    color[10] = 0.980;
    color[11] = 1.0;

    color[12] = 0.863;
    color[13] = 0.863;
    color[14] = 0.863;
    color[15] = 1.0;
    var quad_width = 1.6;
    var quad_height = 0.1;
    var left_bottom_x = -0.8;
    var left_bottom_y = 2.3;
    var left_bottom_z = 0.0;
    /*Top*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 0.863;
    color[1] = 0.863;
    color[2] = 0.863;
    color[3] = 1.0;

    color[4] = 0.863;
    color[5] = 0.863;
    color[6] = 0.863;
    color[7] = 1.0;

    color[8] = 1.0;
    color[9] = 0.980;
    color[10] = 0.980;
    color[11] = 1.0;

    color[12] = 1.0;
    color[13] = 0.980;
    color[14] = 0.980;
    color[15] = 1.0;
    var quad_width = 0.1;
    var quad_height = 2.3;
    var left_bottom_x = 0.8;
    var left_bottom_y = 0.1;
    var left_bottom_z = 0.0;
    /*Right*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

    color[0] = 1.0;
    color[1] = 0.980;
    color[2] = 0.980;
    color[3] = 1.0;

    color[4] = 0.863;
    color[5] = 0.863;
    color[6] = 0.863;
    color[7] = 1.0;

    color[8] = 0.863;
    color[9] = 0.863;
    color[10] = 0.863;
    color[11] = 1.0;

    color[12] = 1.0;
    color[13] = 0.980;
    color[14] = 0.980;
    color[15] = 1.0;
    var quad_width = 1.6;
    var quad_height = 0.1;
    var left_bottom_x = -0.8;
    var left_bottom_y = 0.1;
    var left_bottom_z = 0.0;
    /*Bottom*/
    DrawPosterFrameQuad(left_bottom_x, left_bottom_y, left_bottom_z, quad_width, quad_height, color);

}

function DrawPosterFrameQuad() {
    var quadVertices = new Float32Array([-0.5, -0.5, 0.0,
    -0.5, 0.5, 0.0,
        0.5, 0.5, 0.0,
        0.5, -0.5, 0.0]);

    var quadColor = new Float32Array(16);
    quadColor[0] = color[0];
    quadColor[1] = color[1];
    quadColor[2] = color[2];
    quadColor[3] = color[3];
    quadColor[4] = color[4];
    quadColor[5] = color[5];
    quadColor[6] = color[6];
    quadColor[7] = color[7];
    quadColor[8] = color[8];
    quadColor[9] = color[9];
    quadColor[10] = color[10];
    quadColor[11] = color[11];
    quadColor[12] = color[12];
    quadColor[13] = color[13];
    quadColor[14] = color[14];
    quadColor[15] = color[15];
    modelViewMatrix = setCameraAndGetModelViewMatrix();
    var modelViewProjection = mat4.create();
    var translationMatrix = mat4.create();
    var rotationalMatrix = mat4.create();
    var scaleMatrix = mat4.create();

    var tx = x + (width / 2.0);
    var ty = y + (height / 2.0);
    mat4.translate(translationMatrix, translationMatrix, [tx, ty, -6.0]);
    mat4.multiply(modelViewMatrix, modelViewMatrix, translationMatrix);

    mat4.scale(scaleMatrix, scaleMatrix, [width, height, 1.0]);
    mat4.multiply(modelViewMatrix, modelViewMatrix, scaleMatrix);


    mat4.multiply(modelViewProjection, perspectiveProjectionMatrix, modelViewMatrix);
    gl.uniformMatrix4fv(mvpUniformG, false, modelViewProjection);



    gl.bindVertexArray(vao_quad);

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_position);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_quad_color);
    gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}




function drawKundaliCube() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [4.0, 0.0, -1.5]);
    mat4.rotateX(modelMatrix, modelMatrix, degToRad(angleX));
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(angleY));
    mat4.rotateZ(modelMatrix, modelMatrix, degToRad(angleZ));
    mat4.scale(modelMatrix, modelMatrix, [0.75, 0.75, 0.75]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, cube_texture);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);

}


function drawCabinate() {
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [1.85, 0.18, -3.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.6, 0.6, 0.0]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    ////////////////////////// SIDE RIGHT QUAD CABINATE
    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [2.2, 0.18, -3.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(gAngleAngleAll));
    mat4.scale(modelMatrix, modelMatrix, [0.6, 0.6, 0.0]);

    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);

    //////////////////////////////// FRONT QUAD CABINATE

    modelMatrix = mat4.identity(modelMatrix);
    mat4.translate(modelMatrix, modelMatrix, [2.05, 0.19, -3.0]);
    mat4.scale(modelMatrix, modelMatrix, [0.2, 0.6, 0.0]);
    gl.uniformMatrix4fv(modelMatrixUniformCommon, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformCommon, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormCommon, false, perspectiveProjectionMatrix);
    gl.bindVertexArray(vao_rectangle);
    gl.vertexAttrib3f(WebGLMacros.VDG_ATTRIBUTE_COLOR, 0.0, 0.0, 0.0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.bindVertexArray(null);
}


function drawCodeImage() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, code_image);
    gl.uniform1i(uniform_texture0_samplerImage, 0);

    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);

}


function drawWindowsWallpaperImage() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, image_first);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);
}

function drawUbuntuWallpaperImage() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, UbuntuTexture);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);
}

function drawUbuntuDesktopImage() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, ubuntuDesktopTexture);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);
}

function drawUbuntuTerminalImage() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, ubuntuTerminalTexture);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);
}



function drawFirstTexture() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);

    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);

    gl.bindTexture(gl.TEXTURE_2D, VS_Texture);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);

}

function drawBootTexture() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);
    //gl.clearColor(0.0, 0.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);
    //imageOnScreen = "Vijay_Kundali.png";

    gl.bindTexture(gl.TEXTURE_2D, booting);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);

}

function drawTextureOnMonitor(tex) {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);
    //gl.clearColor(0.0, 0.0, 0.0, 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.3, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    mat4.scale(modelMatrix, modelMatrix, [0.75, 2.0, 3.5]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);


    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);
    gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.useProgram(null);

}

function drawBlank() {


    gl.useProgram(shaderProgramObjectKundaliCube);

    modelMatrix = mat4.create();

    gl.bindFramebuffer(gl.FRAMEBUFFER, FBO);
    gl.viewport(0, 0, 1404, 1080);
    gl.clearColor(0.08, 0.09, 0.15, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.translate(modelMatrix, modelMatrix, [5.0, 0.0, -0.5]);
    mat4.rotateY(modelMatrix, modelMatrix, degToRad(-60));

    //   mat4.scale(modelMatrix, modelMatrix, [0.75, 0.75, 0.75]);


    gl.uniformMatrix4fv(modelMatrixUniformKundaliCube, false, modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniformKundaliCube, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniformKundaliCube, false, perspectiveProjectionMatrix);
    //imageOnScreen = "Vijay_Kundali.png";

    gl.bindTexture(gl.TEXTURE_2D, VS_Texture);
    gl.uniform1i(uniform_texture0_samplerImage, 0);


    gl.bindVertexArray(vao_CubeKundali);


    gl.bindVertexArray(null);


    gl.useProgram(null);

}






function drawFramebufferMemory() {
    modelMatrixFBO = mat4.create();
    viewMatrixFBO = mat4.create();
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(gShaderProgramObject_FBO);


    mat4.translate(modelMatrixFBO, modelMatrixFBO, [4.0, 0.9, -5.7]);
    mat4.scale(modelMatrixFBO, modelMatrixFBO, [1.2, 0.9, 2.9]);
    gl.uniformMatrix4fv(modelMatrixUniformFBO, false, modelMatrixFBO);
    gl.uniformMatrix4fv(viewMatrixUniformFBO, false, viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniormFBO, false, perspectiveProjectionMatrix);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, Texture_FBO);
    gl.uniform1i(SamplerUniform_FBO, 0);

    gl.bindVertexArray(gVao_CubeTexture);
    //   gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    //   gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
    //    gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
    //    gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
    // gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);

    gl.bindVertexArray(null);

    gl.useProgram(null);
    //gl.bindFramebuffer(gl.FRAMEBUFFER,null);
}




