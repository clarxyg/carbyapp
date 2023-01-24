import React from "react";
import Picker from "react-mobile-picker-scroll";
import { Container } from './styles'

export class Repetitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        hour: "00",
        minute: "00",
        title: '🔥 450 calorias queimadas'
      },
      optionGroups: {
        title: ["🔥 450 calorias queimadas", "🔥 300 calorias queimadas", "🔥 500 calorias queimadas"],
        hour: [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ],
        minute: ["00", "10", "20", "30", "40", "50"]
      }
    };
  }

  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };

  render() {
    const { optionGroups, valueGroups } = this.state;

    return (
      <Container>
        <h3>Repetições</h3>
        <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}
