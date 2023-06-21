const LINKS = [
  'Início',
  'Acessórios',
  'Doação',
  'Contato'
]

export const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-between container mx-auto">
      <img className="max-w-[100px] sm:max-w-[170px]" src="/logo.svg" alt="Feliz Natal" />

      <nav className="hidden sm:flex items-center gap-12">
        {LINKS.map(link => (
          <a key={link} href="#" className="font-medium hover:text-brand transition-colors">{link}</a>
        ))}
      </nav>
      <img src="/icons/menu.svg" alt="Menu" className="block sm:hidden" />
    </header>
  )
}