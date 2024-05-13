import DataGridComponent from '../components/datagrid';

export default function Home() {
  return (
    <main className='bg-[#f1f1f1] h-screen flex flex-col justify-center items-center text-center'>
      <div className='bg-white border w-[75%] max-h-[70%]'>
        <DataGridComponent />
      </div>

    </main>
  );
}
