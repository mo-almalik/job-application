import React from 'react';
import { Search ,MapPin} from 'lucide-react';
import assets from "../utils/assets.js";
const Hero = () => {
    return <>
        <header className={'my-8 mx-10 md:mx-auto'}>
            <div
                className={'flex flex-col md:flex-row md:justify-between items-center w-full container mx-auto min-h-[75vh]'}>
                <div className={'flex flex-col items-start justify-center gap-y-8 w-full '}>
                    <div>
                        <h1 className={'font-semibold  text-3xl md:text-2xl text-primary leading-10'}>
                           انطلق نحو نجاح أعمالك مع أفضل الكفاءات! </h1>
                        <p className={'text-gray-500 mt-4'}>
                            منصة   انطلاق    توفر لك أفضل الحلول لتوظيف الكفاءات في مختلف المجالات بسهولة وسرعة.
                        </p>
                    </div>
                    <div className={'border bg-gray-100 p-3 w-full rounded-md mb-5 md:mb-0'}>
                        <form className={'flex flex-col md:flex-row items-center w-full gap-2'}>
                            <div className={'w-full relative'}>
                                <Search size={18} className={'absolute top-4 left-2 text-primary'}/>
                                <input placeholder={'اسم الوظيفة.. '}
                                       className={'outline-none p-4 rounded-md text-sm w-full'}/>
                            </div>

                            <div className={'w-full relative'}>
                                <MapPin size={18} className={'absolute top-4 left-2 text-primary'}/>
                                <input placeholder={'اسم الوظيفة.. '}
                                       className={'outline-none p-4 rounded-md text-sm w-full'}/>
                            </div>
                            <button className={'bg-primary w-full md:w-1/3 p-3 rounded-md text-white'}>بحث</button>
                        </form>
                    </div>
                </div>

                <div className={'w-full'}>
                    <img src={assets.hero} className={'w-full mx-auto'} alt={'hero'}/>
                </div>
            </div>
        </header>
    </>
};

export default Hero;