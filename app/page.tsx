import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Terminal from '@/components/Terminal'
/*import ParticleBackground from '@/components/ParticleBackground'*/

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="container flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mt-8">
            <div className="flex-1 mb-8 sm:mb-0 sm:mr-8">
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm Ajeet Gupta
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Linux & DevOps Engineer | Cloud Enthusiast
              </h2>
              <p className="text-xl mb-8">
                Passionate about automating infrastructure and optimizing cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button asChild>
                  <Link href="/projects">Explore My Projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </div>
              <div className="w-full max-w-md mx-auto">
                <Terminal />
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/ajeet-gupta.jpg"
                alt="Ajeet Gupta"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

