import {ServiceCard} from "../components/ServiceCard";
import SideInfo from "../components/SideInfo.jsx";
import {useState} from "react";
import img1 from "../../src/assets/services/1.png"
import imgback1 from "../../src/assets/servicesImg/2.jpg"
import img2 from "../../src/assets/services/2.png"
import imgback2 from "../../src/assets/servicesImg/2.jpg"
import img3 from "../../src/assets/services/3.png"
import imgback3 from "../../src/assets/servicesImg/3.jpg"
import img4 from "../../src/assets/services/4.png"
import imgback4 from "../../src/assets/servicesImg/4.jpg"
import img5 from "../../src/assets/services/5.png"
import imgback5 from "../../src/assets/servicesImg/5.jpg"
import img6 from "../../src/assets/services/6.png"
import imgback6 from "../../src/assets/servicesImg/6.jpg"
import img7 from "../../src/assets/services/7.png"
import imgback7 from "../../src/assets/ServicesImg/7.jpg"
import img8 from "../../src/assets/services/8.png"
import imgback8 from "../../src/assets/ServicesImg/8.png"
import img9 from "../../src/assets/services/9.png"
import imgback9 from "../../src/assets/ServicesImg/9.png"


const services = [
    {
        text1: 'Desarrollo de ',
        text2: 'Aplicaciones Móviles',
        img: img9,
        img2: imgback9
    },
    {
        text1: 'Desarrollo de',
        text2: 'Aplicaciones Web',
        img: img1,
        img2: imgback1
    },
    {
        text1: 'Consultoría en',
        text2: 'Transformación Digital',
        img: img3,
        img2: imgback3
    },
    {
        text1: 'Integración de',
        text2: 'Sistemas',
        img: img4,
        img2: imgback4
    },
    {
        text1: 'Soporte y',
        text2: 'Mantenimiento de Software',
        img: img5,
        img2: imgback5
    },
    {
        text1: 'Desarrollo de',
        text2: 'Soluciones en la Nube',
        img: img6,
        img2: imgback6
    },
    {
        text1: 'Automatización y',
        text2: 'Optimización de Procesos',
        img: img7,
        img2: imgback7
    },
    {
        text1: 'Seguridad y',
        text2: 'Protección de Datos',
        img: img8,
        img2: imgback8
    },
]

const descriptions = [
    {
        1 : [
            "Desarrollamos aplicaciones móviles a medida para iOS y Android, garantizando una experiencia de usuario óptima y funcionalidades avanzadas que se adaptan a las necesidades de su negocio."
        ]
    },
    {
        2 : [
            "Creamos aplicaciones web robustas y escalables, utilizando tecnologías modernas para asegurar el mejor rendimiento y seguridad. Nos enfocamos en la usabilidad y la experiencia del usuario."
        ]
    },
    {
        3: [
            "Ofrecemos consultoría en transformación digital para ayudar a su empresa a adaptarse y prosperar en el entorno digital. Evaluamos sus procesos y proponemos soluciones tecnológicas que mejoren la eficiencia y competitividad."
        ]
    },
    {
        4 : [
            "Integramos diversos sistemas y plataformas para asegurar una comunicación fluida y eficiente entre sus diferentes herramientas de software, optimizando sus operaciones diarias."
        ]
    },
    {
        5 : [
            "Brindamos soporte técnico y mantenimiento continuo para asegurar que sus soluciones de software funcionen sin problemas. Realizamos actualizaciones y resolvemos incidencias de manera oportuna."
        ]
    },
    {
        6 : [
            "Desarrollamos soluciones en la nube para proporcionar flexibilidad, escalabilidad y acceso remoto seguro a sus aplicaciones y datos. Utilizamos plataformas como AWS, Azure y Google Cloud."
        ]
    },
    {
        7 : [
            "Automatizamos y optimizamos sus procesos de negocio mediante el uso de tecnologías avanzadas, como la inteligencia artificial y la automatización de procesos robóticos (RPA), mejorando la eficiencia y reduciendo costos."
        ]
    },
    {
        8 : [
            "Implementamos medidas avanzadas de seguridad y protección de datos para salvaguardar la información sensible de su empresa. Cumplimos con normativas y estándares internacionales de seguridad."
        ]
    },
]



export function Services() {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    const [open7, setOpen7] = useState(false)
    const [open8, setOpen8] = useState(false)
    return (
        <>
            <div className="bg-white my-24 py-10 sm:py-32 justify-center border-t border-gray-200 ">
                <div className="mx-auto max-w-2xl text-center ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Listos para ayudarte con todo lo que necesites.
                    </p>
                </div>
                <div className="px-0 mx-auto mt-10 grid justify-items-center max-w-2xl grid-cols-1 gap-x-0 gap-y-16 pt-10 sm:mt-16 sm:pt-16 md:px-0 lg:mx-0 lg:max-w-none lg:px-0 lg:grid-cols-3">
                    <div>
                        <ServiceCard img={services[0].img} text1={services[0].text1} setOpenInfo={setOpen1} text2={services[0].text2}/>
                        <SideInfo openInfo={open1} setOpenInfo={setOpen1} text1={services[0].text1} img={services[0].img2} descrition={descriptions[0]["1"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[1].img} text1={services[1].text1} setOpenInfo={setOpen2} text2={services[1].text2}/>
                        <SideInfo openInfo={open2} setOpenInfo={setOpen2} text1={services[1].text1} img={services[1].img2} descrition={descriptions[1]["2"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[2].img} text1={services[2].text1} setOpenInfo={setOpen4} text2={services[2].text2}/>
                        <SideInfo openInfo={open4} setOpenInfo={setOpen4} text1={services[2].text1} img={services[2].img2} descrition={descriptions[2]["3"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[3].img} text1={services[3].text1} setOpenInfo={setOpen5} text2={services[3].text2}/>
                        <SideInfo openInfo={open5} setOpenInfo={setOpen5} text1={services[3].text1} img={services[3].img2} descrition={descriptions[3]["4"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[4].img} text1={services[4].text1} setOpenInfo={setOpen6} text2={services[4].text2}/>
                        <SideInfo openInfo={open6} setOpenInfo={setOpen6} text1={services[4].text1} img={services[4].img2} descrition={descriptions[4]["5"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[5].img} text1={services[5].text1} setOpenInfo={setOpen7} text2={services[5].text2}/>
                        <SideInfo openInfo={open7} setOpenInfo={setOpen7} text1={services[5].text1} img={services[5].img2} descrition={descriptions[5]["6"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[6].img} text1={services[6].text1} setOpenInfo={setOpen3} text2={services[6].text2}/>
                        <SideInfo openInfo={open3} setOpenInfo={setOpen3} text1={services[6].text1} img={services[6].img2} descrition={descriptions[6]["7"]}/>
                    </div>
                    <div>
                        <ServiceCard img={services[7].img} text1={services[7].text1} setOpenInfo={setOpen8} text2={services[7].text2}/>
                        <SideInfo openInfo={open8} setOpenInfo={setOpen8} text1={services[7].text1} img={services[7].img2} descrition={descriptions[7]["8"]}/>
                    </div>
                </div>
            </div>
        </>
    )
}