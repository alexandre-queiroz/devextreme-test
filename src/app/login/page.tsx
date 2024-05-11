import Image from 'next/image'
import backgroundImg from '../../../public/images/login.png';
import logo from '../../../public/logo_name.svg';
import LoginInput from '../components/input';
import { User, Eye, KeyRound } from 'lucide-react';

export default function Home() {
    return (
        <main className='bg-[#323232] h-screen flex flex-col md:justify-center md:items-center'>
            <div className="flex flex-col md:flex-row h-full md:h-[658px] md:w-[1080px]">
                <div className='relative md:w-[60%] h-full flex items-center justify-center'>
                    <Image
                        className='absolute top-0 left-0 w-full h-full'
                        src={backgroundImg}
                        objectFit="fill"
                        objectPosition="center"
                        alt="Background"
                    />
                    <div className='text-[16px] w-[80%] bg-black/50 backdrop-blur-sm p-3 mt-64 mb-16 md:mb-0 md:mt-80'>
                        <h1 className='font-semibold'>Título</h1>
                        <p className='mt-4 text-[12px] font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim odio dictum,
                            condimentum nunc sed, rhoncus lacus. Sed hendrerit lorem augue, ut tempus diam tincidunt at.
                            Curabitur enim erat, laoreet vehicula interdum ut, consequat quis erat.
                            Mauris quis aliquam dolor, et feugiat nisl. Aenean cursus pharetra arcu, non iaculis mi.
                            Curabitur efficitur, erat vitae vestibulum imperdiet, mauris ante commodo lectus,
                            et congue odio justo eget urna. Ut pellentesque ante sit amet lectus facilisis volutpat.
                        </p>
                    </div>
                </div>
                <div className="flex md:w-[40%] h-full md:items-center md:justify-center bg-white rounded-3xl md:rounded-none md:m-0 -mt-6 z-10">
                    <div className="flex flex-col w-full sm:h-[80%] mx-auto md:my-auto px-10">
                        <Image
                            className='w-full mt-6 md:m-0'
                            src={logo}
                            objectFit="cover"
                            objectPosition="center"
                            alt="Simpplify logo" />

                        <text className='text-black text-start font-medium mt-4 text-[16px]'>Faça login na sua conta</text>
                        <LoginInput Source={User} placeholder={"Usuário"} />
                        <LoginInput Source={Eye} placeholder={"Senha"} type='password' />
                        <LoginInput Source={KeyRound} placeholder={"Chave de acesso"} />
                        <input type='button' value='Entrar' className='bg-gradient-to-r from-[#006C3E] to-[#01A05C] mt-6 rounded-lg py-3 px-2 shadow-sm text-white font-bold' />
                        <text className='text-[#006C3E] text-end mt-1 mb-10'>Esqueceu sua senha?</text>
                    </div>
                </div>
            </div>
        </main>
    );
}