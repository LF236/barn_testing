import React, { useContext, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import barn_testing from '../assets/Barn_Testing.glb?url';
import { BarnAppContext } from '../context/BarnAppContext';
import { useFrame } from '@react-three/fiber';


const BarnAppModel = () => {
    const { faceSelected } = useContext( BarnAppContext );
    const { nodes, materials } : any = useGLTF( barn_testing );
    const myMesh: any = React.useRef();

    useFrame( ( { clock } ) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.y = a;        
    });

    return(
        <group { ...nodes.Scene } ref={ myMesh }>
            <group { ...nodes.LoftedBarn_6Wall_10x12_Fijos } >
                <mesh geometry={ nodes.Mesh.geometry } material-color='white'/>
                <mesh geometry={ nodes.Mesh_1.geometry } />
                <mesh geometry={ nodes.Mesh_2.geometry } material-color='white'/>
                <mesh geometry={ nodes.Mesh_3.geometry } material-color='white'/>
                <mesh geometry={ nodes.Mesh_4.geometry } material-color='white'/>
                <mesh geometry={ nodes.Mesh_5.geometry } material-color='white'/>
                <mesh geometry={ nodes.Mesh_6.geometry } material-color='white'/>
                <mesh geometry={ nodes.Mesh_7.geometry } material={ nodes.Mesh_7.material } material-color='white'/>
            </group>

            <group { ...nodes.LoftedBarn_6Wall_10x12_None }>
                <mesh geometry={ nodes.Mesh001.geometry } { ...nodes.Mesh001 }/>
                <mesh geometry={ nodes.Mesh001_1.geometry } { ...nodes.Mesh001_1 }/>
                <mesh geometry={ nodes.Mesh001_2.geometry } { ...nodes.Mesh001_2 } material-color='pink'/>

                
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry } material-color={ faceSelected === 1 ? 'red' : 'white' }/>
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry } material-color={ faceSelected === 2 ? 'blue' : 'white' }/>
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry } material-color={ faceSelected === 3 ? 'yellow' : 'white' }/>
                <mesh geometry={ nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry } material-color={ faceSelected === 4 ? 'green' : 'white' }/>
            </group>           
        </group>
    )
}

export default BarnAppModel;