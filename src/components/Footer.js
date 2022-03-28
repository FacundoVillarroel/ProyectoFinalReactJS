import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons"
function Footer () {

    return(
        <footer className="footerContainer">
            <div>
                <h4>Síguenos en:</h4>
                <a href="https://www.facebook.com/profile.php?id=100007157887398" className="icons"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a  href="https://www.instagram.com/recreativofc/" className="icons"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div>
                <a href="https://www.campafutbol.com.ar/"><div className="imgFooterCampa"></div></a>
            </div>
            <div className="sponsorFlex">
                <h4>Patrocinado por: </h4>
                <a href="https://www.kappa.com/"><div className="imgFooterKappa"></div></a>            
            </div>
        </footer>
    )
}

export default Footer