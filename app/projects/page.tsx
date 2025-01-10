import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'AWS Auto-Scaling Infrastructure',
    description: 'Designed and implemented a highly available and scalable infrastructure on AWS using Terraform.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Ansible'],
    github: 'https://github.com/yourusername/aws-auto-scaling',
    demo: 'https://example.com/aws-demo',
  },
  {
    title: 'Kubernetes Monitoring Stack',
    description: 'Set up a comprehensive monitoring solution for Kubernetes clusters using Prometheus and Grafana.',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm'],
    github: 'https://github.com/yourusername/k8s-monitoring',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Developed a robust CI/CD pipeline using Jenkins, Docker, and Kubernetes for automated testing and deployment.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Groovy'],
    github: 'https://github.com/yourusername/cicd-automation',
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
              {project.demo && (
                <Button asChild>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

