import React from "react";
import "./socials.css";

import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTimes,
  FaFacebook,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Socials = ({
  instagram,
  spotify,
  youtube,
  tiktok,
  x,
  facebook,
  size = "20",
  socialColor = "rgba(48, 232, 66, 1)",
}) => {
  return (
    <div className="card-social">
      {/* <a href={instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={size} color={socialColor} className="instagram" />
      </a> */}
      <a
        href={
          "https://www.facebook.com/profile.php?id=61566791462397&mibextid=LQQJ4d"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={size} color={socialColor} className="spotify" />
      </a>

      {/* <a
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={size} color={socialColor} className='youtube' />
                  </a> */}

      {/* <a
                    href={x}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTimes size={size} color={socialColor} className='tiktok' />
                  </a> */}
    </div>
  );
};

export default Socials;
