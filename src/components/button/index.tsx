import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center gap-3 bg-brand text-dark-40 font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all ${className}`}>
      {children}
    </button>
  )
}