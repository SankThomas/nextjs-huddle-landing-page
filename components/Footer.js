import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import styles from "../styles/Home.module.css"

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          <li>
            <button>
              <FaFacebook />
            </button>
          </li>
          <li>
            <button>
              <FaTwitter />
            </button>
          </li>
          <li>
            <button>
              <FaInstagram />
            </button>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
