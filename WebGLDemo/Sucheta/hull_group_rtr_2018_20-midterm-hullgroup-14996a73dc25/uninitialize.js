
function uninitialize() {
    if (vao) {
        gl.deleteVertexArray(vao);
        
    }

    if (vbo_Position) {
        gl.deleteBuffer(vbo_Position);
        vbo_Position = null;
    }

    if (vbo_Color) {
        gl.deleteBuffer(vbo_Color);
        vbo_Color = null;
    }
    if (vbo_texture) {
        gl.deleteBuffer(vbo_texture);
        vbo_Color = null;
    }
    if (vao_quad) {
        gl.deleteVertexArray(vao_quad);
        
    }
    
    if(vbo_quad_position)
    {
        gl.deleteBuffer(vbo_quad_position);
    }
    if(vbo_quad_color)
    {
        gl.deleteBuffer(vbo_quad_color);
    }
    if (vao_line) {
        gl.deleteVertexArray(vao_line);
        
    }
    if(vbo_line_color)
    {
        gl.deleteBuffer(vbo_line_color);
    }
    if(vbo_line_position)
    {
        gl.deleteBuffer(vbo_line_position);
    }
    if (vao_point) {
        gl.deleteVertexArray(vao_point);
        
    }
    if(vbo_point_color)
    {
        gl.deleteBuffer(vbo_point_color);
    }
    if(vbo_point_position)
    {
        gl.deleteBuffer(vbo_point_position);
    }
    if (vao_CirclePoint) {
        gl.deleteVertexArray(vao_CirclePoint);
        
    }
    if(vbo_CirclePoint)
    {
        gl.deleteBuffer(vbo_CirclPoint);
    }
    if (vao_Circle) {
        gl.deleteVertexArray(vao_Circle);
        
    }
    if(vbo_Position_Circle)
    {
        gl.deleteBuffer(vbo_Position_Circle);
    }
    if(vbo_Color_Circle)
    {
        gl.deleteBuffer(vbo_Color_Circle);
    }
    if (vao_CubeKundali) {
        gl.deleteVertexArray(vao_CubeKundali);
        
    }
    if(vbo_Position_CubeKundali)
    {
        gl.deleteBuffer(vbo_Position_CubeKundali);
    }
    if(vbo_textureKundali)
    {
        gl.deleteBuffer(vbo_textureKundali);
    }
        if (gVao_CubeTexture) {
            gl.deleteVertexArray(gVao_CubeTexture);
            
        }
    if(gVBO_Texture)
    {
        gl.deleteBuffer(gVBO_Texture);
    }
    if(gVBO_Position)
    {
        gl.deleteBuffer(gVBO_Position);
    }
    if (vao_quad_brick) {
        gl.deleteVertexArray(vao_quad_brick);
    }   
    if(vbo_position_quad_brick)
    {
        gl.deleteBuffer(vbo_position_quad_brick);
    }
    if(vbo_normals_quad_brick)
    {
        gl.deleteBuffer(vbo_normals_quad_brick);
    }
    if (vao_pyramid) {
        gl.deleteVertexArray(vao_pyramid);
    }   
    if(vbo_position_pyramid)
    {
        gl.deleteBuffer(vbo_position_pyramid);
    }
    if(vbo_normals_pyrmaid)
    {
        gl.deleteBuffer( vbo_normals_pyrmaid);
            
    }
    if (vaoT) {
        gl.deleteVertexArray(vaoT);
    }  
    if(vbo_PositionT)
    {
        gl.deleteBuffer( vbo_PositionT);
            
    }
    if(vbo_texcoordsT)
    {
        gl.deleteBuffer( vbo_texcoordsT);
            
    }

    if (vaoChair) {
        gl.deleteVertexArray(vaoChair);
    }  
    
    if(vboPositionCirclePointsSun)
	{
		gl.deleteBuffer(vboPositionCirclePoints);
		vboPositionCirclePoints=null;
	}
	if(vboColorCirclePointsSun)
	{
		gl.deleteBuffer(vboColorCirclePointsSun);
		vboColorCirclePointsSun=null;
	}
	if(vboPositionCirclePointsMoon)
	{
		gl.deleteBuffer(vboPositionCirclePointsMoon);
		vboPositionCirclePointsMoon=null;
	}
	if(vboColorCirclePointsMoon)
	{
		gl.deleteBuffer(vboColorCirclePointsMoon);
		vboColorCirclePointsMoon=null;
	}
	if(vboPositionRectangle)
	{
		gl.deleteBuffer(vboPositionRectangle);
		vboPositionRectangle=null;
	}
	if(vboColorRectangle)
	{
		gl.deleteBuffer(vboColorRectangle);
		vboColorRectangle=null;
	}
	if(vaoCircleSun)
	{
		gl.deleteVertexArray(vaoCircle);
		vaoCircle=null;
	}
	if(vaoCircleMoon)
	{
		gl.deleteVertexArray(vaoCircleMoon);
		vaoCircleMoon=null;
	}
	if(vaoRectangle)
	{
		gl.deleteVertexArray(vaoRectangle);
		vaoRectangle=null;
	}
    
    if (shaderProgramObject) {
        if (fragmentShaderObject) {
            gl.detachShader(shaderProgramObject, fragmentShaderObject);
            gl.deleteShader(fragmentShaderObject);
            fragmentShaderObject = null;
        }



        if (vertexShaderObject) {
            gl.detachShader(shaderProgramObject, vertexShaderObject);
            gl.deleteShader(vertexShaderObject);
            vertexShaderObject = null;
        }

        gl.deleteProgram(shaderProgramObject);
        shaderProgramObject = null;
    }
}