import ClientMain from "../components/ClientMain";
import SideBarp from "../components/SideBarp";
import style from "../styles/Clientele.module.css";
function Clientele() {
  return (
    <div className={style.Clientele}>
      <SideBarp />
    <ClientMain />
    </div>
  );
}

export default Clientele;
