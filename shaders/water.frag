uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform float uTransparency;

varying float vElevation;

void main() {
    float mixStrength =(vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor, uSurfaceColor, vElevation);

    gl_FragColor = vec4(color, uTransparency);
}