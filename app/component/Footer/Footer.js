import React from 'react';
import styles from "./Footer.module.scss";
import Image from "next/image"; 
import Link from "next/link"; // Import Link from next/link

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.contactDetails}>
                <div className={styles.footerLogo}>    
                    <Image src="/image/Component 1.png" alt="Logo" width={200} height={65} />
                   
                </div>
                <p>Call Us</p>
                <h4>+91 12345 67890</h4>
                <p>123 AnnaSalai street, North Side of Ganapathy Temple, Tamil nadu.</p>
                <p>educationplateform@gmail.com</p>

                <div className={styles.footerIcons}>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </div>

            <div className={styles.aboutDetail}>
                <h3>ABOUT</h3>
                <Link href="/"><p>Home</p></Link>
                <Link href="/pages/About"><p>About Us</p></Link>
                
                <Link href="/pages/Events"><p>Events</p></Link>
                <Link href="/pages/Courses"><p>Courses</p></Link>
                <Link href="/pages/Blog"><p>Blog</p></Link>
                <Link href="/pages/Career"><p>Careers</p></Link>
            </div>

            <div className={styles.categoriesDetail}>
                <h3>CATEGORIES</h3>
                <p>Development</p>
                <p>Business</p>
                <p>Finance & Accounting</p>
                <p>IT & Software</p>
                <p>Office Productivity</p>
                <p>Marketing</p>
            </div>

            <div className={styles.supportDetail}>
                <h3>SUPPORT</h3>
                <p>Documentation</p>
                <p>FAQs</p>
                <p>Dashboard</p>
                <p>Contact</p>
            </div>
        </div>        
    )
}

export default Footer;
