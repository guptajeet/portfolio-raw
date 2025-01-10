import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Your Name. Hosted on{" "}
            <Link href="https://vercel.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Vercel
            </Link>
            . The source code is available on{" "}
            <Link href="https://github.com/yourusername/your-repo" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <LinkedInLogoIcon className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <TwitterLogoIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

