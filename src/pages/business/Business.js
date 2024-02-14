import servicePic from "../../assets/img/service.jpeg";

const Business = () => {
    return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-6">
        
        <div className="mx-auto mt-10 flex items-center max-w-2xl sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img src={servicePic} className="h-50 w-50 rounded" alt="snack-kids" />
          </div>
          
          <div className="p-4 flex flex-col justify-between items-center sm:p-8 lg:flex-auto">
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                COMMERCANT ALIMENTAIRE
                AUGMENTEZ VOS PROFITS
            </h2>
            <p class="my-6 font-normal text-2xl text-gray-900 dark:text-gray-400">
                    Explorez notre gamme de produits et
                profitez de la qualité exceptionnelle de nos
                articles en faisant vos achats chez nous
                dès aujourd'hui.
            </p>


            <a href="#" class="w-full sm:w-auto bg-global mb-20 p-4 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:hover:bg-gray-400 dark:focus:ring-gray-400">
              <div class="text-left rtl:text-right">
                <a href="/aboutContact" class="-mt-1 font-sans text-center text-sm font-semibold">
                    CONTACTEZ-NOUS
                </a>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
    );
}

export default Business;
