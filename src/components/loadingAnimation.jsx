import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const LoadingAnimation = () => {
    const {isLoading, setIsLoading} = useContext(GlobalContext);
    
    return (
        <div>
        {isLoading ? (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
            </div>
        ) : null}
        </div>
    );
};

export default LoadingAnimation;