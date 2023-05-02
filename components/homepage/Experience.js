import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, View, Html, OrbitControls } from '@react-three/drei'
import Homepage from './Homepage'
import Caption_1 from './scene_1/Caption_1'

const Border = () => {
    const borderStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '1px solid black',
        boxSizing: 'border-box'
    }

    return <div style={borderStyle}></div>
}

const Experience = () => {

    const ref = useRef()
    const view1 = useRef()
    const view2 = useRef()
    const view3 = useRef()

    return (
        <>
            <div ref={ref} className='container'>
                <div className="view_1" ref={view1} />
                <div className="view_2" ref={view2} />
                <div className="view_3" ref={view3} />

                <Canvas eventSource={ref} className='canvas' >

                    {/* ----- Scene 1 ----- */}
                    <View index={1} track={view1}>
                        <color attach="background" args={['#998EF8']} />
                        <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={35} />
                        <pointLight castShadow position={[10, 10, 10]} />
                        <Homepage />
                        <Caption_1 />
                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>
                    </View>

                    {/* ----- Scene 2 ----- */}
                    <View index={2} track={view2}>
                        <color attach="background" args={['#9A96C0']} />
                        <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={35} />
                        <pointLight castShadow position={[10, 10, 10]} />
                        <Homepage />
                        <Html fullscreen className='inner'/>
                        <Html fullscreen className='outer'/>
                    </View>

                    {/* ----- Scene 3 ----- */}
                    {/* <View index={3} track={view3}>
                        <color attach="background" args={['#629FF5']} />
                        <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={35} />
                        <pointLight castShadow position={[10, 10, 10]} />
                        <Homepage />
                        <Html fullscreen>
                            <Border />
                        </Html>
                    </View> */}
                </Canvas>
            </div>

            <div className='container_2'>
                {/* ----- Scene 3 ----- */}
                <Canvas className='canvas_2'>
                    <color attach="background" args={['#629FF5']} />
                    <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={35} />
                    <pointLight castShadow position={[10, 10, 10]} />
                    <Homepage />
                    <Html fullscreen className='inner'/>
                    <Html fullscreen className='outer'/>
                    <OrbitControls />
                </Canvas>
            </div>
        </>
    )
}

export default Experience