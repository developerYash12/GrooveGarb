import "./footer.css"
import { CiFacebook } from "react-icons/ci"
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from 'react-icons/bs'
export default function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-links ">
                    <a target="_blank" href="https://twitter.com/YashShr26967507" style={{ color: "#3f6acd" }}><BsTwitter /></a>
                    <a target="_blank" href="https://github.com/developerYash12" style={{ color: "#3f6acd" }}><BsGithub /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/yash-shrivastava-9b09b121b/" style={{ color: "#3f6acd" }}><BsLinkedin /></a>
                </div>
                <div className="footer-text">
                    <p>&copy; 2023 GrooveGrab. All rights reserved.</p>
                </div>

            </footer>
        </>
    )
}
