import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'Linux Administration', level: 90 },
  { name: 'Cloud Management (AWS)', level: 85 },
  { name: 'Automation Scripting', level: 80 },
  { name: 'Configuration Management', level: 75 },
  { name: 'Containerization', level: 85 },
  { name: 'Monitoring and Performance Tools', level: 80 },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-4">
            I'm Ajeet Gupta, a passionate Linux, Cloud and DevOps Engineer with nearly 3 years of experience in system administration and team leadership. I specialize in managing on-premise and cloud infrastructures, with a particular focus on VMware and AWS technologies.
          </p>
          <p className="mb-4">
            As a Senior System Executive and Team Lead at Cognizant, I directed the operations of a dedicated L1 Support Team, facilitating smooth operations and delivering exceptional service to clients.
          </p>
          <p className="mb-4">
            I hold a B.E. in Electronics and Instrumentation from Lakshmi Narain College of Technology, Bhopal (2019). I'm well versed in Linux, DevOps, and AWS Cloud, and I'm always eager to learn and adapt to new technologies in the ever-evolving world of cloud computing.
          </p>
          <Button asChild className="mt-4">
            <Link href="/documents/AjeetGupta_Resume.pdf" target="_blank" rel="noopener noreferrer">
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

