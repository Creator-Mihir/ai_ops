import '../styles/globals.css' // This imports the Tailwind styles we made in Step 1

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}