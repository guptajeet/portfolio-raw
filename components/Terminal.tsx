'use client'

import { useState, useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

const commands = {
  help: 'Available commands: help, whoami, skills, projects, contact',
  whoami: 'Your Name - Linux & DevOps Engineer | Cloud Enthusiast',
  skills: 'Linux, Docker, Kubernetes, AWS, Terraform, Python, Bash',
  projects: 'Check out my projects page for a list of my work!',
  contact: 'Email: your.email@example.com | Location: Pune, India',
}

export default function Terminal() {
  const [output, setOutput] = useState<string[]>(['Welcome! Type "help" for available commands.'])
  const [input, setInput] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 500)
    return () => clearInterval(timer)
  }, [])

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedInput = input.trim().toLowerCase()
    setOutput((prev) => [...prev, `$ ${input}`])

    if (trimmedInput in commands) {
      setOutput((prev) => [...prev, commands[trimmedInput as keyof typeof commands]])
    } else if (trimmedInput === 'clear') {
      setOutput([])
    } else if (trimmedInput !== '') {
      setOutput((prev) => [...prev, `Command not found: ${input}. Type "help" for available commands.`])
    }

    setInput('')
  }

  return (
    <div className="bg-gray-900 text-green-500 p-4 rounded-lg font-mono text-sm">
      <ScrollArea className="h-[200px] mb-4">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </ScrollArea>
      <form onSubmit={handleCommand} className="flex items-center">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none text-green-500 focus:ring-0 flex-grow"
          placeholder="Type a command..."
        />
        <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▋</span>
      </form>
    </div>
  )
}

