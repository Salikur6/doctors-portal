import React from 'react';

const Loading = () => {
    return <div className='flex justify-center items-center' style={{ height: 'calc(100vh - (64px))' }}>
        <div className="flex items-center justify-center ">
            <div className="w-24 h-24 border-l-4 border-gray-900 rounded-full animate-spin"></div>
        </div>
    </div>


    // return <div className='h-screen flex justify-center items-center'>
    //     <button className='btn loading '>
    //         <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

    //         </svg>
    //         Loading</button>
    // </div>

};

export default Loading;