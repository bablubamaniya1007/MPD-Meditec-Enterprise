import style from "../styles/ArchitecturalProduct.module.css";

function ArchitecturalProduct() {
  return (
    <div className={style.ArchitecturalProduct}>
      <h2 className={style.heading}>Pendant & Architectural Products
      </h2>
      <div className={style.imageContainer}>
        <div className={style.image}>
          <img src="img36.jpg" alt="1" />
          <span>Ceiling Beam</span>
        </div>
        <div className={style.image}>
          <img src="img37.jpg" alt="" />
          <span>Ceiling Mounted</span>
        </div>
        <div className={style.image}>
          <img src="img38.jpg" alt="" />
          <span>Accessories</span>
        </div>
        <div className={style.image}>
          <img src="img39.jpg" alt="" />
          <span>Ceiling Coloum</span>
        </div>
        <div className={style.image}>
          <img src="img40.jpg" alt="" />
          <span>Cielo Media Bridge</span>
        </div>
        <div className={style.image}>
          <img src="img41.jpg" alt="" />
          <span>Cielo Vertical</span>
        </div>
        <div className={style.image}>
          <img src="img42.jpg" alt="" />
          <span>Isola Tandem</span>
        </div>
        <div className={style.image}>
          <img src="img43.jpg" alt="" />
          <span>Isola</span>
        </div>
        <div className={style.image}>
          <img src="img44.jpg" alt="" />
          <span>Vertical Panel</span>
        </div>
        <div className={style.image}>
          <img src="img45.jpg" alt="" />
          <span>Isola</span>
        </div>
        <div className={style.image}>
          <img src="img46.jpg" alt="" />
          <span>Bed head units</span>
        </div>
        {/* <div className={style.image}>
          <img src="img34.jpg" alt="" />
          <span>OT Light With Monitor</span>
        </div> */}
      </div>
    </div>
  );
}

export default ArchitecturalProduct;
