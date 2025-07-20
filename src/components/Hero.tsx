import { Container } from '@/components/Container'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative h-80 w-full bg-slate-900 md:h-96">
      <Container className="text-left lg:pt-10">
        <h1 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tight text-pretty text-gray-200 sm:text-7xl">
          Bex Ford
        </h1>
        <h2 className="mx-auto mt-4 max-w-2xl text-left text-xl font-medium text-pretty text-[#148A88] sm:text-xl/8">
          Software Engineer
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
          I have a passion for clean design, creative code, and a love for all
          things fitness and coffee-fuelled adventures.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col items-start py-10 sm:justify-between">
          {' '}
          <div className="flex gap-x-6">
            <Link
              href="https://linkedin.com/in/bex-ford-40a9331b6"
              className="group"
              aria-label="Template on LinkedIn"
            >
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-[#148A88]"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.25 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.25c.41-.77 1.36-1.25 2.25-1.25 1.93 0 3.5 1.57 3.5 3.5v6.5z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/bex-ford"
              className="group"
              aria-label="Template on GitHub"
            >
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-[#148A88]"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/447824631398"
              className="group"
              aria-label="Template on WhatsApp"
            >
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-[#148A88]"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.991c-.002 5.455-4.437 9.89-9.893 9.89zm8.413-18.303A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.21 1.615 6.033L0 24l6.063-1.624a11.89 11.89 0 0 0 5.966 1.523h.005c6.554 0 11.989-5.435 11.991-12.086a11.86 11.86 0 0 0-3.497-8.435z" />
              </svg>
            </Link>
          </div>{' '}
        </div>
      </Container>
    </div>
  )
}
