'use client'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  {
    name: 'David Smith',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Sydney, Australia',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  {
    name: 'David Smith',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Sydney, Australia',
  },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Gallery
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <div className="mt-20 block sm:hidden">
            <Swiper
              spaceBetween={16}
              slidesPerView={1.05}
              pagination={{ clickable: true }}
              style={{ paddingRight: '16px' }}
            >
              {people.map((person) => (
                <SwiperSlide key={person.name}>
                  <Image
                    alt=""
                    src={person.imageUrl}
                    width={400}
                    height={372}
                    className="aspect-14/13 w-full rounded-2xl object-cover"
                    unoptimized
                    loading="lazy"
                  />
                  <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-base/7 text-gray-300">{person.role}</p>
                  <p className="text-sm/6 text-gray-500">{person.location}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <ul
            role="list"
            className="mx-auto mt-20 grid hidden max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  alt=""
                  src={person.imageUrl}
                  width={400}
                  height={372}
                  className="aspect-14/13 w-full rounded-2xl object-cover"
                  unoptimized
                  loading="lazy"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-300">{person.role}</p>
                <p className="text-sm/6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}
