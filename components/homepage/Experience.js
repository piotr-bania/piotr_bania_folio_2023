import React, { useRef, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, Environment, View, Html, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Fog } from 'three'

import Scene_1 from './scenes/Scene_1'
import Caption_1 from './captions/Caption_1'
import Scene_2 from './scenes/Scene_2'
import Caption_2 from './captions/Caption_2'
import Scene_3 from './scenes/Scene_3'
import Caption_3 from './captions/Caption_3'

const Experience = () => {
    return (
        <>
            <div className='scene_1'>
                <Canvas className='canvas' shadows
                    onCreated={(state) => {
                        state.gl.setClearColor('#9A96C0')
                        state.scene.fog = new Fog('#0B0445', 1, 55)
                    }}
                >
                    <Suspense fallback={null}>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 10, 45]}
                            fov={45}
                            />

                        <pointLight
                        intensity={0.5}
                            position={[5, 15, 10]}
                            castShadow
                            shadow-mapSize={[1024, 1024]}
                            />

                        <ambientLight intensity={0.05} />

                        <Environment files='./environments/dikhololo_night_1k.hdr' />

                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>

                        <Scene_1 />
                        <Caption_1 />
                    </Suspense>
                    
                    <OrbitControls
                        rotateSpeed={0.25}
                        enablePan={false}
                        minPolarAngle={Math.PI / 20}
                        maxPolarAngle={Math.PI / 2.35}
                        minDistance={5}
                        maxDistance={20}
                        enableDamping={true}
                        dampingFactor={0.1}
                    />
                </Canvas>
            </div>

            <div className='scene_2'>
                <Canvas className='canvas' shadows
                    onCreated={(state) => {
                        state.gl.setClearColor('#9A96C0')
                        state.scene.fog = new Fog('#0B0445', 1, 55)
                    }}
                >
                    <Suspense fallback={null}>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 25]}
                            fov={25}
                            />

                            <pointLight
                                position={[10, 10, 10]}
                                castShadow
                                shadow-mapSize={[1024, 1024]}
                                />

                            <ambientLight intensity={0.025} />

                            <Environment files='./environments/dikhololo_night_1k.hdr' />

                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>

                        <Scene_2 />
                        <Caption_2 />
                    </Suspense>

                    <OrbitControls
                        rotateSpeed={0.25}
                        enablePan={false}
                        minPolarAngle={Math.PI / 20}
                        maxPolarAngle={Math.PI / 2.35}
                        minDistance={5}
                        maxDistance={20}
                        enableDamping={true}
                        dampingFactor={0.1}
                    />
                </Canvas>
            </div>

            <div className='scene_3'>
                <Canvas className='canvas' shadows
                    onCreated={(state) => {
                        state.gl.setClearColor('#0E065C')
                        state.scene.fog = new Fog('#0E065C', 1, 55)
                    }}
                >
                    <Suspense fallback={null}>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 10, 45]}
                            fov={45}
                            />

                        <pointLight
                            position={[10, 10, 10]}
                            castShadow
                            shadow-mapSize={[1024, 1024]}
                            />

                        <ambientLight intensity={0.025} />

                        <Environment files='./environments/dikhololo_night_1k.hdr' />

                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>

                        <Scene_3 />
                        <Caption_3 />
                    </Suspense>

                    <OrbitControls
                        rotateSpeed={0.25}
                        enablePan={false}
                        minPolarAngle={Math.PI / 20}
                        maxPolarAngle={Math.PI / 2.35}
                        minDistance={5}
                        maxDistance={20}
                        enableDamping={true}
                        dampingFactor={0.1}
                    />
                </Canvas>
            </div>
        </>
    )
}

export default Experience