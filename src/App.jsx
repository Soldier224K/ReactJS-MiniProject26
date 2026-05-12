import React from 'react'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--color-canvas)]">
      <div className="w-full max-w-[600px]">
        {/* BMW M Stripe Divider as a visual anchor */}
        <div className="h-1 w-full flex mb-12">
          <div className="flex-1 bg-[var(--color-m-blue-light)]"></div>
          <div className="flex-1 bg-[var(--color-m-blue-dark)]"></div>
          <div className="flex-1 bg-[var(--color-m-red)]"></div>
        </div>

        <header className="mb-12">
          <img src="/image.png" alt="Brand Logo" className="h-16 w-auto mb-6 object-contain" />
          <h1 className="text-[40px] leading-[1.1] font-bold text-[var(--color-on-dark)] uppercase mb-4 tracking-tight">
            P@55W0Rd G9&9R6T0R
          </h1>
          <p className="text-[var(--color-body)] text-[16px] font-light">
            Engineered precision. Unbreakable security.
          </p>
        </header>
        
        <PasswordGenerator />
      </div>
    </div>
  )
}

export default App
