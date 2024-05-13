import Image from 'next/image'
import backgroundImg from '../../../../public/images/login2.png';

export default function Hero() {

    return (
        <div className='relative md:w-[60%] h-full flex items-center justify-center'>
            <Image
                className='absolute object-cover object-top top-0 left-0 w-full h-full rounded-l-md'
                src={backgroundImg}
                fill
                alt="Background"
            />
            <div className='text-[16px] w-[80%] bg-black/50 backdrop-blur-sm p-3 mt-64 mb-16 md:mb-0 md:mt-80 z-10 hidden md:block'>
                <h1 className='font-semibold text-white'>Título</h1>
                <p className='mt-4 text-[12px] font-light text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim odio dictum,
                    condimentum nunc sed, rhoncus lacus. Sed hendrerit lorem augue, ut tempus diam tincidunt at.
                    Curabitur enim erat, laoreet vehicula interdum ut, consequat quis erat.
                    Mauris quis aliquam dolor, et feugiat nisl. Aenean cursus pharetra arcu, non iaculis mi.
                    Curabitur efficitur, erat vitae vestibulum imperdiet, mauris ante commodo lectus,
                    et congue odio justo eget urna. Ut pellentesque ante sit amet lectus facilisis volutpat.
                </p>
            </div>
        </div>
    )

}