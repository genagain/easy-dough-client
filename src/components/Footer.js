import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGrin } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="mt-56 lg:mt-24 h-96 border-t-2 border-gray-600 lg:border-t">
      <div className="m-auto w-1/2">
        <a href="https://github.com/genagain" target="blank" title="Github Profile" className="text-8xl"><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a href="https://www.linkedin.com/in/genohta" target="blank" title="Linkedin Profile" className="text-8xl"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="http://genohta.com/" target="blank" title="Personal Site" className="text-8xl"><FontAwesomeIcon icon={faGrin} /></a>
      </div>
    </div>
  )
}

export default Footer;
