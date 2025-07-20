'use client'
import Nursery from '@/images/nursery.png'
import Roofing from '@/images/aaroofing.png'
import Car from '@/images/carkeymasters.png'
import Image from 'next/image'
import { Container } from './Container'

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="overflow-hidden bg-slate-900 py-12"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-left">
          <h2 className="text-base/7 font-semibold text-[#148A88]">Projects</h2>
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-300 sm:text-xl/8">
            <a
              href="https://www.carkeymasters.co.uk/"
              className="transition-colors hover:text-[#148A88] active:text-[#148A88]"
            >
              Car Key Masters
            </a>
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:items-start md:gap-8">
            <a
              href="https://www.carkeymasters.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/2"
            >
              <Image
                src={Car}
                alt="Car Key Masters"
                className="border-gray200 ml-0 w-54 rounded-lg border shadow-lg md:w-106"
              />
            </a>
            <p className="mt-6 text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8 md:mt-0 md:w-1/2">
              I developed a professional, easy-to-navigate website for Car Key
              Masters, a mobile auto locksmith service. The site highlights
              their key replacement, repair, and emergency call-out services,
              with a strong emphasis on trust and reliability. I ensured the
              design was clear and mobile-friendly, allowing users to quickly
              find information and get in touch, especially in urgent
              situations.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-start gap-4">
            {['Next.js', 'React', 'Tailwind', 'TypeScript', 'Vercel'].map(
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
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-300 sm:text-xl/8">
            <a
              href="https://www.schoolsoutnorthwest.co.uk/"
              className="transition-colors hover:text-[#148A88] active:text-[#148A88]"
            >
              Schools Out NorthWest
            </a>{' '}
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-8">
            <a
              href="https://www.schoolsoutnorthwest.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/2"
            >
              <Image
                src={Nursery}
                alt="Nursey"
                className="border-gray200 w-54 rounded-lg border shadow-lg md:w-106"
              />
            </a>
            <div className="mt-6 flex flex-col justify-center md:mt-0 md:w-1/2">
              <p className="text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
                I created a vibrant, family-friendly website for Schools Out
                Northwest, a childcare provider offering holiday clubs and
                after-school activities. The goal was to design an engaging and
                informative site that clearly communicates their services,
                locations, and booking information. I focused on accessibility,
                ease of navigation, and a playful design aesthetic to reflect
                the fun, energetic nature of their work with children.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-start gap-4">
            {['Next.js', 'React', 'Tailwind', 'TypeScript', 'Vercel'].map(
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
          <p className="mx-auto mt-6 max-w-2xl text-left text-base font-medium text-pretty text-gray-300 sm:text-xl/8">
            <a
              href="https://www.aaroofingspecialists.co.uk/"
              className="transition-colors hover:text-[#148A88] active:text-[#148A88]"
            >
              AA Roofing Specialists
            </a>
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-8">
            <a
              href="https://www.aaroofingspecialists.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/2"
            >
              <Image
                src={Roofing}
                alt="Roofing"
                className="border-gray200 w-54 md:w-106 rounded-lg border shadow-lg md:w-auto"
              />
            </a>
            <div className="mt-6 flex flex-col justify-center md:mt-0 md:w-1/2">
              <p className="text-left text-base font-medium text-pretty text-gray-400 sm:text-xl/8">
                I designed and built a clean, responsive website for AA Roofing,
                a local roofing company looking to establish a strong online
                presence. The site showcases their services, customer
                testimonials, and contact details in a simple, user-friendly
                layout. I focused on clear navigation, strong calls to action,
                and mobile optimisation to ensure the site is accessible and
                effective across all devices.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-start gap-4">
            {['Next.js', 'React', 'Tailwind', 'TypeScript', 'Vercel'].map(
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
