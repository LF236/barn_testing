import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import '../styles.scss';
import NavBarComponent from './NavBarComponent';
import BarnAppModel from './BarnAppModel';
import { BarnAppContext } from '../context/BarnAppContext';
import { OrbitControls } from '@react-three/drei';


const BarnAppComponent = () => {
    const [ faceSelected, setFaceSelected ] = useState( 1 );
    const [ positionX, setPositionX ] = useState( 3.8 );

    return (
        <BarnAppContext.Provider value={{ faceSelected, setFaceSelected, setPositionX, positionX }}>
            <div className='app'>
                <NavBarComponent />
                <Canvas camera={{ fov: 30, position: [10, 0, 20] }} className='canvas'>
                    <Suspense fallback={ null }>
                        <ambientLight />
                        <BarnAppModel />
                        <OrbitControls
                        enablePan={ true }
                        enableZoom={ true }
                        enableRotate={ true }
                        />
                    </Suspense>
                </Canvas>
            </div>
        </BarnAppContext.Provider>
    );
}

export default BarnAppComponent;