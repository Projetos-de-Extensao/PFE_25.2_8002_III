import React, { useState, useRef, useEffect } from 'react'

export default function CustomSelect({ value, onChange, options, placeholder = "Selecione..." }) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find(opt => opt.value === value)
  const displayText = selectedOption ? selectedOption.label : placeholder

  return (
    <div ref={selectRef} className="relative w-full">
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1e293b] text-gray-100 border border-slate-600 rounded-lg p-2.5 sm:p-3 pr-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-md cursor-pointer text-sm sm:text-base hover:bg-[#2c3346] transition-colors text-left"
      >
        {displayText}
      </button>

      {/* Dropdown Icon */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-[#1e293b] border border-slate-600 rounded-lg shadow-xl max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`px-3 py-3 cursor-pointer text-sm sm:text-base transition-colors ${
                value === option.value
                  ? 'bg-[#334155] text-yellow-400 font-medium'
                  : 'text-gray-100 hover:bg-[#2c3346]'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
