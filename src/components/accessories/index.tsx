const accessories = [
  {
    image: 'gift.png',
    title: 'Presentes',
    description: 'Eles são os melhores presentes que existem.'
  },
  {
    image: 'decoration.png',
    title: 'Enfeites',
    description: 'Dê uma decoração.'
  },
  {
    image: 'candy.png',
    title: 'Doces',
    description: 'Aproveite os doces natalinos.'
  },
  {
    image: 'love.png',
    title: 'Muito amor',
    description: 'Aproveite os sentimentos que duram para sempre.'
  }
]

export const Accessories = () => {
  return (
    <section className="container mx-auto pt-12 pb-16 text-center">
      <div>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4">Acessórios</h2>
        <p className="text-sm sm:text-base text-dark-20 max-w-[477px] mx-auto">Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 lg:gap-32 mt-8">
        {accessories.map((accessory) => (
          <div key={accessory.title} className="flex flex-col items-center justify-center">
            <img className="max-w-[200px]" src={`/accessories/${accessory.image}`} alt={accessory.description} />
            <h5 className="font-medium text-xl mb-3">{accessory.title}</h5>
            <p className="font-medium text-dark-30">{accessory.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}