import React, { useState, useRef } from 'react'
import { useTexture, useGLTF, Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import water_vert from '../../../shaders/water.vert'
import water_frag from '../../../shaders/water.frag'

const Scene_2 = () => {

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

    const {nodes} = useLoader(GLTFLoader, '/models/scene_1.glb')

    return (
        <>
            <mesh receiveShadow
                geometry={nodes.land_1.geometry}>
                <meshToonMaterial color={'#D56961'} />
            </mesh>
            <mesh receiveShadow
                geometry={nodes.land_2.geometry}>
                <meshStandardMaterial color={'#000000'} />
            </mesh>

            <mesh receiveShadow
                geometry={nodes.planet_1_1.geometry}>
                <meshToonMaterial color={'#E7B38F'} />
            </mesh>
            <mesh receiveShadow
                geometry={nodes.planet_1_2.geometry}>
                <meshStandardMaterial color={'#000000'} />
            </mesh>

            <mesh receiveShadow
                geometry={nodes.planet_2_1.geometry}>
                <meshToonMaterial color={'#E7B38F'} />
            </mesh>
            <mesh receiveShadow
                geometry={nodes.planet_2_2.geometry}>
                <meshStandardMaterial color={'#000000'} />
            </mesh>

            <mesh
                receiveShadow
                geometry={nodes.water.geometry}>
                <shaderMaterial args={[waterMaterial]} />
            </mesh>
            <mesh receiveShadow
                geometry={nodes.water.geometry}>
                <meshStandardMaterial color={'#000000'} />
            </mesh>
        </>
    )
}

export default Scene_2