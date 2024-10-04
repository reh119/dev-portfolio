import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Menu } from 'lucide-react'

export default function PortfolioLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">RH</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#experience" className="hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-grow">
        <section id="about" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Hi, Im Rafael Hernandez</h2>
            <p className="text-xl mb-8">
              A passionate developer specializing in React and TypeScript
            </p>
            <Button>Download CV</Button>
          </div>
        </section>
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Work Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Frontend Developer',
                  company: 'Web Innovators',
                  period: 'Jun 2018 - Dec 2020',
                  description:
                    'Developed and maintained multiple client websites. Collaborated with designers to implement pixel-perfect UIs and ensure cross-browser compatibility.',
                },
              ].map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>
                      {job.company} | {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* here im going to link all projects to the github repo, and add a
        description of each project and the technologies used, also want to add
        a screenshot of each project and how it looks if possible */}
        <section id="projects" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((project) => (
                <Card key={project}>
                  <CardHeader>
                    <CardTitle>Project {project}</CardTitle>
                    <CardDescription>
                      A short description of the project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Technologies used: React, TypeScript, Tailwind CSS</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* here im gonna add some nice icons of each skill instead of just text */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'Node.js',
                'Git',
              ].map((skill) => (
                <div key={skill} className="bg-muted rounded-full px-4 py-2">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get in Touch
            </h2>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>
                  Fill out the form below to send me a message
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      here im gonna add links to my github, linkedin, and email, so people can
      reach me
      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <Button variant="ghost" size="icon">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
