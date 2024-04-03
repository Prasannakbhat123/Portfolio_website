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
import drawing_6 from "../../public/images/sketches/drawing-6.png";
import name from "../../public/images/sketches/name2.png";



const Sketches = () => {
  const images = [drawing_1, drawing_2, drawing_3, drawing_4, drawing_5, drawing_6];

  return (
    <>
      <Head>
        <title>Prasanna | Sketches Page</title>
        <meta name="description" content="About-myself" />
      </Head>
      <main>
        <Layout className='pt-16'>
          <AnimatedText text="Journey through my sketches" className='' />
        </Layout>

        <div className='w-full h-auto flex justify-center items-center'>
          <Image src={name}/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 md:p-16">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image src={image} alt={`Drawing ${index + 1}`} width={300} height={300} layout="responsive" className="rounded-lg" />
            </div>
          ))}
        </div>
       
      </main>
    </>
  );
};

export default Sketches;
