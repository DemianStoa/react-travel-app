import React,{useEffect} from 'react'
import './footer.css'
import video from '../../Assets/video.mp4'
import {AiOutlineSend} from  "react-icons/ai"
import {MdOutlineExplore} from  "react-icons/md"
import {FiTwitter} from  "react-icons/fi"
import {FiFacebook} from  "react-icons/fi"
import {FiYoutube} from  "react-icons/fi"
import {FiInstagram, FiChevronRight} from  "react-icons/fi"
import {FaTripadvisor} from  "react-icons/fa"

import Aos from 'aos'
import 'aos/dist/aos.css' 


const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Kepp in touch</small>
            <h2>Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit' >
              <AiOutlineSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro  flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineExplore className='icon'/>Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur officia eaque? Eveniet facilis dolores a rem atque amet doloribus nemo quae, similique in deserunt ipsam neque delectus aperiam? Ipsum!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FiTwitter className="icon"/>
              <FiFacebook className="icon"/>
              <FiYoutube className="icon"/>
              <FiInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos-duration="3000" data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                Our Agency
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurances
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
    
            </div>
            <div data-aos-duration="4000" data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                Parties
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
    
            </div>
            <div data-aos-duration="5000" data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                Last Minut
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Paris
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Thailand
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
    
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best Travel Website </small>
            <small>Copyrights Reserved -Demian2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer