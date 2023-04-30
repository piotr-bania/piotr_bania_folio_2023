import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, View } from '@react-three/drei'
import Homepage from './Homepage'
import Controls from '../Controls'

const Experience = () => {

    const ref = useRef()
    const view1 = useRef()
    const view2 = useRef()

    return (
        <>
            <div ref={ref} className='container' >
                <div className="view1" ref={view1} />
                <div className="view2" ref={view2} />

                <Canvas eventSource={ref} className='canvas' >

                    <View index={1} track={view1} className='view_1' >
                        <color attach="background" args={['#f0f0f0']} />
                        <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={25} />
                        <Homepage />
                    </View>

                    <View index={2} track={view2} className='view_2' >
                        <color attach="background" args={['#ffffff']} />
                        <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={25} />
                        <Homepage />
                    </View>
                    
                    <Controls />
                </Canvas>
            </div>
        </>
    )
}

export default Experience