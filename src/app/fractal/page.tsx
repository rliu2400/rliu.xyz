"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `  attribute vec4 position;
  void main() {
    gl_Position = position;
  }`;

const fragmentShaderSource = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

vec3 julia(vec2 uv, vec2 c) {
    vec2 z = uv;
    float iter = 0.0;
    const float max_iter = 300.0;

    for (float i = 0.0; i < max_iter; i++) {
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
        if (length(z) > 4.0) {
            iter = i / max_iter;
            break;
        }
    }

    return vec3(iter, 0.0, 0.0); // Red fractal with black background
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    uv *= 2.0;

    float cycleTime = mod(u_time, 50.0); // 10-second repeating cycle
    float t = abs(sin((cycleTime / 25.0) * 3.14159265359)); // Ping-pong effect

    // Restrict parameter range: c will oscillate between two values
    vec2 c_min = vec2(-0.81, 0.15);
    vec2 c_max = vec2(-0.78, 0.15005);
    vec2 c = mix(c_min, c_max, t); // Smoothly vary within range

    vec3 color = julia(uv, c);
    gl_FragColor = vec4(color, 1.0);
}
`;

const FractalCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!(canvas instanceof HTMLCanvasElement)) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL is not supported");
      return;
    }

    const compileShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        throw new Error("Shader compilation failed");
      }
      return shader;
    };

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error("Shader program linking failed");
    }
    gl.useProgram(program);

    const quadVertices = new Float32Array([
      -1, -1,  1, -1, -1,  1, 
      -1,  1,  1, -1,  1,  1,
    ]);

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const positionAttribute = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionAttribute);
    gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);

    const timeUniform = gl.getUniformLocation(program, "u_time");
    const resolutionUniform = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniform, canvas.width, canvas.height);

    const render = (time: number) => {
      gl.uniform1f(timeUniform, time * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const FractalPage = () => {
  return (
    <div className="relative w-screen h-screen">
      <FractalCanvas />
    </div>
  );
};

export default FractalPage;


