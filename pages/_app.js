import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
