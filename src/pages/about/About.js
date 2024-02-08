import { CheckIcon } from '@heroicons/react/20/solid';
import snackKids from "../../assets/img/boy-say-hello.jpg";

export default function About() {
  return (
    <div className="bg-secondary py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">
          Des achats simplifiés
        </h2>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img src={snackKids} className="h-50 w-50 rounded" alt="snack-kids" />
          </div>
          
          <div className="p-8 flex flex-col justify-between items-center sm:p-10 lg:flex-auto">

            <p class="mb-3 font-normal text-white dark:text-gray-400">
              Chez Logouter, il n'est pas nécessaire de se presser.
              Installez-vous confortablement, détendez-vous et faites des achats 
              comme bon vous semble.
            </p>


            <a href="#" class="w-full sm:w-auto bg-global mb-20 p-4 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:hover:bg-gray-400 dark:focus:ring-gray-400">
              <div class="text-left rtl:text-right">
                <div class="-mt-1 font-sans text-center text-sm font-semibold">
                  En savoir plus
                </div>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}
