import React from 'react'

type Props = {
    title: string
    className?: string
}

const PageHead = ({title, className}: Props) => {
    return (
    <section className={`flex flex-col items-center justify-center gap-4 w-full h-96 bg-[#434343] ${className}`}>
      <h2 className='text-6xl font-bold text-white'>{title}</h2>
        <p className='text-[#d9121f] font-bold'>
            Home - Shop - Category
        </p>
    </section>
  )
}

export default PageHead