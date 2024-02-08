const stats = [


  { id: 1, name: 'Foule', value: '0%' },
  { id: 2, name: 'Attente', value: '0%' },
  { id: 3, name: 'Livraison', value: '100%' },
]
  
export default function Service() {
    return (
      <div className="py-24 sm:py-32 bg-global" id="services">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
          Professionnel
        </h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  