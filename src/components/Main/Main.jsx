import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClipboardCheck } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css' 

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'Cultural Relax',
    fees: '$700',
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus reiciendis accusantium distinctio. Esse quos rerum possimus repudiandae quae quasi vitae, voluptatibus iste ipsam inventore nisi ab labore, at atque."
  },
]

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Details <BsClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main