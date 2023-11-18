import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function App() {
    return (
        <>
            <div className="w-[100%] h-[180vh] from-[#0A5783] to-[#18A19A] bg-gradient-to-tr relative">
                <h1 className="text-[3rem] font-[600] font-mono text-[#fff] text-center py-7">Check your financial health</h1>
                <p className='w-[25%] text-[1rem] font-extralight text-[#fff] text-center mx-auto'>Use WeathoMeter to get a free report
                    card for your finances- within minutes! </p>
                <div className='mx-auto w-[30%] my-3 flex'>
                    <Link href={'/'} className='bg-[#FB7306] mx-auto px-6 py-3 rounded-3xl text-white font-semibold'>
                        Get Started
                    </Link>
                </div>
                <div className='w-[80%] flex mx-auto justify-center relative'>
                    <div className='w-[30%] flex flex-col mt-[4rem] ml-[4rem] align-middle'>
                        <div className='w-100 my-2 flex'>
                            <img src='./tick.png' alt='aaa' className='w-[30px] h-[30px] aspect-square'></img>
                            <div className='border-b-2 pb-6'>
                                <p className='text-[#fff] mx-2 font-semibold'>Expected Retirement Age</p>
                            </div>
                        </div>
                        <div className='w-100 my-2 flex'>
                            <img src='./tick.png' alt='aaa' className='w-[30px] h-[30px] aspect-square'></img>
                            <div className='border-b-2 pb-6'>
                                <p className='text-[#fff] mx-2 font-semibold'>Identify Mistakes</p>
                            </div>
                        </div>
                    </div>
                    <img src='./phone.png' className='absolute top-0 left-[35%] w-[40%]'></img>
                    <div className='w-[69%] flex flex-col mt-[4rem] align-bottom'>
                        <div className='ml-[50%]'>
                            <div className='w-100 my-2 flex'>
                                <img src='./tick.png' alt='aaa' className='w-[30px] h-[30px] aspect-square'></img>
                                <div className='border-b-2 pb-6'>
                                    <p className='text-[#fff] mx-2 font-semibold'>Personalised Road Map</p>
                                </div>
                            </div>
                            <div className='w-100 my-2 flex'>
                                <img src='./tick.png' alt='aaa' className='w-[30px] h-[30px] aspect-square'></img>
                                <div className='border-b-2 pb-6'>
                                    <p className='text-[#fff] mx-2 font-semibold'>Tips To Improve</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] mx-auto z-[10] mt-[50vh] relative'>
                    <h1 className='text-[40px] font-sans text-center text-white font-[700]'>How it works?</h1>
                    <img src='./toolbox.png' className='w-[100%] top-0 absolute mx-auto'></img>
                    <div className='w-[100%] text-center text-white mt-[30%] flex justify-between mx-auto'>
                        <p className='w-[32%]'>Answer few
                            questions</p>
                        <p className='w-[32%]'>Register using
                            phone and OTP</p>
                        <p className='w-[32%]'>Get report and
                            personal roadmap</p>
                    </div>
                <div className='mx-auto z-[10] w-[30%] my-5 flex'>
                    <Link href={'/'} className='bg-[#FB7306] mx-auto px-6 py-3 rounded-3xl text-white font-semibold'>
                        Get Started
                    </Link>
                </div>
                </div>
            </div>
            <img src='./Vector 1.png' className='w-[100vw] top-[70vh] absolute'></img>
        </>
    )
}