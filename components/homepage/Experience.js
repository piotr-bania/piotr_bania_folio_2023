import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, View, Html, OrbitControls } from '@react-three/drei'
import { Fog } from 'three'

import Scene_1 from './scenes/Scene_1'
import Caption_1 from './captions/Caption_1'
import Scene_2 from './scenes/Scene_2'
import Caption_2 from './captions/Caption_2'
import Scene_3 from './scenes/Scene_3'
import Caption_3 from './captions/Caption_3'
import Controls from '../Controls'

const Experience = () => {

    return (
        <>
            <div className='scene_1'>
                <Canvas className='canvas'
                    onCreated={(state) => {
                        state.gl.setClearColor('#696969')
                        state.scene.fog = new Fog('#262837', 1, 45)
                    }}
                >
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 10, 45]} fov={45} />

                        <pointLight castShadow position={[10, 10, 10]} />

                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>

                        <Scene_1 />
                        <Caption_1 />
                    </Suspense>
                    
                    <OrbitControls
                        rotateSpeed={0.25}
                        enablePan={false}
                        minPolarAngle={Math.PI / 20}
                        maxPolarAngle={Math.PI / 2.25}
                        minDistance={5}
                        maxDistance={20}
                        enableDamping={true}
                        dampingFactor={0.1}
                    />
                </Canvas>
            </div>

            <div className='scene_2'>
                <Canvas className='canvas'>
                    <Suspense fallback={null}>
                        <color attach="background" args={['#F3F3F3']} />
                        
                        <PerspectiveCamera makeDefault position={[0, 0, 45]} fov={45} />

                        <pointLight castShadow position={[10, 10, 10]} />

                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>

                        <Scene_2 />
                        <Caption_2 />
                    </Suspense>

                    <OrbitControls  />
                </Canvas>
            </div>

            <div className='scene_3'>
                <Canvas className='canvas'>
                    <Suspense fallback={null}>
                        <color attach="background" args={['#EDEDED']} />
                        
                        <PerspectiveCamera makeDefault position={[0, 0, 55]} fov={55} />

                        <pointLight castShadow position={[10, 10, 10]} />

                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>

                        <Scene_3 />
                        <Caption_3 />
                    </Suspense>

                    <OrbitControls enablePan={false} />
                </Canvas>
            </div>
        </>
    )
}

export default Experience