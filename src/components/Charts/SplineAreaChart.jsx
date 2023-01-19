import styled from "@emotion/styled";
import ReactApexChart from "react-apexcharts";


const Container = styled.div`
  display: flex;
  margin-left: 20px;

  @media (max-width: 400px) {
    margin-left: unset;
  }

  .apexcharts-text tspan {
      display: block;
    }


    .chart {
      height: 350px;
      width: 400px;

      @media (max-width: 400px) {
        width: 330px;
        height: unset;
      }
    }

`

export function SplineArea() {

  const data = {

    series: [{
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    toolbar: {
      show: true
    },
    options: {
      chart: {
        height: 'auto',
        type: 'area'
      },
      fill: {
        colors: ["transparent"],
        type: 'normal'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors: ['#92A3FD', '#C58BF2'],
        curve: 'smooth'
      },
      xaxis: {
        type: 'month',
        categories: ["Jan", "Fev", "Mar", "Abril", "Jun", "Jul", "Ago"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },


  };


  return (


    <Container id="chart">
      <ReactApexChart options={data.options} series={data.series} type="area" className="chart"/>
    </Container>


  );
}


