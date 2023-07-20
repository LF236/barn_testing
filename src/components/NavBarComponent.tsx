import React, { useContext } from 'react';
import { BarnAppContext } from '../context/BarnAppContext';
import { faces } from '../helpers/faces';

const NavBarComponent = () => {
    const { faceSelected, setFaceSelected, setPositionX } = useContext( BarnAppContext );

    const handleChangeFaceAndPosition = ( ele: any ) => {
        setFaceSelected( ele.key );
        setPositionX( ele.positionX );
    }
    return (
        <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
            <div className='container'>
                <div className='navbar-header'>
                    Barn Testing App
                </div>

                <div className='nav-bar-list-items'>
                    <ul className='nav navbar-nav'>
                        { faces.map( ele => (
                            <li onClick={ () => handleChangeFaceAndPosition( ele ) }>
                                <a href='#about' className={ `scroll ${ ele.key === faceSelected ? 'active': '' }` } >
                                    { ele.name }
                                </a>
                            </li>
                        ) ) }                    
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBarComponent;