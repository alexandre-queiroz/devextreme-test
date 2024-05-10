import Image from 'next/image'
import backgroundImg from '../../../public/images/login.png';
import logo from '../../../public/logo_name.svg';
import LoginInput from '../components/input';

export default function Home() {
    return (
        <main className='bg-[#323232] h-screen flex flex-col md:justify-center md:items-center text-center'>
            <div className="flex flex-col md:flex-row h-full md:h-[60%] md:w-[60%]">
                <div className='flex md:w-[60%] h-full'>
                    <Image
                        className='h-full'
                        src={backgroundImg}
                        objectFit="fill"
                        objectPosition="center"
                        alt="Background"
                    />
                </div>

                <div className="flex md:w-[40%] h-full md:items-center md:justify-center bg-white rounded-lg md:rounded-none md:m-0 -mt-6">
                    <div className="flex flex-col w-full sm:h-[80%] mx-auto md:my-auto px-10">
                        <Image
                            className='w-full mt-6 md:m-0'
                            src={logo}
                            objectFit="cover"
                            objectPosition="center"
                            alt="Simpplify logo" />
                        <text className='text-black text-start font-medium text-[24px] md:text-[12px]'>Faça login na sua conta</text>
                        <LoginInput />
                        <LoginInput />
                        <LoginInput />
                        
                    </div>
                </div>
            </div>
        </main>
    );
}