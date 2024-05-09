import Head from 'next/head';
import DataGridComponent from './components/datagrid';

export default function Home() {
  return (
    <div>
      <main>
        <DataGridComponent />
      </main>
    </div>
  );
}
