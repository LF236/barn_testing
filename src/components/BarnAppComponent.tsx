import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import barn_testing from '../assets/Barn_Testing.glb?url';
const Home = () => {
    const ref: any = useRef()
    const { nodes, materials } : any = useGLTF( barn_testing );
    useFrame((state) => {
		const t = state.clock.getElapsedTime()
		ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
		ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
	})
    console.log( nodes );
    console.log( nodes.LoftedBarn_6Wall_10x12_None_Wall1 )
    // console.log( materials );
    return(
        <group
            ref={ ref }
            // onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            // onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            // onPointerMissed={() => (state.current = null)}
        >   
			<mesh castShadow geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}  material={ nodes.LoftedBarn_6Wall_10x12_None_Wall1.material } />
            <mesh castShadow geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}  material={ nodes.LoftedBarn_6Wall_10x12_None_Wall2.material } />
			<mesh castShadow geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}  material={ nodes.LoftedBarn_6Wall_10x12_None_Wall3.material } />
			<mesh castShadow geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}  material={ nodes.LoftedBarn_6Wall_10x12_None_Wall4.material } />


        </group>
    )
}

const BarnAppComponent = () => {


    return (
        <>
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }} style={{ background: 'red', height: '100vh' }}>
                <ambientLight intensity={0.7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <pointLight position={[-10, -10, -10]} />

                <Home />
                <Environment preset="city" />
            </Canvas>
        </>
    );
}

export default BarnAppComponent;