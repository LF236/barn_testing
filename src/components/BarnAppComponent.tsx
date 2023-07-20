import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../styles.scss';
import barn_testing from '../assets/Barn_Testing.glb?url';

const Modal = ( { ...props } ) => {
    const group = useRef();
    const { nodes, materials } = useGLTF( barn_testing );

    console.log( nodes );
    console.log( materials );

    console.log( nodes.LoftedBarn_6Wall_10x12_None_Wall1 )

    return(
        <group
            { ...nodes.Scene }
        >
            <group { ...nodes.LoftedBarn_6Wall_10x12_None }>
                <mesh geometry={ nodes.Mesh001.geometry } material={ nodes.Mesh001.material }/>
                <mesh geometry={ nodes.Mesh001_1.geometry } material={ nodes.Mesh001_1.material }/>
                <mesh geometry={ nodes.Mesh001_2.geometry } material={ nodes.Mesh001_2.material }/>

                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall1.material }/>
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall2.material }/>
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall3.material }/>
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall4.material }/>
            </group>

            <group { ...nodes.LoftedBarn_6Wall_10x12_Fijos } >
                <mesh geometry={ nodes.Mesh.geometry } material={ nodes.Mesh.material }/>
                <mesh geometry={ nodes.Mesh_1.geometry } material={ nodes.Mesh_1.material }/>
                <mesh geometry={ nodes.Mesh_2.geometry } material={ nodes.Mesh_2.material }/>
                <mesh geometry={ nodes.Mesh_3.geometry } material={ nodes.Mesh_3.material }/>
                <mesh geometry={ nodes.Mesh_4.geometry } material={ nodes.Mesh_4.material }/>
                <mesh geometry={ nodes.Mesh_5.geometry } material={ nodes.Mesh_5.material }/>
                <mesh geometry={ nodes.Mesh_6.geometry } material={ nodes.Mesh_6.material }/>
                <mesh geometry={ nodes.Mesh_7.geometry } material={ nodes.Mesh_7.material }/>
            </group>

        </group>
    )
    return(
        <group { ...nodes.LoftedBarn_6Wall_10x12_None }>
            <mesh geometry={ nodes.Mesh001.geometry } material={ nodes.Mesh001.material }/>
            <mesh geometry={ nodes.Mesh001_1.geometry } material={ nodes.Mesh001_1.material }/>
            <mesh geometry={ nodes.Mesh001_2.geometry } material={ nodes.Mesh001_2.material }/>

            <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall1.material }/>
            <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall2.material }/>
            <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall3.material }/>
            <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry } material={ nodes.LoftedBarn_6Wall_10x12_None_Wall4.material }/>
        </group>
    );


    return(
        <group { ...nodes.LoftedBarn_6Wall_10x12_Fijos } >
            <mesh geometry={ nodes.Mesh.geometry } material={ nodes.Mesh.material }/>
            <mesh geometry={ nodes.Mesh_1.geometry } material={ nodes.Mesh_1.material }/>
            <mesh geometry={ nodes.Mesh_2.geometry } material={ nodes.Mesh_2.material }/>
            <mesh geometry={ nodes.Mesh_3.geometry } material={ nodes.Mesh_3.material }/>
            <mesh geometry={ nodes.Mesh_4.geometry } material={ nodes.Mesh_4.material }/>
            <mesh geometry={ nodes.Mesh_5.geometry } material={ nodes.Mesh_5.material }/>
            <mesh geometry={ nodes.Mesh_6.geometry } material={ nodes.Mesh_6.material }/>
            <mesh geometry={ nodes.Mesh_7.geometry } material={ nodes.Mesh_7.material }/>
        </group>
    )
}

const BarnAppComponent = () => {
    const ref = useRef();
    return (
        <div className='app'>
            <Canvas>
                <Suspense fallback={ null }>
                    <ambientLight />
                    <spotLight
                        intensity={ 0.9 }
                        angle={ 0.1 }
                        penumbra={ 1 }
                        position={ [ 10,15,10 ] }
                        castShadow
                    />
                    <Modal />
                    {/* <mesh ref={ ref }>
                        <boxGeometry attach='geometry' args={[ 2,3,2 ]}/>
                    </mesh> */}
                    <OrbitControls
                        enablePan={ true }
                        enableZoom={ true }
                        enableRotate={ true }
                    />
                </Suspense>
                
            </Canvas>
        </div>
    );
}

export default BarnAppComponent;