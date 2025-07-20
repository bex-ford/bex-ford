'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Header() {
  return (
<header className="bg-slate-900 py-6">
      <Container className="flex justify-end">
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
