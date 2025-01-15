import React from 'react';
import assets from "../utils/assets.js";

const Client = () => {
    return <>
    <div className={'my-8 md:my-0 p-3  container mx-auto'}>
      <div className={'grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 w-full bg-red-50 text-center border  rounded-md border-gray-200 mx-auto '}>
          <img src={assets.zoom} className={'w-12 h-12 grayscale opacity-55'}  alt={'zoom'}/>
          <img src={assets.intel} className={'w-12 h-12 grayscale opacity-55'} alt={'intel'}/>
          <img src={assets.nike} className={'w-12 h-12 grayscale opacity-55'} alt={'nike'}/>
          <img src={assets.discord} className={'w-12 h-12 grayscale opacity-55'} alt={'discord'}/>
          <img src={assets.oracle} className={'w-12 h-12 grayscale opacity-55'} alt={'oracle'}/>
          <img src={assets.adidas} className={'w-12 h-12 grayscale opacity-55'} alt={'oracle'}/>
          <img src={assets.samsung} className={'w-12 h-12 grayscale opacity-55'} alt={'samsung'}/>
      </div>
    </div>
    </>
};

export default Client;