import React from 'react'

const CallButton = () => {
  // Replace this number with the actual phone number for the clinic
  const phoneNumber = '+91 9330153855'

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center justify-end">
      <a
        href={`tel:${phoneNumber}`}
        className="group flex items-center justify-start bg-[#0F4C81] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-14 w-14 hover:w-44 overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#0F4C81]/50"
        aria-label="Call Clinic"
      >
        <div className="flex items-center justify-center min-w-[3.5rem] h-14 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span className="whitespace-nowrap font-bold pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {phoneNumber}
        </span>
      </a>
    </div>
  )
}

export default CallButton
