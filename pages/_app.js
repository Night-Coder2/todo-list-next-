import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (<div className="h-screen bg-grey-900 text-grey-100">
    <Component {...pageProps} />
  </div>)
}

export default MyApp
