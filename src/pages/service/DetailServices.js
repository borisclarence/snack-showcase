import Navbar from "../../components/navbar/Navbar";
import Footers from '../footers/Footers';
import 
{ ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } 
from '@heroicons/react/24/outline';
import '../../assets/css/App.css';

const features = [
    {
      name: 'Nos Services Qualités',
      description:
        "Nous collaborons avec  des fournisseurs  de qualité , sélectionnant les meilleurs produits  pour offrir des biscuits qui ravissent les palais les plus exigeants. Une Gamme Variée de Saveurs et de Styles. Que vous recherchiez des biscuits classiques au beurre, des biscuits aux pépites de chocolat, nous avons ce qu'il vous faut. Notre gamme diversifiée de biscuits offre quelque chose pour chaque client, chaque occasion.",
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Service à la Clientèle Personnalisée',
      description:
        "Chez Logouter, nous comprenons l'importance d'un service clientèle exceptionnel. Notre équipe dévouée est là pour répondre à toutes vos questions, vous guider à travers notre catalogue de produits et vous aider à trouver les biscuits parfaits pour satisfaire vos clients.",
      icon: LockClosedIcon,
    },
    {
      name: 'Commandez en Gros, Livrez en Confiance',
      description: "Nous simplifions le processus de commande en gros pour nos clients commerciaux. vous pouvez faire confiance à Biscuits en Gros pour vous fournir des produits de qualité  et savoureux à temps, à chaque fois. ",
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        "Contactez-nous dès aujourd'hui pour en savoir plus sur nos produits, nos tarifs de gros et comment nous pouvons vous aider à ravir vos clients avec nos délicieux biscuits artisanaux. Faites de Biscuits en Gros votre partenaire de confiance pour des biscuits de qualité supérieure.",
      icon: FingerPrintIcon,
    },
];

export default function DetailServices() {
    return (
        <div className="bg-global">
            <Navbar />

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                    {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Bienvenue chez Logouter!
                    </p>
                    <p className="mt-6 text-lg leading-6 text-white">
                    Chez Logouter, nous sommes fiers de fournir une large sélection de délicieux biscuits à des commerçants du Gabon. Notre passion pour la qualité, le goût se reflète dans chaque bouchée de nos biscuits.
                    Notre Engagement envers la Qualité.
                    </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-white">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-white">
                                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <p class="font-normal text-gray-700 dark:text-gray-400">
                                    {feature.description}
                                    </p>
                                </a>
                            </dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
                </div>
            
            <Footers className="fixed" />
        </div>
    )
}