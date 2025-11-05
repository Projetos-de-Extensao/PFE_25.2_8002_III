import React from 'react'

export default function PageContainer({ children }){
  return (
    <div className="w-full max-w-6xl px-4 mx-auto mobile-stack overflow-x-hidden">
      {children}
    </div>
  )
}
