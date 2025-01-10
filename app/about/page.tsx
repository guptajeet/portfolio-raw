import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'Linux', level: 90 },
  { name: 'Docker', level: 85 },
  { name: 'Terraform', level: 80 },
  { name: 'AWS', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'Bash', level: 80 },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-4">
            I'm a passionate Linux and DevOps Engineer with over 5 years of experience in designing, implementing, and managing cloud infrastructure. My expertise lies in automating deployments, optimizing performance, and ensuring high availability of systems.
          </p>
          <p className="mb-4">
            I hold certifications in AWS, Docker, and Kubernetes, and I'm always eager to learn and adapt to new technologies in the ever-evolving world of cloud computing.
          </p>
          <Button asChild className="mt-4">
            <Link href="/YourName_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Link>
          </Button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

