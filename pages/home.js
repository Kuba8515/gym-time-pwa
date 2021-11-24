import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home(props) {
  return (
    <Layout username={props.username}>
      <Head>
        <title>Home Page</title>
      </Head>
    </Layout>
  );
}
