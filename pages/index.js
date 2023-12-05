import { Pricing } from '@/components/Pricing';
import Hero from './../components/Hero';
import Feature from '@/components/Feature';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | SMK JP 1</title>
      </Head>
      <Hero />
      <Feature />
      <Pricing />
    </>
  );
}
