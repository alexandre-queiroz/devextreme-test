import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    label: Path<T>,
    register: UseFormRegister<T>,
    required?: boolean,
    errors: FieldErrors<T>,
    type?: string,
    placeholder: string,
    Source: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export default function Input<T extends FieldValues>({ type = "text", placeholder, Source, register, label, required = false, errors }: InputProps<T>) {

    return (
        <>
            <div className={`border-2 mt-6 rounded-lg py-1 px-2 shadow-sm ${errors?.[label] ? "border-red-500" : null}`}>
                <span className='text-[14px] text-start text-[#8A8A8A] font-bold'>{placeholder}</span>
                <div className="flex flex-row gap-1 items-center">
                    <Source color="black" size={24} strokeWidth={1.5} />
                    <input className='text-black w-full p-0' type={type} {...register(label, { required })} />
                </div>
            </div>
        </>
    );
}
