import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutDefault from '../src/layout/core'

function MyApp(props: AppProps) {
  const layout = LayoutDefault(props)
  return <>
    {
      layout
    }
  </>
}

export default MyApp
