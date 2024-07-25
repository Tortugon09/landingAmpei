import img1 from "../../src/assets/Mision_img.png"
import img2 from "../../src/assets/Vision_img.png"


const posts = [
    {
        id: 1,
        title: 'Mision',
        href: '#',
        description:
            'En AMPEI, aspiramos a ser reconocidos mundialmente como pioneros en la industria del software, creando soluciones tecnológicas avanzadas que no solo respondan a las necesidades actuales, sino que también anticipen y den forma a las demandas del futuro. Nos comprometemos a impulsar la transformación digital, promoviendo la innovación y la sostenibilidad en todos nuestros proyectos. Nuestro objetivo es mejorar la calidad de vida y la eficiencia operativa de nuestros clientes a través de tecnologías integradas, intuitivas y de alto impacto.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        reverse: false,
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                img1,
        },
    },
    {
        id: 2,
        title: 'Vision',
        href: '#',
        description:
            'En AMPEI, nuestra misión es desarrollar y entregar software de vanguardia que potencie a las empresas y a las personas para alcanzar su máximo potencial. Nos dedicamos a entender a fondo los desafíos y oportunidades únicos de nuestros clientes, proporcionando soluciones personalizadas que optimizan sus operaciones y fomentan el crecimiento. Creemos en la importancia de un enfoque colaborativo, trabajando estrechamente con nuestros clientes y socios para garantizar que nuestras soluciones no solo cumplan, sino que superen las expectativas. Valoramos la innovación continua, la calidad sin compromisos y la integridad en todas nuestras interacciones, esforzándonos por ser un referente en la creación de tecnología que inspire y capacite a las futuras generaciones.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        reverse: true,
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                img2,
        },
    },
    // More posts...
]

export default function TextBox() {

    const reverse = true

    return (
                <div className="mx-auto gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                    {posts.map((post) => (
                        post.reverse === true ?
                        <article key={post.id} className="flex flex-row-reverse items-start gap-x-6 justify-between">
                            <div className="relative w-4/4 md:w-2/4">
                                <h3 className="mt-3 text-4xl font-bold leading-6 text-black">
                                    <p href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </p>
                                </h3>
                                <p className="mt-5 text-base font-body leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="hidden relative w-96 mt-8 flex items-center gap-x-4 md:block">
                                <img src={post.author.imageUrl} alt="" className="h- w-full" />
                            </div>
                        </article>
                            :
                            <article key={post.id} className="flex flex-row items-start gap-x-6 justify-between">
                                <div className="relative mb-24 w-4/4 md:w-2/4">
                                    <h3 className="mt-3 text-4xl font-bold leading-6 text-black">
                                        <p href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </p>
                                    </h3>
                                    <p className="mt-5 text-base font-body leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="hidden relative w-96 mt-8 flex items-center gap-x-4 md:block">
                                    <img src={post.author.imageUrl} alt="" className="h- w-full" />
                                </div>
                            </article>
                    ))}
                </div>
    )
}
