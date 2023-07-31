import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

// Just need to use Next Image tag as children

const Banner = ({children, className}: Props) => {
  return (
    <div className={`relative  ${className}`}>
        {children}
    </div>
  )
}

export default Banner