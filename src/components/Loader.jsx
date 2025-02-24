import React from 'react';
import { useProgress, Html } from '@react-three/drei';
import './Loader.css';

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <div className="loader-container">
                <div className="loader-animation"></div>
                <div className="loader-bar">
                    <div className="loader-progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p>Loading... {Math.round(progress)}%</p>
            </div>
        </Html>
    );
};

export default Loader;