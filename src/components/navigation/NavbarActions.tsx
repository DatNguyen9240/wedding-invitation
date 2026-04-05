'use client'

import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle'), { ssr: false })
const AccountButton = dynamic(() => import('@/components/navigation/AccountButton'), { ssr: false })

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-5">
      <ThemeToggle />
      <AccountButton />
    </div>
  )
}
