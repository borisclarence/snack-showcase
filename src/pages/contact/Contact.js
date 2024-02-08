import logouter from "../../assets/img/Logouter-logo.png";

const Contact = () => {
    return (
        <div class="w-full p-4 text-center border border-gray-200 sm:p-8 bg-global" id="contact">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 text-white">
                Inscrivez-vous pour voir les nouvelles offres et bonnes affaires!
            </h5>
            <p class="mb-5 text-base text-gray-500 sm:text-lg text-white">
                Obtenez 10% de réduction sur votre premier achat 
                en vous inscrivant à notre news letter.
            </p>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                
                <a href="#" class="w-full sm:w-auto bg-secondary hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:hover:bg-gray-400 dark:focus:ring-gray-400">
                    <i className="bx bxl-play-store"></i>
                    <div class="text-left rtl:text-right">
                        <div class="-mt-1 font-sans text-sm font-semibold">
                            Téléchargez maintenant
                        </div>
                    </div>
                </a>
            </div>
            <p className="sm:mb-0 text-white">
                <span>Suivez-nous</span>
                <i className="bx bxl-facebook-square"></i>
                <i className="bx bxl-instagram"></i>
                <i className="bx bxl-twitter"></i>
            </p>
        </div>
    );
}

export default Contact;
