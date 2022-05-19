import React from 'react'
import appStore from '../img/app-store.png'
import gPlay from '../img/google-play.png'

const DownloadAds = () => {
    const downloadImgStyle = " border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
    return (
        <div className='downlaod'>
            <div className="download-images flex">
                <img
                    src={appStore}
                    alt="Download from app store"
                    className={downloadImgStyle +  ` mr-[2rem]`}
                />
                <img
                    src={gPlay}
                    alt="Download from google play"
                    className={downloadImgStyle}
                />
            </div>
        </div>
    )
}

export default DownloadAds