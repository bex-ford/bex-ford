'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'


export function Header() {
  return (
<header className="bg-slate-900 py-6 flex justify-self-end">
      <Container>
          <Button
            href="/cv.pdf"
            color="teal"
            className="border-2 border-teal-200 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className="w-8 text-center">CV</span>
          </Button>
      </Container>
    </header>
  )
}
