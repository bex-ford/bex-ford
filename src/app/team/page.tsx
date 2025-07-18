import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'

const people = [
  {
    name: 'JANE DOE',
    role: 'Template',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'JANE DOE',
    role: 'Template',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'JANE DOE',
    role: 'Template',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Template text. Template text. Template text. Template text.
              Template text. Template text. Template text. Template text.
              Template text.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  alt={person.name}
                  src={person.imageUrl}
                  width={224}
                  height={224}
                  className="mx-auto rounded-full"
                   loading="lazy"
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
                <ul
                  role="list"
                  className="mt-6 flex justify-center gap-x-6"
                ></ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}
