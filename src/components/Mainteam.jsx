import React from "react";
import style from "../styles/Mainteam.module.css";
function Mainteam() {
  return (
    <div className={style.Mainteam}>
      <img src="banerT.jpg" alt="baner" />
      <h2 className={style.maintH}>MDD Core Team</h2>
      <div className={style.container}>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Shri S.C.Verma</span>
            <p>
              Having 40 years of experience in Anesthesia, Critical Care
              Equipment & medical gases pipeline
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Rajan Verma</span>
            <p>
              B.com, Having 20 years of experience in Sales & Marketing,
              Certified Authorized Person From NHS UK by MGPS LTD UK. Trained at
              PENLON-UK on MGPS HTM standards. Trained at AMICO
              Corporation-Canada and USA on MGPS NFPA standards. Trained at Rein
              Medical Germany on Integration and Data Management in Germany.
              Trained at Trilux Germany on Architectural & OR Products in
              Germany. Trained at SHD Italia on Modular Operation Theater
              Products in Italy. Trained at LM Medical Italia on Operation
              Theater Products in Italy. Trained at Matachana Spain on CSSD
              Products in Barcelona-Spain. Trained at Muka Turkey on Hospital
              Furniture in Turkey.
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Nitin Verma</span>
            <p>
              Nitin Verma is an MBA in International Business and Finance from
              university of Illinois at Urbana-Champaign, U.S.A. He has more
              than 11 years of experience in spearheading manufacturing and
              executing complex infrastructure projects in healthcare. Certified
              in QC from the University of Leed U.K., Nitin's core strengths and
              specialties are in Healthcare include Manufacturing, M.G.P.S,
              Modular Operation Theater and Project Management.
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Uttam kumar singh</span>
            <p>
              B.com Honors, C.A(Inter) Expertise In Accounts, Finance And
              Logistics. Having 25 years of experience in Accounts And Finance.
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Rakesh Singh</span>
            <p>Having 35 years of experience in HR & Admin.</p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>V K Kohli</span>
            <p>
              Having 35 years of experience in the field of Office Management.
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Surendera Kumar Rishi</span>
            <p>
              B.SC, Diploma in Electronic and Electrical From Jammu University-
              J & K Having Experience of 30 Years in the field of Medical
              Equipment & Medical Gas Pipe Line System.
            </p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Rahul Sharma</span>
            <p>Having 10 years of experience in Projects.</p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Ram jatan</span>
            <p>Having 15 years of experience in Accounts And Finance</p>
          </div>
        </div>
        <div className={style.profileContainer}>
          <div className={style.profile}>
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className={style.containt}>
            <span>Lakshmi Nair</span>
            <p>
              Having 20 years of experience in the field of Quality Analysis.
            </p>
          </div>
        </div>
      </div>
      <div className={style.pageChange}>
        <p>Showing 11-14 of 14 entries</p>
        <span>1</span>
        <span className={style.s2}>2</span>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Mainteam;
