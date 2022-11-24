import React from 'react';
import {loaderGif} from '../../assets';

export default function SplashScreen() {
    return (
        <div className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100vh' }}
        >
            <img src={loaderGif} alt=''/>
        </div>
    );
}