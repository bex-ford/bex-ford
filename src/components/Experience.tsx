import { Container } from '@/components/Container'

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="bg-slate-900 py-12 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-left">
          <h2 className="text-base/7 font-semibold text-[#148A88]">
            Experience
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-500 sm:text-xl/8">
            2023-Present
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
            I’ve been working at Tombola for over two years in my first role as
            a software developer, where I’ve gained hands-on experience building
            and maintaining a large-scale platform used by thousands of users.
            My day-to-day work involves collaborating with cross-functional
            teams and contributing to both front-end and back-end development. I
            primarily work with a tech stack that includes{' '}
            <span className="font-semibold text-gray-300">
              C# .NET on the backend and Vue.js, TypeScript, JavaScript, and CSS
              on the frontend.
            </span>{' '}
            This role has helped me grow my technical skills, problem-solving
            ability, and confidence in building reliable, user-friendly web
            applications.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
            I work within a durable{' '}
            <span className="font-semibold text-gray-300">Agile</span> team,
            where we focus on continuous delivery and iterative improvement. Our
            team is responsible for key areas of the site, including the
            homepage and game launch experience, where performance, usability,
            and stability are essential. We follow Agile ceremonies such as
            daily stand-ups, sprint planning, and retrospectives to keep work
            aligned and collaborative. This environment has helped me become a
            strong team player, adapt quickly to change, and consistently
            deliver high-quality features that have a real impact on the user
            experience.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-[#148A88] sm:text-xl/8">
            Tech Stack
          </p>
          <div className="justify-left mt-8 flex flex-wrap gap-4">
            {['C#', '.NET', 'CSS', 'Vue.js', 'JavaScript', 'TypeScript'].map(
              (tech) => (
                <span
                  key={tech}
                  className="inline-flex w-28 items-end justify-center rounded-full border-2"
                  style={{ borderColor: '#148A88', color: '#148A88' }}
                >
                  <span className="font-semibold">{tech}</span>
                </span>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
