import React, { useState } from 'react'
import type { NextPage } from 'next'
import Precidtion from '../../components/Prediction'
import dynamic from 'next/dynamic';

const SymbolOverviewNoSSR = dynamic(() => import("../../components/Chart"), { ssr: false });


type Props = {}


const Crypto: NextPage = (props: Props) => {
    // query if user already predicted crypto today 
    // const predicted =

    return (
        <div className='flex flex-col relative text-center 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {/* <h3 className='uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;Bitcoin
            </h3> */}
            <div className='absolute top-[5px]'>
                <SymbolOverviewNoSSR symbol='BTCUSD' />
            </div>
            <div className='absolute top-[320px] items-center justify-center'>
                <Precidtion
                    isCrypto={true}
                // Predicted={predicted}
                />
            </div>
        </div>
    )
}

export default Crypto