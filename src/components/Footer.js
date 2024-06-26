import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
  <footer className='w-full border-t-2 border-solid border-dark
  font-medium text-lg dark:text-light dark:border-light sm:text-base'>
    <Layout className='py-5 flex items-center justify-between lg:flex-col lg:py-3'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center lg:py-2'>
        Built&nbsp;with&nbsp;<Link href="https://nextjs.org/" className='underline
        underline-offset-2'>Next.js</Link>
        </div>
        <Link href="mailto:prasannabhat345@gmail.com" target='_blank' className='underline
        underline-offset-2'>Say hello</Link>
    </Layout>
  </footer>
  )
}

export default Footer
