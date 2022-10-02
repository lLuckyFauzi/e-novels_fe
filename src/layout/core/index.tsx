import { AppProps } from 'next/app'
import React from 'react'

const LayoutDefault = (props: AppProps) => {
 const { Component, pageProps } = props
  return (
    <div>
        <Component {...pageProps} />
    </div>
  )
}

export default LayoutDefault