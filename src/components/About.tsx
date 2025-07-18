import { Container } from '@/components/Container'

export function About() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
      <Container className="relative">
            <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-base/7 font-semibold text-[#148A88]">
            About
          </h2>
               <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-gray-300 sm:text-6xl">
            About
          </p>
        <p className="mx-auto mt-6 max-w-2xl text-left text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            About me{' '}
          </p>
        </div>
      </Container>
    </section>
  )
}
