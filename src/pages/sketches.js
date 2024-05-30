import React from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import drawing_1 from "../../public/images/sketches/drawing-1.png";
import drawing_2 from "../../public/images/sketches/drawing-2.png";
import drawing_3 from "../../public/images/sketches/drawing-3.png";
import drawing_4 from "../../public/images/sketches/drawing-4.png";
import drawing_5 from "../../public/images/sketches/drawing-5.png";
import drawing_7 from "../../public/images/sketches/drawing-6.png";
import name from "../../public/images/sketches/name2.png";
import TransitionEffect from '@/components/TransitionEffect';

const Sketches = () => {
  const images = [drawing_1, drawing_2, drawing_3, drawing_4, drawing_5, drawing_7];

  return (
    <>
      <Head>
        <title>Prasanna | Sketches Page</title>
        <meta name="description" content="Dive into a mesmerizing gallery of drawings by Prasanna, an engineering student from MIT Manipal, where each stroke tells a unique story. Explore an eclectic mix of illustrations, sketches, and artworks that showcase creativity, imagination, and artistic talent. Experience the beauty and depth of each drawing brought to life by a passionate artist, inviting you on a journey through the artistry of drawings." />
      </Head>
      <TransitionEffect/>
      <main>
        <Layout className='pt-16'>
          <AnimatedText text="Journey through my sketches" className='md:text-6xl xs:text-4xl md:mb-16' />
        </Layout>
      
        <div className=' h-auto flex justify-center items-center'>
          <Image src={name} alt='drawings' className='bg-light w-full ' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
        </div>

        {/* Grid for extra small and medium screens */}
        <div className="grid grid-cols-1 gap-4 p-5 md:p-16 xs:grid md:grid hidden">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image src={image} alt={`Drawing ${index + 1}`} width={300} height={300} layout="responsive" className="rounded-lg border border-solid border-dark dark:border-light" />
            </div>
          ))}
        </div>

        {/* Grid for other screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-5 md:p-16 xs:hidden md:hidden">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image src={image} alt={`Drawing ${index + 1}`} width={300} height={300} layout="responsive" className="rounded-lg border border-solid border-dark dark:border-light" />
            </div>
          ))}
        </div>
       
      </main>
    </>
  );
};

export default Sketches;
