import { Container } from '@/components/Container'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative h-80 w-full bg-slate-900 md:h-96">
      <Container className="pt-20 pb-16 text-left lg:pt-32">
        <h1 className="mx-auto max-w-4xl text-pretty font-display text-5xl font-medium tracking-tight text-gray-200 sm:text-7xl">
          Bex Ford
        </h1>
        <h2 className="mx-auto mt-6 max-w-2xl text-left text-2xl font-medium text-pretty text-gray-400 sm:text-xl/8">
          Software Engineer
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-left text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Bex the builder!
        </p>

        <div className="items-left flex flex-col py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="#" className="group" aria-label="Template on LinkedIn">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.25 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.25c.41-.77 1.36-1.25 2.25-1.25 1.93 0 3.5 1.57 3.5 3.5v6.5z" />
              </svg>
            </Link>
            <Link href="#" className="group" aria-label="Template on GitHub">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
          </div>{' '}
        </div>
      </Container>
    </div>
  )
}
