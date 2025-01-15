'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

const commands = {
  help: 'Available commands: help, whoami, ls, pwd, clear',
  whoami: 'Ajeet - Linux & DevOps Engineer',
  ls: 'Documents  Projects  blog.md  resume.pdf',
  pwd: '/home/Ajeet',
}

export default function Terminal() {
  const [output, setOutput] = useState<string[]>(['Welcome to the interactive terminal! Type "help" for available commands.'])
  const [input, setInput] = useState('')

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedInput = input.trim().toLowerCase()
    setOutput(prev => [...prev, `$ ${input}`])
    
    if (trimmedInput in commands) {
      setOutput(prev => [...prev, commands[trimmedInput as keyof typeof commands]])
    } else if (trimmedInput === 'clear') {
      setOutput([])
    } else if (trimmedInput !== '') {
      setOutput(prev => [...prev, `Command not found: ${input}. Type "help" for available commands.`])
    }
    
    setInput('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Interactive Terminal</h1>
      <div className="bg-black text-green-500 p-4 rounded-lg">
        <ScrollArea className="h-[400px] mb-4">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </ScrollArea>
        <form onSubmit={handleCommand}>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none text-green-500 focus:ring-0"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  )
}

