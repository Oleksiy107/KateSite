import React from "react";
import Volonters from "../JSON/VolontersData";
import { Link } from "react-router-dom";

import VolPhoto1 from "../../static/1Photo1.jpeg";
import VolPhoto2 from "../../static/1Photo2.jpeg";
import VolPhoto3 from "../../static/1Photo3.jpeg";
import VolPhoto4 from "../../static/1Photo4.jpeg";
import VolPhoto21 from "../../static/2Photo1.jpeg";
import VolPhoto22 from "../../static/2Photo2.jpeg";
import VolPhoto23 from "../../static/2Photo3.jpeg";
import VolPhoto24 from "../../static/2Photo4.jpeg";
import VolThreeOne from "../../static/volonterThreeeImgOne.jpeg";
import VolThreeTwo from "../../static/volonterThreeeImgTwo.jpeg";
import VolThreeThree from "../../static/volonterThreeeImgThree.jpeg";
import VolThreeFour from "../../static/volonterThreeeImgFour.jpeg";
import VolThreeFive from "../../static/volonterThreeeImgFive.jpeg";
import VolThreeSix from "../../static/volonterThreeeImgSix.jpeg";

import VolFourImgOne from "../../static/VolFourImgOne.jpeg";
import VolFourImgTwo from "../../static/VolFourImgTwo.jpeg";
import VolFourImgThree from "../../static/VolFourImgThree.jpeg";
import VolFourImgFour from "../../static/VolFourImgFour.jpeg";
export default function VolontersAbout() {
  return (
    <>
      <div className="VolonterBox">
        <h2 className="VolonterBox__volunteerTitle">Наші герої</h2>
        <div className="VolonterBox__wrapVolunteer">
          {Volonters.map((volunteer) => (
            <div key={volunteer.id}>
              <img
                className="VolonterBox__imgVolunteer"
                src={volunteer.img}
                alt={volunteer.name}
              />
              <figure>
                <h2 className="VolonterBox__name">{volunteer.name}</h2>
                <figcaption className="VolonterBox__messageWrap">
                  <Link target="_blank" to={volunteer.instagramLink}>
                    <img
                      className="VolonterBox__imgMessage"
                      src={volunteer.imgMessageInstagram}
                      alt="Instagram message"
                    />
                  </Link>

                  <Link target="_blank" to={volunteer.facebookLink}>
                    <img
                      className="VolonterBox__imgMessage-imgFacebook"
                      src={volunteer.imgMessageFacebook}
                      alt="Facebook message"
                    />
                  </Link>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="VolonterBox__fundraisingWrap">
          <h2 className="VolonterBox__title">Підтримайте волонтерів</h2>
          <p className="VolonterBox__description">
            Підтримайте волонтерів, які допомагають на фронті, донатом можна за
            посиланнями.
          </p>
          <div className="VolonterBox__linkDescription">
            <Link
              target="_blank"
              className="VolonterBox__fundraising-btn"
              to="https://send.monobank.ua/jar/PhnbTJ2fG"
            >
              Підтримати Артема
            </Link>
            <Link
              target="_blank"
              className="VolonterBox__fundraising-btn"
              to="https://send.monobank.ua/jar/17H84cKrt?fbclid=PAAaYG2OfMzbZfOY7uzusMjyZQWMV2CfYeIlGFnQT4fqefAvw34AXBLhF07jM_aem_ARvH7_OI1HJJl_CgYZjLLxxmUjfEX687bsEHq2kznKOQDuOKmIQijZHoJXwSvVO6riY"
            >
              <p>Підтримати Вікторію</p>
            </Link>
            <Link
              className="VolonterBox__fundraising-btn"
              to=" посиланням:
https://send.monobank.ua/jar/8rwXT1J5kn?fbclid=PAAaZyQb0ev-WDQSWAR_wDP1ft_CszTi4yVR_qWDzA3BhscZ_WBl-W5MhSvtM_aem_AQyN3VDzJbtII9LSCtZqslJ1r8N0ZJ55wWIXEsWfDceQV6ovtYrX9fiYYIlj40fSWUI"
              target="_blank"
            >
              <p>Анна Ткачук</p>
            </Link>
          </div>
        </div>
        <div className="VolonterBox__wrapReport">
          <h2 className="VolonterBox__title">Звіт</h2>
          <div className="VolonterBox__reportImg reportImg">
            <img src={VolPhoto1} alt="Volunteer Photo 1" />
            <img src={VolPhoto2} alt="Volunteer Photo 2" />
            <img src={VolPhoto3} alt="Volunteer Photo 3" />
            <img src={VolPhoto4} alt="Volunteer Photo 4" />
            <img src={VolPhoto21} alt="Volunteer Photo 21" />
            <img src={VolPhoto22} alt="Volunteer Photo 22" />
            <img src={VolPhoto23} alt="Volunteer Photo 23" />
            <img src={VolPhoto24} alt="Volunteer Photo 24" />
            <img src={VolThreeOne} alt="Volunteer Photo 3" />
            <img src={VolThreeTwo} alt="Volunteer Photo 4" />
            <img src={VolThreeThree} alt="Volunteer Photo 21" />
            <img src={VolThreeFour} alt="Volunteer Photo 22" />
            <img src={VolThreeFive} alt="Volunteer Photo 23" />
            <img src={VolThreeSix} alt="Volunteer Photo 24" />
            <img src={VolFourImgOne} alt="Volunteer Photo 21" />
            <img src={VolFourImgTwo} alt="Volunteer Photo 22" />
            <img src={VolFourImgThree} alt="Volunteer Photo 23" />
            <img src={VolFourImgFour} alt="Volunteer Photo 24" />
          </div>
        </div>
      </div>
    </>
  );
}
