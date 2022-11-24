import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <div>
            <p className='display-h6'>Page Not Found</p>
            <Link to='/'>Goto Home</Link>
        </div>
    );
}