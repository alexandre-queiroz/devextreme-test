export default function LoginInput() {

    return (
        <view className='border-2 mt-6 rounded-lg p-1 shadow-sm'>
            <text className='md:text-[10px] text-start text-[#8A8A8A] font-bold'>Usuário </text>
            <view className="flex flex-row">
                <text className="text-[#8A8A8A]">img</text>
            <input className='w-full p-3 md:p-0' type='text' />
            </view>
        </view>
    )

}