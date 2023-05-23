import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import { Fog } from 'three'
import { useControls } from 'leva'
import Controls from '../Controls'

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
            const radius = 50
            const angle = clock.getElapsedTime() * 0.1
            lightRef.current.position.set(
            radius * Math.sin(angle),
            15,
            radius * Math.cos(angle)
            )
        }
    })
    
    return (
        <directionalLight
            position={[25, 25, 45]}
            ref={lightRef}
            color={'#7161F5'}
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
    // const { positionY } = useControls({ positionY: 5 })
    // const { positionZ } = useControls({ positionZ: -2 })
    // const { rotationX } = useControls({ rotationX: -.2 })
    // const { rotationY } = useControls({ rotationY: 0 })
    // const { rotationZ } = useControls({ rotationZ: 0 })

    return (
        <AnimatePresence>
            <m.div className='scene_1'
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 4, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas className='canvas' shadows
                    onCreated={(state) => {
                        state.gl.setClearColor('#07032E')
                        state.scene.fog = new Fog('#0B0445', 1, 95)
                    }}
                    >
                    <Suspense fallback={null}>
                        <PerspectiveCamera
                            makeDefault
                            position={[35.83, 4.4, -8.5]}
                            rotation={[0, 0.87, 0]}
                            fov={21}
                            />

                        {/* <AnimatedDirectionalLight castShadow /> */}
                        <directionalLight castShadow />
                        <ambientLight />
                        <Environment preset='sunset' />

                        <Scene_1 />
                    </Suspense>
                </Canvas>
                <Caption_1 />
            </m.div>

            <m.div className='scene_2'
                initial={{opacity: 0}}
                animate={{ opacity: 1, transition: {delay: 4.5, duration: 2, ease: 'easeInOut'}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas className='canvas' shadows
                    onCreated={(state) => {
                        state.gl.setClearColor('#07032E')
                        state.scene.fog = new Fog('#0B0445', 1, 95)
                    }}
                    >
                    <Suspense fallback={null}>
                        <PerspectiveCamera
                            makeDefault
                            position={[35.83, 4.4, -8.5]}
                            rotation={[0, 0.87, 0]}
                            fov={21}
                            />

                        {/* <AnimatedDirectionalLight castShadow /> */}
                        <directionalLight castShadow />
                        <ambientLight />
                        <Environment preset='sunset' />

                        <Scene_2 />
                    </Suspense>
                    <Controls />
                </Canvas>
                <Caption_2 />
            </m.div>

            <m.div className='scene_3'
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 5, duration: 2, ease: 'easeInOut'}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                >
                <Canvas className='canvas' shadows
                    onCreated={(state) => {
                        state.gl.setClearColor('#07032E')
                        state.scene.fog = new Fog('#0B0445', 1, 95)
                    }}
                    >
                    <Suspense fallback={null}>
                        <PerspectiveCamera
                            makeDefault
                            position={[-1.72, 2.49, 21]}
                            rotation={[-0.18, -0.26, 0]}
                            fov={21}
                            />

                        {/* <AnimatedDirectionalLight castShadow /> */}
                        <directionalLight castShadow />
                        <ambientLight />
                        <Environment preset='sunset' />

                        <Scene_3 />
                    </Suspense>
                    <Controls />
                </Canvas>
                <Caption_3 />
            </m.div>
        </AnimatePresence>
    )
}

export default Experience