import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface InputProsp {
    type?: string,
    placeholder: string,
    Source: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export default function Input({ type = "text", placeholder, Source }: InputProsp) {

    return (
        <view className='border-2 mt-6 rounded-lg py-1 px-2 shadow-sm'>
            <text className='text-[14px] text-start text-[#8A8A8A] font-bold'>{placeholder}</text>
            <view className="flex flex-row gap-1 items-center">
                <Source color="black" size={24} strokeWidth={1.5} />
                <input className='text-black w-full p-0' type={type} />
            </view>
        </view>
    )

}