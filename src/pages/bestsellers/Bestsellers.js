import picOne from "../../assets/img/tip.png";
import picTwo from "../../assets/img/restaurant-app.png";
import picThree from "../../assets/img/order-food.png";
import picFour from "../../assets/img/food-app.png";
import picFive from "../../assets/img/fast-delivery.png";

const datapics = [
    { id: 1, ownpic: picOne, name: 'Bonjour Soleil! Crème solaire SPF 35' },
    { id: 2, ownpic: picTwo, name: 'Savon Fraîcheur' },
    { id: 3, ownpic: picThree, name: 'Un gommage corporel agréable' },
    { id: 4, ownpic: picFour, name: 'Un pendentif brillant' },
    { id: 5, ownpic: picFive, name: 'Un short' },
];

const Bestsellers = () => {
    return (
    <div className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl pb-16 text-center font-bold tracking-tight text-white sm:text-4xl">
              ACHETEZ NOS BEST-SELLERS
          </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-5">
          {datapics.map((datapic) => (
            <div key={datapic.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">
                {datapic.name}
              </dt> 
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                <img
                    className="h-50 w-50 w-auto rounded logo-img"
                    src={datapic.ownpic}
                    alt=""
                />
              </dd>
            </div>
          ))}
        </dl>
        <div class="items-center justify-center pt-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a href="#" class="w-full sm:w-auto bg-global hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:hover:bg-gray-400 dark:focus:ring-gray-400">
                <i className="bx bxl-play-store"></i>
                <div class="text-left rtl:text-right">
                    <a href="https://play.google.com/store/apps?hl=fr&gl=US" class="-mt-1 font-sans text-sm text-white font-semibold">
                        Acheter
                    </a>
                </div>
            </a>
        </div>
      </div>
    </div>
    );
}

export default Bestsellers;