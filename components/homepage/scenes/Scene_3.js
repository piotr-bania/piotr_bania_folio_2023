import React, { useState, useRef } from 'react'
import { useTexture, useGLTF, Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import water_vert from '../../../shaders/water.vert'
import water_frag from '../../../shaders/water.frag'

const Scene_3 = () => {

    const cubeRef = useRef()

    const waterMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },

            uBigWaveElevation: { value: 0.25 },
            uBigWaveFrequency: { value: new THREE.Vector2(0.5, 0.75) },
            uBigWaveSpeed: { value: 0.5 },

            uDepthColor: { value: new THREE.Color('#289BA5') },
            uSurfaceColor: { value: new THREE.Color('#67F0F6') },
            uColorOffset: { value: 0.08 },
            uColorMultiplier: { value: 5.0 },

            uTransparency: { value: 0.75 },
        },
        vertexShader: water_vert,
        fragmentShader: water_frag,
        transparent: true,
        side: 2,
    })

    useFrame((state, delta) => {
        waterMaterial.uniforms.uTime.value += delta
        cubeRef.current.rotation.x -= 0.003
        cubeRef.current.rotation.y -= 0.004
    })

    // const {scene, nodes, materials} = useLoader(GLTFLoader, '/models/scene_final.glb')

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[10, 10, 10]} />
            <meshStandardMaterial color='yellow' />
        </mesh>
    )
}

export default Scene_3