import React from 'react'

const Header = (props) => {

    return (
        <div className='flex flex-row justify-between items-center ml-20 mr-20 pt-7'>
            <div className='text-white font-bold text-[30px]'>LOTR</div>
            <div className='flex gap-20'>
                <div className='text-white'>Current Score: {props.curScore}</div>
                <div className='text-white'>Best Score: {props.bestScore}</div>
            </div>
        </div>
    )
}

export default Header;


