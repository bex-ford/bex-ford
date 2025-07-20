import { Container } from '@/components/Container'

export function About() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-12"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-left">
          <h2 className="text-base/7 font-semibold text-[#148A88]">About</h2>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
            I'm a software engineer with over two years of experience at <span className="text-gray-300 font-semibold">tombola</span>,
            where I began my journey into tech. Since starting my career, I’ve
            developed a strong foundation in software development, with a
            particular passion for front-end web development. <span className="text-gray-300 font-semibold">I love crafting
            intuitive, responsive user interfaces and bringing ideas to life
            through clean, maintainable code.</span> 
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
            Outside of work, you'll find me in
            the gym weight training, out on long walks or runs, or catching up
            with friends over coffee. I’m always seeking new challenges that
            allow me to grow both professionally and personally. This portfolio
            is a space where I showcase the projects I’ve built, the skills I’ve
            honed, and the creativity I bring to every piece of work. Whether
            it’s a personal project or something built for real-world users, <span className="text-gray-300 font-semibold">I
            take pride in delivering thoughtful, high-quality web experiences.</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
