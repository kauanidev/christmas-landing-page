import { Button } from "../button"

export const Donation = () => {
  return (
    <section className="bg-brand-light py-10 md:py-[90px]">
      <div className="container mx-auto flex items-center text-center md:text-left justify-center md:justify-between">
        <img src="/donation-img.png" alt="Doação" className="hidden md:block max-w-[300px] lg:max-w-[400px]" />

        <div className="max-w-[450px]">
          <h1 className="text-3xl sm:text-[53px] sm:leading-[58px] font-semibold mb-4 sm:mb-6">
            Comemore com muito amor!
          </h1>
          <p className="text-sm sm:text-base font-medium text-dark-20 mb-6 sm:mb-10">
            Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal.
          </p>

          <Button className="w-full md:w-max">
            <img src="/icons/gift.svg" />
            Fazer doação
          </Button>
        </div>
      </div>
    </section>
  )
}