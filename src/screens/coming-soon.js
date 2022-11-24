import React from 'react';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
    return (
        <div>
            <p className='display-h6'>Coming Soon</p>
            <Link to='/'>Goto Home</Link>
        </div>
    );
}