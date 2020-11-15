import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGrin } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
    <a href="https://github.com/genagain" target="blank" title="Github Profile"><FontAwesomeIcon icon={faGithubSquare} /></a>
    <a href="https://www.linkedin.com/in/genohta" target="blank" title="Linkedin Profile"><FontAwesomeIcon icon={faLinkedin} /></a>
    <a href="http://genohta.com/" target="blank" title="Personal Site"><FontAwesomeIcon icon={faGrin} /></a>
    </>
  )
}

export default Footer;
