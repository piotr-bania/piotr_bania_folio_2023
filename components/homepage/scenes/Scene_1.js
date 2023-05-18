import React, { useState, useRef } from 'react'
import { useTexture, useGLTF, Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, TextureLoader } from 'three'

import water_vert from '../../../shaders/water.vert'
import water_frag from '../../../shaders/water.frag'

const Scene_1 = () => {

    const groupRef = useRef()

    const waterMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },

            uBigWaveElevation: { value: 0.5 },
            uBigWaveFrequency: { value: new THREE.Vector2(0.5, 0.75) },
            uBigWaveSpeed: { value: 0.5 },

            uDepthColor: { value: new THREE.Color('#FFFFFF') },
            uSurfaceColor: { value: new THREE.Color('#7161F5') },
            uColorOffset: { value: 0.8 },
            uColorMultiplier: { value: 5.0 },

            uTransparency: { value: 0.5 },
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

    const {nodes} = useLoader(GLTFLoader, '/models/untitled.glb')
    console.log(nodes)
    return (
        <group ref={groupRef} scale={3} >

            <mesh
                castShadow
                geometry={nodes.Suzanne_1.geometry}
                >
                <meshToonMaterial color={'#ffff00'} />
            </mesh>
            <mesh
                castShadow
                geometry={nodes.Suzanne_2.geometry}
                >
                <meshToonMaterial color={'#000000'} />
            </mesh>

            <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeGeometry args={[15, 15, 1, 1]} />
                <meshStandardMaterial />
            </mesh>
        </group>
    )
}

export default Scene_1