import snackKids from "../../assets/img/about.jpeg";

const stats = [
  { id: 1, name: 'Zéro Foule', value: '' },
  { id: 2, name: 'Zéro Attente', value: '' },
  { id: 3, name: 'Zéro Stress', value: '' },
];
  
export default function Service() {
    return (
      <div className="py-24 sm:py-32 bg-global" id="services">
        <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">
        Qui aurait cru que faire
          des courses pouvait
          être aussi simple ?
        </h2>

        <div className="mx-auto mt-16 flex items-center max-w-2xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img src={snackKids} className="h-50 w-50 rounded" alt="snack-kids" />
          </div>
          
          <div className="p-8 flex flex-col justify-between items-center sm:p-10 lg:flex-auto">
            <dl className="grid grid-rows-1 gap-x-8 gap-y-16 text-center lg:grid-rows-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-row gap-y-4">
                  <dt className="text-base leading-7 text-white sm:text-5xl">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

          </div>
          
        </div>
      </div>
    )
  }
  