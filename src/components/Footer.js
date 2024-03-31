import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
  <footer className='w-full border-t-2 border-solid border-dark
  font-medium text-lg'>
    <Layout className='py-5 flex items-center justify-between '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
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
