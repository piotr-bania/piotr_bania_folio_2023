import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import { Fog } from 'three'
import { useControls } from 'leva'

import Scene_1 from './scenes/Scene_1'
import Caption_1 from './captions/Caption_1'
import Scene_2 from './scenes/Scene_2'
import Caption_2 from './captions/Caption_2'
import Scene_3 from './scenes/Scene_3'
import Caption_3 from './captions/Caption_3'

const AnimatedDirectionalLight = () => {
    
    const lightRef = React.useRef()
    
    useFrame(({ clock }) => {
        if (lightRef.current) {
            const radius = 20
            const angle = clock.getElapsedTime() * 0.01
            lightRef.current.position.set(
            radius * Math.sin(angle),
            10,
            radius * Math.cos(angle)
            )
        }
    })
    
    return (
        <directionalLight
            position={[5, 5, 55]}
            ref={lightRef}
            color={'#FDEECD'}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
        />
    )
}

const Experience = () => {

    // const { positionX } = useControls({ positionX: 0 })
    // const { positionY } = useControls({ positionY: 0 })
    // const { positionZ } = useControls({ positionZ: 25 })
    // const { rotationX } = useControls({ rotationX: 0 })
    // const { rotationY } = useControls({ rotationY: 0 })
    // const { rotationZ } = useControls({ rotationZ: 0 })

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
                        onCreated={(state) => {
                            state.gl.setClearColor('#9A96C0')
                            state.scene.fog = new Fog('#0B0445', 1, 45)
                        }}
                        >
                        <Suspense fallback={null}>
                            <PerspectiveCamera
                                makeDefault
                                position={[-1.72, 2.49, 21]}
                                rotation={[-0.18, -0.26, 0]}
                                fov={21}
                                />

                            <AnimatedDirectionalLight />
                            <ambientLight intensity={0.05} />
                            <Environment files='./environments/dikhololo_night_1k.hdr' />
                            <Scene_1 />
                            <Caption_1 />
                        </Suspense>
                    </Canvas>
                </m.div>

                <m.div className='scene_2'
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
                    <Canvas className='canvas' shadows
                        onCreated={(state) => {
                            state.gl.setClearColor('#9A96C0')
                            state.scene.fog = new Fog('#0B0445', 1, 45)
                        }}
                        >
                        <Suspense fallback={null}>
                            <PerspectiveCamera
                                makeDefault
                                position={[-4.05, 3.5, 3.7]}
                                rotation={[-0.22, 0.16, 0]}
                                fov={21}
                                />

                                <pointLight
                                    position={[10, 10, 10]}
                                    castShadow
                                    shadow-mapSize={[1024, 1024]}
                                    />
                                <ambientLight intensity={0.025} />
                                <Environment files='./environments/dikhololo_night_1k.hdr' />

                            <Scene_2 />
                            <Caption_2 />
                        </Suspense>
                    </Canvas>
                </m.div>

                <m.div className='scene_3'
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >
                    <Canvas className='canvas' shadows
                        onCreated={(state) => {
                            state.gl.setClearColor('#9A96C0')
                            state.scene.fog = new Fog('#0B0445', 1, 45)
                        }}
                        >
                        <Suspense fallback={null}>
                            <PerspectiveCamera
                                makeDefault
                                position={[-1.72, 2.49, 21]}
                                rotation={[-0.18, -0.26, 0]}
                                fov={21}
                                />

                            <pointLight
                                position={[10, 10, 10]}
                                castShadow
                                shadow-mapSize={[1024, 1024]}
                                />
                            <ambientLight intensity={0.025} />
                            <Environment files='./environments/dikhololo_night_1k.hdr' />

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