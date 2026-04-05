'use client'

/**
 * Small client island for the Account button.
 * Moving this out of the main Navbar prevents the entire header from being
 * part of the React hydration task, lowering 'Main-thread work' in Lighthouse.
 */
export default function AccountButton() {
  return (
    <button
      className="flex items-center justify-center p-2 rounded-full border border-outline-variant/30 text-on-surface hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
      aria-label="Account / Profile"
      onClick={() => console.log('Account clicked')}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
        account_circle
      </span>
    </button>
  )
}
