import React from 'react'
import musicLogo from '../img/MuzicLogo.png'
import CenterMenu from './CenterMenu'

const Header = () => {
    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"
    return (
        <div className='header bg-[#081730] flex
        items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]' >
            <img src={musicLogo} alt="logo" className='logo  w-[42px] h-[42px]' />
            <CenterMenu />
            <div className='buttons'>
                <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle} > Log in</button >
                <button className={buttonStyle + ` bg-[#232A4E]`} type="button">
                    Sign up
                </button>
            </div>

        </div>
    )
}

export default Header