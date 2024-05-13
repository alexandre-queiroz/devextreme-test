import Hero from './components/login/hero'
import Form from './components/login/form'

export default function Home() {
    return (
        <main className='bg-[#323232] h-screen flex flex-col md:justify-center md:items-center'>
            <div className="flex flex-col md:flex-row h-full md:h-[658px] md:w-[1080px]">
                <Hero />
                <Form />
            </div>
        </main>
    );
}