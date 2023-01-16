import styled from "@emotion/styled";
import Chart from "react-apexcharts";

const ContainerChart = styled.div`
    background: #f0f8ff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 148px;

    .health {
      display: flex;
      flex-direction: column;
      margin-bottom: -50px;
      margin-left: 10px;

      span {
        color: #92A3FD;
        font-size: 0.8rem;
      }
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 0.9rem;
    }


`

export function LineChart() {
  const data = {
    series: [
      {
        name: "meses",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#93A7FE"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#93A7FE"],
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false
      },
      toolbar: {
        show: false,
      },
      tooltip: {
        x: {
          show: false
        },
        marker: false
      }
    },
  };
  return (
    <Container>
      <h1>Evolução</h1>
      <ContainerChart>
        <div className="health">
          <p style={{ fontSize: '0.8rem', marginBottom: 0 }}>Saúde</p>
          <span>21% de gordura</span>
        </div>
        <Chart options={data.options} series={data.series} type="area" />
      </ContainerChart>
    </Container>
  )
};
