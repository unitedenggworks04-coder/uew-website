'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="text-6xl font-bold text-destructive mb-4">500</div>
        <h1 className="heading-2 mb-4">Something went wrong!</h1>
        <p className="text-body mb-8 max-w-md mx-auto">
          We're experiencing technical difficulties. Please try again later or 
          contact our support team if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn-primary flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link href="/" className="btn-outline flex items-center gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
