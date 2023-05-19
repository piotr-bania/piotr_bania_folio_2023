import React, { useState, useRef } from 'react'
import { useTexture, useGLTF, Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, MeshToonMaterial } from 'three'

import water_vert from '../../../shaders/water.vert'
import water_frag from '../../../shaders/water.frag'

const Scene_3 = () => {

    const groupRef = useRef()

    const waterMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },

            uBigWaveElevation: { value: 0.25 },
            uBigWaveFrequency: { value: new THREE.Vector2(0.5, 0.75) },
            uBigWaveSpeed: { value: 0.5 },

            uDepthColor: { value: new THREE.Color('#61B5F5') },
            uSurfaceColor: { value: new THREE.Color('#FFFFFF') },
            uColorOffset: { value: 0.8 },
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
        // groupRef.current.rotation.y -= 0.00025
    })

    const {nodes: terrain} = useLoader(GLTFLoader, '/models/scene_1.glb')

    return (
        <>
            <mesh receiveShadow
                geometry={terrain.terrain.geometry}
                material={terrain.terrain.material}>
            </mesh>

            <mesh
                receiveShadow
                geometry={terrain.water.geometry}>
                <shaderMaterial args={[waterMaterial]} />
            </mesh>
        </>
    )
}

export default Scene_3