import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, View } from '@react-three/drei'
import Homepage from './Homepage'
import Controls from '../Controls'

const Experience = () => {

    return (
        <div className='canvas_homepage' >
            <Canvas
                shadows
                
            >
                <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={25} />

                <directionalLight position={[1, 1, 0.25]} intensity={1} color={'#FFFFFF'} />
                <directionalLight position={[-1, -1, -0.75]} intensity={0.5} color={'#7171EE'} />
                <directionalLight position={[-1, 1, -0.5]} intensity={0.5} color={'#FFFFFF'} />
                <ambientLight intensity={0.05} />
                {/* <Environment files='./environments/brown_photostudio_02_1k.hdr' /> */}

                <Suspense fallback={null}>
                    <Homepage />
                </Suspense>

                <Controls />
            </Canvas>
        </div>
    )
}

export default Experience