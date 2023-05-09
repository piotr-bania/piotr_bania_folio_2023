import React, { useState, useRef } from 'react'
import { useTexture, useGLTF, Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import water_vert from '../../../shaders/water.vert'
import water_frag from '../../../shaders/water.frag'

const Scene_1 = () => {

    const groupRef = useRef()

    const waterMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },

            uBigWaveElevation: { value: 0.15 },
            uBigWaveFrequency: { value: new THREE.Vector2(0.5, 0.75) },
            uBigWaveSpeed: { value: 0.5 },

            uDepthColor: { value: new THREE.Color('#27F4EE') },
            uSurfaceColor: { value: new THREE.Color('#238899') },
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
        groupRef.current.rotation.y -= 0.00025
    })

    const {scene, nodes, materials} = useLoader(GLTFLoader, '/models/scene.glb')
    console.log(nodes)
    return (
    <group ref={groupRef} position={[0, 0, 0]}>
        <mesh
            geometry={nodes.terrain.geometry}
            // material={nodes.terrain.material}
        >
            <meshToonMaterial />
        </mesh>
        <mesh
            geometry={nodes.water.geometry}
        >
            <shaderMaterial args={[waterMaterial]} />
        </mesh>
    </group>
    )
}

export default Scene_1