const Footer = () => (
    <footer className="bg-white">
    <div className="container mx-auto px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6 text-black">
        <img src="/imgs/logos/logo.png" className="w-[120px]" width={120} />
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Links</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Legal</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Company</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
)

export default Footer