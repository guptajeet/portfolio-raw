import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Multi-Tier Web Application Deployment with Terraform',
    description: 'Automated deployment of a scalable multi-tier web application on AWS using Terraform, leveraging Free Tier resources.',
    technologies: ['Terraform', 'AWS', 'EC2', 'RDS', 'S3', 'Auto Scaling'],
    github: 'https://github.com/ajeetgupta/terraform-aws-webapp',
  },
  {
    title: 'Multi-Container Weather Dashboard Application',
    description: 'Flask-based web application providing current weather information using a multi-container setup with Podman/Docker Compose.',
    technologies: ['Flask', 'Podman', 'Docker', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/ajeetgupta/weather-dashboard',
  },
  {
    title: 'Automated Backup and Restore System',
    description: 'Bash-based solution for automating backups with incremental sync, compression, encryption, and remote transfers.',
    technologies: ['Bash', 'rsync', 'tar', 'GPG'],
    github: 'https://github.com/ajeetgupta/backup-restore-system',
  },
  {
    title: 'Linux Performance Monitoring Tool',
    description: 'Tool for logging system metrics and providing real-time monitoring with alerts using Grafana and Prometheus.',
    technologies: ['Bash', 'Grafana', 'Prometheus', 'Docker'],
    github: 'https://github.com/ajeetgupta/linux-performance-monitor',
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

