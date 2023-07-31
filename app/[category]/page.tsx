import React from 'react'
import Image from 'next/image'

import Banner from '@/components/Banner'
import PageHead from '@/components/PageHead'

import BannerPic from "@/public/banners/Banners-02.png"

type Props = {}

const CategoryPage = (props: Props) => {
  return (
    <>
        <PageHead title='Page Title' />
        <section className='container my-24'>
          <Banner className='w-full aspect-[21/10]'>
            <Image src={BannerPic} alt="" fill  />
          </Banner>
        </section>
    </>
  )
}

export default CategoryPage;