import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>this is contact us page </title>
    </Head>
      <h1>First Post</h1>
      <h2>First Post for the contact us information</h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}