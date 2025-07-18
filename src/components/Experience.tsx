import { Container } from '@/components/Container'

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-base/7 font-semibold text-[#148A88]">
            Experience
          </h2>
               <p className="mt-2 text-2xl font-semibold tracking-tight text-balance text-gray-300 sm:text-6xl">
            Experience
          </p>
        <p className="mx-auto mt-6 max-w-2xl text-left text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Experience{' '}
          </p>
        </div>
      </Container>
    </section>
  )
}
