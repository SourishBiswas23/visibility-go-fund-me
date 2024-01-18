import {
  faInstagram,
  faMedium,
  faMediumM,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  const footerContent = {
    "Fundraise for": [
      "Medical",
      "Emergency",
      "Memorial",
      "Education",
      "Nonprofit",
      "Crisis Relief",
    ],
    "Learn more": [
      "How GoFundMe Works",
      "Why GoFundMe",
      "Common questions",
      "Success stories",
      "Supported countries",
      "Charity fundraising",
      "Pricing",
    ],
    Resources: [
      "Help center",
      "Blog",
      "GoFundMe Stories",
      "Newsroom",
      "Careers",
      "About",
      "More resources",
    ],
  };

  const footerLegalLabelAndLink = {
    Terms: "#",
    "Privacy Notice": "#",
    Legal: "#",
    "Accessibility Statement": "#",
  };

  const imagePaths = ["/images/app-store.png", "/images/play-store.png"];

  const footerCompanyLogos = [
    faCircle,
    faYoutube,
    faXTwitter,
    faInstagram,
    faMedium,
    faMicrophone,
  ];

  return (
    <div className="footer">
      <div className="footer-logo-and-links">
        <div className="footer-logos">
          <div className="footer-logo">LOGO</div>
          <div className="footer-company-logos">
            {footerCompanyLogos.map((logo) => (
              <FontAwesomeIcon
                icon={logo}
                className="footer-company-single-logo"
              ></FontAwesomeIcon>
            ))}
          </div>
          <div className="footer-images">
            {imagePaths.map((imagePath) => (
              <img src={imagePath} className="single-image"></img>
            ))}
          </div>
        </div>
        <div className="footer-label-and-link">
          {Object.entries(footerContent).map(([heading, subHeadings]) => (
            <div>
              <div className="footer-heading">{heading}</div>
              <ul>
                {subHeadings.map((subHeading) => (
                  <li className="footer-sub-heading">{subHeading}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="copyrights">
        <div>
          © 2010-2024{" "}
          {Object.entries(footerLegalLabelAndLink).map(([label, link]) => (
            <span className="copyright-label">{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
