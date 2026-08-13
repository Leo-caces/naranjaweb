import Link from "next/link"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineMarkEmailRead } from "react-icons/md"

const ContactZone = () => {
  return (
        <div className="relative flex items-top justify-center py-20 bg-white">
        <div className="mx-auto">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2">
                        <h1 className="text-4xl sm:text-4xl text-gray-600 font-bold tracking-tight">
                            Mejoramos sus resultados en internet
                        </h1>
                        <p className="flex flex-col xl:flex-row text-normal text-lg sm:text-2xl font-medium text-gray-600 mt-2 text-nowrap">
                            ¿Evaluemos tu Proyecto? <span className="text-secondary">¡Comunícate con nosotros!</span>
                        </p>

                        <div className="flex text-base items-center mt-4 text-gray-600">
                            <FaWhatsapp className="w-6 h-6" />
                            <div className="ml-4 text-xl text-nowrap tracking-wide font-bold w-40 hover:text-calipso">
                                <Link href="tel:+56988228778">(+56 9) 8822 8778</Link>
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <MdOutlineMarkEmailRead className="w-6 h-6" />
                            <div className="ml-4 text-xl tracking-wide font-bold w-40 hover:text-calipso">
                                <Link href="mailto:hola@naranjaweb.cl">hola@naranjaweb.cl</Link>
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600">
                            <FaFacebook className="w-6 h-6" />
                            <div className="ml-4 text-xl tracking-wide font-base w-40 hover:text-calipso">
                                <a 
                                    target="_blank" // Abre en pestaña nueva
                                    rel="noopener noreferrer" // Protege la seguridad y rendimiento del navegador    
                                    href="https://www.facebook.com/naranjaweb">facebook.com/naranjaweb</a>
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600">
                            <FaXTwitter className="w-6 h-6" />
                            <div className="ml-4 text-xl tracking-wide font-base w-40 hover:text-calipso">
                                <Link 
                                    target="_blank" // Abre en pestaña nueva
                                    rel="noopener noreferrer" // Protege la seguridad y rendimiento del navegador
                                    href="https://www.twitter.com/naranjawebcl">twitter.com/naranjawebcl</Link>
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600">
                            <FaInstagram className="w-6 h-6" />
                            <div className="ml-4 text-xl tracking-wide font-base w-40 hover:text-calipso">
                                <Link 
                                    target="_blank" // Abre en pestaña nueva
                                    rel="noopener noreferrer" // Protege la seguridad y rendimiento del navegador
                                    href="https://www.instagram.com/naranjaweb">instagram.com/naranjaweb</Link>
                            </div>
                        </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden"></label>
                            <input type="name" name="name" id="name" placeholder="Tu nombre" className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden"></label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden"></label>
                            <input type="tel" name="tel" id="tel" placeholder="Tu número de teléfono." className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden"></label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="¿Tienes un proyecto en mente? Escríbenos."
                                className="w-full mt-2 py-3 px-3 h-40 rounded-lg resize-none bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none text-left align-top"
                            />
                        </div>

                        <button type="submit" className="md:w-32 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactZone