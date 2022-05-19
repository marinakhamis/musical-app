import React from 'react'
import DownloadAds from './DownloadAds.jsx'
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import backGraphics from '../img/backgraphics.png'

const Hero = () => {
    return (
        <div className="wrapper bg-[#081730] flex items-center
        justify-between px-[5rem] rounded-b-[5rem] w-[100%] 
        h-[35rem] relative ">
            <div className='headings flex flex-col items-start justify-center h-[100%] text-[3rem]'>
                <span>Experience The </span>{" "}
                <span><b> Best Quality Music </b></span>
                <span className='text-[15px] text-[#525d6e]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Voluptates, laboriosam um ad aliquid itaque aut minima!
                </span>

                <div>
                    <span className='text-[13px]'>
                        Download now on IOS and Android
                    </span>
                    <DownloadAds />
                </div>
            </div>

            <div className="images relative w-[50%]">
                <img
                    src={backGraphics}
                    alt=""
                    className='absolute top-[-8rem] left-[19rem]'
                />
                <img
                    src={p1}
                    alt=""
                    className='absolute top-[-15rem] h-[34rem] left-[13rem]'
                />
                <img
                    src={p2}
                    alt=""
                    className="absolute left-[235px] top-[94px] w-[175px]"

                />
                <img
                    src={p3}
                    alt=""
                    className='absolute w-[5rem] left-[13rem] top-[12rem]'
                />
                <img
                    src={p4}
                    alt=""
                    className='absolute w-[5rem] left-[12.5rem] top-[12rem]'
                />


            </div>
        </div>
    )
}

export default Hero