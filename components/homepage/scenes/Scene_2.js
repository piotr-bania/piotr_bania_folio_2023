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

            uDepthColor: { value: new THREE.Color('#FFFFFF') },
            uSurfaceColor: { value: new THREE.Color('#7161F5') },
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

    const {nodes: terrain} = useLoader(GLTFLoader, '/models/scene.glb')
    const {nodes: flower} = useLoader(GLTFLoader, '/models/flower.glb')

    return (
        <group ref={groupRef} position={[1, 1, 10]} rotation={[-0.1, 0, 0]} >
            
            {/* --- Terrain mesh --- */}
            <mesh receiveShadow
                geometry={terrain.terrain_1.geometry}
                >
                <meshToonMaterial />
            </mesh>

            {/* --- Terrain outline --- */}
            <mesh
                geometry={terrain.terrain_2.geometry}
                >
                <meshToonMaterial color={'#000000'} />
            </mesh>

            {/* --- Water mesh --- */}
            <mesh geometry={terrain.water.geometry} >
                <shaderMaterial args={[waterMaterial]} />
            </mesh>

            {/* --- Flower stem mesh --- */}
            <mesh castShadow
                geometry={flower.plant_1_1.geometry}
                // material={flower.plant_1_1.material}
                position={[0, 0.35, 0]}
                >
                <meshToonMaterial />
            </mesh>

            {/* --- Flower stem outline --- */}
            <mesh geometry={flower.plant_1_2.geometry} position={[0, 0.35, 0]} >
                <meshToonMaterial color={'#000000'} />
            </mesh>

            {/* --- Flower mesh --- */}
            <mesh castShadow
                geometry={flower.flower_1_1.geometry}
                // material={flower.flower_1_1.material}
                position={[0, 0.35, 0]}
                >
                <meshToonMaterial />
            </mesh>

            {/* --- Flower outline --- */}
            <mesh geometry={flower.flower_1_2.geometry} position={[0, 0.35, 0]} >
                <meshToonMaterial color={'#000000'} />
            </mesh>

        </group>
    )
}

export default Scene_2