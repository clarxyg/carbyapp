import { WifiNone, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "./styles";




export function TopTabs() {
  return (
    <Container>
      <button>
        <Link to="/">
          <X size={20} />
        </Link>
      </button>
      <button>
        ..
      </button>
    </Container>
  )
}
