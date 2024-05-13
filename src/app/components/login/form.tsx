"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { User, Eye, KeyRound } from 'lucide-react';
import logo from '../../../../public/logo_name.svg';
import LoginInput from '../../components/input';

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    user: string;
    password: string;
    acess_key: string;
};

export default function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = () => router.push('/table');

    return (
        <div className="flex md:w-[40%] h-full md:items-center md:justify-center bg-white rounded-t-3xl md:m-0 -mt-6 z-10 md:rounded-e-md md:rounded-l-none">
            <div className="flex flex-col w-full sm:h-[80%] mx-auto md:my-auto px-10">
                <div className='flex w-full justify-center'>
                    <Image
                        className='w-[80%] h-[80%] md:w-full object-cover object-center mt-6 md:m-0'
                        src={logo}
                        alt="Simpplify logo"
                    />
                </div>
                <span className='text-black text-start mt-2 font-medium text-[16px]'>Faça login na sua conta</span>
                <LoginInput Source={User} placeholder={"Usuário"} register={register} errors={errors} label='user' required />
                <LoginInput Source={Eye} placeholder={"Senha"} type='password' register={register} errors={errors} label='password' required />
                <LoginInput Source={KeyRound} placeholder={"Chave de acesso"} register={register} errors={errors} label='acess_key' required />
                <button onClick={handleSubmit(onSubmit)} className='bg-gradient-to-r from-[#006C3E] to-[#01A05C] mt-6 rounded-lg py-3 px-2 shadow-sm text-white font-bold'>
                    Entrar
                </button>
                <Link href="/reset-password" className='text-end mt-2 mb-4'>
                    <span className='text-[#006C3E]'>Esqueceu sua senha?</span>
                </Link>
            </div>
        </div>
    );
}
