import React from 'react';

const LoadingScreen = ({show}) => {
    if (!show) return null;
    return (
        <div className="loading-screen">
            <div className="loader"></div>
        </div>
    );
};
export default LoadingScreen;