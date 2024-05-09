import Head from 'next/head';
import DataGridComponent from './components/datagrid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1>Welcome to My Next.js Application</h1>
        <DataGridComponent />
      </main>
    </div>
  );
}
