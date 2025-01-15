import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajeet Gupta - Linux & DevOps Engineer | Cloud Enthusiast',
  description: 'Professional portfolio of Ajeet Gupta, a Linux, DevOps, and Cloud Engineer showcasing projects, skills, and technical blog.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://v0-guptajeet.vercel.app/',
    site_name: 'Ajeet Gupta - Tech Portfolio',
    images: [
      {
        url: 'https://v0-guptajeet.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ajeet Gupta - Linux & DevOps Engineer',
      },
    ],
  },
  twitter: {
    handle: '@ajeetgupta',
    site: '@ajeetgupta',
    cardType: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

