import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Navbar from "../../components/navbar/Navbar";
import Footers from '../footers/Footers';
import '../../assets/css/App.css';

import snackKidsDetail from "../../assets/img/boy-say-hello.jpg";

const features = [
    {
      name: 'Des goûters  gourmands',
      description:
        "Nous croyons qu'un goûter peut être à la fois délicieux et  un temps de partage. C'est pourquoi nous travaillons avec des fournisseurs de confiance pour vous offrir une sélection de produits de qualité. De délicieux gâteaux , aux  jus de fruits  en passant par les biscuits , vous trouverez chez nous des options pour combler toutes les envies de vos enfants.",
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Une sélection rigoureuse',
      description: "Nous savons que chaque famille a ses propres préférences . C'est pourquoi nous nous efforçons de proposer une gamme variée de produits. Notre équipe veille à ce que chaque produit réponde à nos critères de qualité stricts, afin que vous puissiez faire vos achats en toute confiance.",
      icon: LockClosedIcon,
    },
    {
      name: 'Une expérience client exceptionnelle',
      description: "Chez Logouter , nous mettons un point d'honneur à offrir à nos clients une expérience d'achat agréable et sans tracas. ",
      icon: ServerIcon,
    },
  ];

export default function DetailAbout() {
    return (
        <div className="bg-global relative">
            <Navbar />

            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bienvenue chez  Logouter !</p>
                                <div className='relative overscroll-y-auto'>
                                    <p className="h-15 mt-6 text-lg text-left leading-8 text-white">
                                        Chez Logouter , nous croyons que chaque enfant mérite des goûters délicieux et amusants. Nous sommes passionnés par la création d'une expérience de goûter qui stimule les papilles, nourrit l'esprit et ravit les petits et les grands.
                                    Fondée par  3 rêveurs en  2023, notre épicerie est née de la volonté de fournir aux familles des options de goûter de qualité, conçues spécialement pour les enfants à des prix accessibles . C'est pourquoi nous nous engageons à sélectionner soigneusement chaque produit que nous proposons.
                                    Nous estimons  que les moments de partage en famille sont souvent parmi les expériences les plus significatives et enrichissantes de la vie. Ces moments permettent de renforcer les liens affectifs, de créer des souvenirs précieux et de nourrir un sentiment de sécurité et de soutien mutuel au sein de la famille
                                    A travers  notre épicerie nous souhaitons faciliter le quotidien des parents  afin qu’il puisse avoir du temps pour des moments en famille. Chez LeGoûter , il n’est pas nécessaire de se presser . Installez vous  confortablement  et faites vos achats  comme bon vous semble.
                                    Ce qui nous distingue :
                                    </p>
                                </div>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                                    {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                        {feature.name}
                                        </dt><br />
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                    ))}
                                </dl>
                                
                            </div>
                        </div>
                        <img
                            src={snackKidsDetail}
                            alt="snack-kids"
                            className="w-[29rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={1216}
                            height={721}
                        />
                    </div>
                </div>

                <div className='bg-white rounded-lg shadow dark:bg-gray-900 mx-16 mt-16 text-gray-900 p-8'>
                    Notre équipe dévouée est là pour répondre à toutes vos questions, vous conseiller sur nos produits et vous aider à trouver les goûters parfaits pour vos enfants. De la commande en ligne à la livraison à votre porte, nous nous engageons à rendre votre expérience avec nous aussi facile et agréable que possible. Nous sommes fiers de servir les familles de Libreville , Akanda et Owendo et au-delà, et nous sommes reconnaissants de faire partie de votre quotidien. Merci de nous faire confiance pour nourrir vos enfants et les accompagner dans leur croissance et leur épanouissement.Pour toute question, suggestion ou simplement pour dire bonjour, n'hésitez pas à nous contacter. 
                    <br/> Nous sommes là pour vous ! <b>L'équipe de Logouter</b>
                </div>
                
            </div>

            <Footers className="fixed bottom-0" />
        </div>
    )
}