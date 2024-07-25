import "../../src/App.css"
import img1 from "../../src/assets/ampeilogo.png"

export default function AboutxUs() {
    return (
        <div className="relative isolate overflow-hidden bg-white-second/50 md:py-0 lg:py-0">
            <div className="flex">
                <div className="backgorund2 bg-center bg-no-repeat bg-cover w-96 h-96 hidden lg:block lg:w-[50%] lg:h-[940px] , clip-polygon-85"/>
                <div className="pb-10 flex flex-col items-center gap-y-16 w-[100%] mt-10 md:w-[100%] lg:w-[50%]">
                    <div>
                        <img src={img1} alt={"Guma mex LOGO"}/>
                    </div>
                    <div className="w-4/4 flex flex-col items-center text-base">
                        <p className="w-[80%] text-justify md:w-[60%] lg:w-[60%] text-justify font-display">
                        AMPEI es una empresa con amplia experiencia en el desarrollo de software personalizado y soluciones tecnológicas innovadoras. Ofrecemos servicios integrales que incluyen el desarrollo de aplicaciones móviles y web, integración de sistemas, consultoría tecnológica y mantenimiento de software. Somos una empresa certificada en diversas plataformas y tecnologías de vanguardia, garantizando la calidad y seguridad de nuestras soluciones. Además, somos proveedores de software y herramientas digitales con un amplio catálogo de productos que se adaptan a las necesidades específicas de nuestros clientes.
                        </p>
                        <p className="hidden font-display md:block lg:block font-bold mt-28 ml-56 text-red-primary">
                            “AMPEI siempre mirando al futuro”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
