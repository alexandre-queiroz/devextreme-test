
import { Tags, Bell, User, Settings } from "lucide-react";
import logo from "../../../public/logo.svg"
import Image from 'next/image'
import DataGridComponent from "../components/datagrid";

export default function Home() {
    return (
        <main className='bg-[#E9E9E9] h-screen flex flex-row'>
            <div className="flex flex-col gap-4 h-full w-[65px] bg-white items-center">
                <Image
                    className='object-cover object-center w-full mt-[10px] px-2'
                    width={50}
                    height={50}
                    src={logo}
                    alt="Simpplify logo"
                />
                <div className="flex flex-row w-[50px] h-[40px] -ml-[5px]">
                    <div className="border-l-[5px] border-[#006C3E] rounded-lg" > </div>
                    <Tags color="#444648" className="w-full h-full p-1" size={28} strokeWidth={1.8} />
                </div>

                <div className="flex flex-row w-[50px] h-[40px]">
                    <Settings color="#444648" className="w-full h-full p-1" size={28} strokeWidth={1.8} />
                </div>
            </div>
            <div className="flex flex-col w-full h-screen items-center">
                <div className='flex bg-gradient-to-r from-[#444648] to-[#656565] h-[65px] w-full items-center px-[50px] justify-between'>
                    <div className="flex flex-row gap-1">
                        <Tags />
                        <span className="text-[16px]" > {"Tags > Cadastro"} </span>
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="bg-white rounded-3xl p-[10px]">
                            <Bell color="#444648" />
                        </div>
                        <div className="bg-white rounded-3xl p-[10px]">
                            <User color="#444648" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[16px] font-bold" > {"Nome do Usuário"} </span>
                            <span className="text-[16px]" > {"Perfil"} </span>
                        </div>

                    </div>
                </div>

                <DataGridComponent />

            </div>

        </main>
    );
}
