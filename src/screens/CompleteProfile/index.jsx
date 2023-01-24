import { Container } from "./styles";
import image from '../../assets/imageStart.jpg'
import { ChooseGender } from "../../components/Inputs/ChooseGender";
import { DateBirthday } from "../../components/Inputs/DateBirthday";
import { Weight } from "../../components/Inputs/Weight";
import { Height } from "../../components/Inputs/Height";
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";


export function CompleteProfile() {
  return (
    <Container>
      <img src={image} />
      <div className="completeTexts">
        <h3>Vamos completar o seu perfil</h3>
        <p>Isso vai nos ajudar a saber mais sobre você</p>
      </div>
      <div className="containerInputs">
        <ChooseGender />
        <DateBirthday />
        <div className="containerMeasure">
          <Weight />
          <span className="measure">
            KG
          </span>
        </div>
        <div className="containerMeasure">
          <Height />
          <span className="measure">
            CM
          </span>
        </div>
      </div>
      <div className="containerButton">
        <Link to="/dashboard">
          <Button>
            Salvar
          </Button>
        </Link>
      </div>
    </Container>
  )
}
