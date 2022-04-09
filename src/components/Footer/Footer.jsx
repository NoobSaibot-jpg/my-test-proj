import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Container } from '@mui/material'
import React from 'react'
import './footer.scss'
import logo from './img/logo.png'

export default function Footer() {
  return (
    <footer>
        <Container>
            <section className="first_footer">
                <h1>Need help with photography or videography?</h1>
                <h2>We're here for you!</h2>
                <button className='btn'>
                    <span>Get in touch</span>
                </button>
            </section>
            <section className="second_footer">
                <div className="second_footer_logo">
                    <img src={logo} alt="logo" />
                    <p>Photographers and videographers capturing the world around us.</p>
                </div>
                <div className="second_footer_descr">
                    <div className="second_footer_descr_first">
                        <h3>Business areas</h3>
                        <ul className="second_footer_descr_first_list">
                            <li className="second_footer_descr_first_list_item">Product Photography</li>
                            <li className="second_footer_descr_first_list_item">Architecture Photography</li>
                            <li className="second_footer_descr_first_list_item">Drone Photography</li>
                            <li className="second_footer_descr_first_list_item">Wildlife Photography</li>
                        </ul>
                    </div>
                    <div className="second_footer_descr_second">
                        <h3>Pages</h3>
                        <ul className="second_footer_descr_second_list">
                            <li className="second_footer_descr_second_list_item">Gear cage</li>
                            <li className="second_footer_descr_second_list_item">Featured images</li>
                            <li className="second_footer_descr_second_list_item">Contact</li>
                            <li className="second_footer_descr_second_list_item">Style guide</li>
                            <li className="second_footer_descr_second_list_item">Instructions</li>
                            <li className="second_footer_descr_second_list_item">Changelog</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="trid_footer">
                <div className="trid_footer_text">
                    <h2>Subscribe to our newsletter</h2>
                    <h3>Read about all the things we do.</h3>
                </div>
                <div className="input">
                    <input type="text" />
                    <button className='input_btn'>Send</button>
                </div>
            </section>
            <section className="four_footer">
                <div className="four_footer_text">© Aperture Photography, Inc. All rights reserved.</div>
                <div className="four_footer_icons">
                    <ul className="four_footer_icons_list">
                        <li className="four_footer_icons_list_item"> <a href="#"><Twitter/></a> </li>
                        <li className="four_footer_icons_list_item"> <a href="#"><Instagram/></a> </li>
                        <li className="four_footer_icons_list_item"> <a href="#"><Facebook/></a> </li>
                    </ul>
                </div>
            </section>
        </Container>
    </footer>
  )
}
