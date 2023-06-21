const socials = [
  {
    href: 'https://twitter.com',
    name: 'twitter'
  },
  {
    href: 'https://youtube.com',
    name: 'youtube'
  },
  {
    href: 'https://linkedin.com',
    name: 'linkedin'
  },
  {
    href: 'https://instagram.com',
    name: 'instagram'
  },
  {
    href: 'https://facebook.com',
    name: 'facebook'
  }
]

export const Footer = () => {
  return (
    <footer className="container mx-auto flex items-center justify-center sm:justify-between py-6 sm:py-14">
      <img src="/logo.svg" alt="Logo" className="hidden sm:block" />

      <nav className="flex items-center gap-6 sm:gap-10">
        {socials.map(social => (
          <a key={social.name} href={social.href} target="_blank" className="w-7 h-7 sm:w-10 sm:h-10 bg-brand/10 rounded-full flex items-center justify-center">
            <img className="w-[65%] h-[65%]" src={`/icons/${social.name}.svg`} alt={`Link para ${social.name}`} />
          </a>
        ))}
      </nav>
    </footer>
  )
}