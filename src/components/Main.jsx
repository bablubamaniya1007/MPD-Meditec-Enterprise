import React from "react";
import style from "../styles/Main.module.css";
function Main() {
  return (
    <div className={style.main}>
      <img className={style.baner} src="baner.jpg" alt="baner" />
      <h2 className={style.mainH}>About MDD</h2>
      <div className={style.spanHeadin}>
        <span className={style.top}>"Technological Solutions for Human Life"</span>
        <span>Company Profile</span>
        <span>MDD MEDICAL SYSTEMS (INDIA) PVT. LTD.</span>
      </div>
      <div className={style.pera}>
        <p>
          MDD Medical was founded by Shri. S.C. Verma – Chairman & Managing
          Director in the memory of his Mother Maa Dropati Devi to serve human
          kind. MDD company aim & motto is to provide Technological Solutions
          for Improving Human life.
        </p>

        <p>
          The guiding philosophy with MDD Medical Systems has been to identify
          latest, cutting edge technologies all over the world, understand its
          relevance to Indian market and help the users in India with its
          acquisition, applications and maintenance. We get access to the latest
          technology and world class products from our principals who
          incidentally enjoy a market lead position in the medical field.
        </p>
        

        <p>
          Our history reveals that we are capable of executing projects of any
          capacity be it a small or a mega size project that fetch our full
          attention. And also we can offer the most modern and contemporary
          equipments with complete warranty, operation and planned preventive
          maintenance as cost effective, economical and ergonomical solutions to
          suit the client's requirements.
        </p>
        

        <p>
          MDD is run and managed by industry's professionals having experience
          of more than 40 years in the similar field with their vast innovative
          knowledge and experience in executing the turn-key hospital projects.
        </p>
        

        <p>
          MDD is financially sound company and have in-house professionals
          having specialized experience for the respective products and
          projects. A thoroughly professionally managed ISO 14001:2015, ISO
          9001:2008+EN ISO 13485:2012, OHSAS 18001:2007 certified company.
        </p>
        

        <p>
          Dedicated experienced team for execution of different projects & after
          Sales Service. Network of Resident Engineers in New Delhi, Gurgoan,
          Jammu, Dehradun, Jodhpur,Bhopal, Nagpur, Raipur, Bhubneshwar, Patna,
          Kolkota, Mumbai, Banglore for providing prompt after sales support.
        </p>
        

        <p>
          *MDD was incorporated in the year 2003 and within short period of 15
          years, today it is known to be as 40 Million USD company.*
        </p>
      </div>
      <h6>
        <b>
          MDD Medical are specialized in following services and medical
          products:
        </b>
      </h6>
      <ul className={style.list}>
        <li>
          Medical Gas Pipe Line Solutions as per British Standard HTM02-01
        </li>
        <li>
          Medical Gas Pipe Line Solutions as per American Standard NFPA-99
        </li>
        <li>
          Designing and Installation of Modular & Prefabricated Operation
          Theatres & ICU
        </li>
        <li>LED Operating Lights and OT Tables</li>
        <li>Operating Room and Intensive Care Pendants</li>
        <li>High Care Hospital Beds</li>
        <li>Stainless steel equipments and Surgical Scrub Sink</li>
        <li>Wall Guard, Corner Guard, Grab Rails protection system</li>
        <li>Cubical Partition Track system, Meditrack IV ystem</li>
        <li>Nurse Call system</li>
        <li>CSSD system</li>
      </ul>
    </div>
  );
}

export default Main;
