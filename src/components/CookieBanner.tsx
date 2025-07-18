'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import Link from 'next/link'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)consent=([^;]*)/)
    const consent = match ? match[1] : undefined

    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'true') {
      setConsentGiven(true)
    }
  }, [])

  const handleAccept = () => {
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `consent=true; expires=${expires.toUTCString()}; path=/`
    setConsentGiven(true)
    setShowBanner(false)
  }

  const handleDecline = () => {
    document.cookie = 'consent=false; expires=365'
    setConsentGiven(false)
    setShowBanner(false)
  }

  return (
    <>
      {showBanner && (
        <>
          <div className="fixed inset-0 z-[999998] bg-black/60"></div>
          <div className="fixed top-1/2 left-1/2 z-[999999] flex w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-between rounded-lg bg-slate-800 p-6 text-center text-white shadow-lg">
            <p>
              We use{' '}
              <Link
                href="/cookies"
                className="underline hover:text-gray-300"
                onClick={() => setShowBanner(false)}
              >
                cookies
              </Link>{' '}
              to improve your experience.
            </p>
            <div className="mt-4 flex gap-4">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="border-white-500 text-white hover:bg-blue-500 hover:text-white"
              >
                Decline
              </Button>
              <Button
                variant="outline"
                onClick={handleAccept}
                className="border-white-500 text-white hover:bg-blue-500 hover:text-white"
              >
                Allow Cookies
              </Button>
            </div>
          </div>
        </>
      )}

      {consentGiven}
    </>
  )
}

export default CookieBanner
