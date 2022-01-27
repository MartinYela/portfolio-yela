import './style.css';
import myPicture from '../../images/aboutMe/me.png';
// import mern from '../../images/aboutMe/mern.jpg';
import linkedin from '../../images/aboutMe/linkedin.jpg';

export default function Landing() {
    return (
        <section className='aboutMe_section'>
            <div className='aboutMe_text'>
                <p><span className='color_green'>¿BUSCANDO UN DESARROLLADOR WEB FULL STACK?</span></p>
                <p>Soy<span className='color_blue'> Martín Alfredo Yela</span>   </p>
                <p>Su próximo <span className='color_orange'> Full Stack Web Developer</span></p><hr></hr>
                <p ><span className='color_blue'>Aporto </span><span className='color_yellow'>fiabilidad</span>,<span className='color_yellow'> versatilidad</span> y <span className='yellow'><span className='color_yellow'>resolución</span></span></p>
                <p><span className='color_blue'>Domino</span> el desarrollo <span className='color_green'>End-to-End</span> de una aplicación web</p>
                <p> con el stack tecnológico <span className='color_orange'>MERN</span></p>
                <p >Además <span className='color_blue'>poseo</span> distintas habilidades en programación, tanto</p>
                <p> de <span className='color_orange'>Java</span>, como de <span className='color_orange'>Phyton</span>, o <span className='color_orange'>Javascript</span></p>
                <p >La persistencia de las apps la <span className='color_blue'>realizo</span> en base</p>
                <p> de datos SQL [<span className='color_orange'>MySQL</span>] como no SQL [<span className='color_orange'>Mongodb</span>]<span className='parpadeo'>|</span></p>
            </div>
            <div className='container_rigth'>
                <div className='aboutMe_dates'>
                    <img className='myPicture' src={myPicture} alt="Foto de Martín Alfredo Yela" />
                    <p>Teléfono: 692580956</p>
                    <p>Mail: martinalfredoyela@gmail.com</p>
                    <a className='enlaceLinkedin' href="www.linkedin.com/in/martín-alfredo-yela">Visita mi <img src={linkedin} alt="Logo Linkedin" /></a>
                    {/* <img className='logoMern' src={mern} alt="Logo MERN" /> */}
                </div>
            </div>
        </section>

    )
}