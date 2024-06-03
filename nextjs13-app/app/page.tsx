import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import profileImage from './profile.png'
export default function Home() {
  return (
    
    <div className={styles.container}>
    
    <section className={styles.headingMd}>
      <p>My blog</p>
      <Image 
            src={profileImage}
            alt="Profile Picture" 
            width={150} 
            height={150} 
            className={styles.profileImage}
          />
    
    </section>

    <section id="about" className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>소개 내용 할게 없다</p>
      </section>
   
      <section id="contact" className={styles.contactSection}>
        <h2>Contact</h2>
        <p>010-xxxx-xxxx </p>
        <p>email@example.com</p>
      </section>

  </div>
  );
}
