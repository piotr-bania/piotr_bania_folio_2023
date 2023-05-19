import React, { useState, useRef, useMemo, useEffect } from 'react'
import { useAnimations } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { ShaderMaterial, TextureLoader } from 'three'

import water_vert from '../../../shaders/water.vert'
import water_frag from '../../../shaders/water.frag'

const Scene_1 = (props) => {

    const groupRef = useRef()

    const waterMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },

            uBigWaveElevation: { value: 0.5 },
            uBigWaveFrequency: { value: new THREE.Vector2(0.5, 0.75) },
            uBigWaveSpeed: { value: 0.5 },

            uDepthColor: { value: new THREE.Color('#61B5F5') },
            uSurfaceColor: { value: new THREE.Color('#FFFFFF') },
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
        // groupRef.current.rotation.y -= 0.00025
    })

    const {nodes, materials, animations} = useLoader(GLTFLoader, '/models/untitled.glb')
    const {actions} = useAnimations(animations, nodes.Suzanne)
    
    const {nodes: terrain} = useLoader(GLTFLoader, '/models/scene_1.glb')

    useEffect(() => {
        actions.SuzanneAction.play()
    }, [actions])

    return (
        <>
            {/* <mesh>
                <primitive
                    castShadow
                    object={nodes.Suzanne}
                    dispose={null}
                />
            </mesh> */}

            <mesh receiveShadow
                geometry={terrain.terrain.geometry}
                material={terrain.terrain.material}>
            </mesh>

            <mesh
                geometry={terrain.water.geometry}>
                <shaderMaterial args={[waterMaterial]} />
            </mesh>
        </>
    )
}

export default Scene_1