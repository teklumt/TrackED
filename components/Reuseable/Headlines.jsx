"use client";

import Image from "next/image";
import styles from "./Headlines.module.css";
import Link from "next/link";

const Headlines = ({
  title,
  description,
  buttonTextPrimary,
  buttonTextSecondary,
  imageUrl,
  URL1,
  URL2,
}) => {
  return (
    <div className={styles.container}>
      <style jsx>{`
        .${styles.textSection} {
          --background-image: url(${imageUrl});
        }
      `}</style>
      <div className={styles.textSection}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link href={URL1}>
            <button className={styles.joinButton}>{buttonTextPrimary}</button>
          </Link>
          <Link href={URL2}>
            <button className={styles.learnButton}>
              {buttonTextSecondary}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.imageSection}>
        <Image
          src={imageUrl}
          alt="headline Image"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Headlines;
