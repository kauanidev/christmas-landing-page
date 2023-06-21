import { Button } from "../button"
import { Header } from "../header"

export const Hero = () => {
  return (
    <section className="w-full bg-brand-light pb-10 md:min-h-[636px]">
      <Header />
      <div className="container mx-auto flex items-center justify-center text-center md:text-left md:justify-between mt-6 md:mt-14">
        <div className="max-w-[444px]">
          <h1 className="text-3xl sm:text-[53px] sm:leading-[58px] font-semibold mb-4 sm:mb-6">Feliz Natal e Feliz Ano Novo!</h1>
          <p className="text-sm sm:text-base font-medium text-dark-20 mb-6 sm:mb-10">
            Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.
          </p>

          <Button className="w-full md:w-max">
            <img src="/icons/gift.svg" />
            Fazer uma doação
          </Button>
        </div>

        <img src="/hero-img.png" className="hidden md:block max-w-[400px] lg:max-w-[600px]" />
      </div>
    </section>
  )
}