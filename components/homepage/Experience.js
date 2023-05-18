import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import { Fog } from 'three'

import Scene_1 from './scenes/Scene_1'
import Caption_1 from './captions/Caption_1'
import Scene_2 from './scenes/Scene_2'
import Caption_2 from './captions/Caption_2'
import Scene_3 from './scenes/Scene_3'
import Caption_3 from './captions/Caption_3'

const Experience = () => {
    return (
        <AnimatePresence>
            <m.section
                id="opening"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                <m.div className='scene_1'
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
                    <Canvas className='canvas' shadows
                        // onCreated={(state) => {
                        //     state.gl.setClearColor('#9A96C0')
                        //     state.scene.fog = new Fog('#0B0445', 1, 55)
                        // }}
                        >
                        <Suspense fallback={null}>
                            <PerspectiveCamera
                                makeDefault
                                position={[0, 0, 45]}
                                fov={45}
                                />

                            <directionalLight
                                intensity={1}
                                position={[0, 10, 35]}
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
                </m.div>

                <m.div className='scene_2'
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
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
                </m.div>

                <m.div className='scene_3'
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
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
                </m.div>
            </m.section>
        </AnimatePresence>
    )
}

export default Experience