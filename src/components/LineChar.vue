<script>
import { Line } from "vue-chartjs";
const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart Demo",
    },
  },
  scales: {
    y: {
      min: 0,
      title: "Time",
      max: 110,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

export default {
  name: "LineChart",
  extends: Line,
  data() {
    return {
      dataCollection: [100, 8, 23, 4, 565, 3, 25, 45, 2343, 9],
      data: {
        labels: this.labelSize(0, 30, 1),
        datasets: [
          {
            label: "Dataset 1",
            data: this.randomData(30, 100),
            borderColor: "#007bff",
            backgroundColor: "transparent",
          },
          {
            label: "Dataset 2",
            data: this.randomData(30, 100),
            borderColor: "#dc3545",
            backgroundColor: "transparent",
          },
        ],
      },
    };
  },
  methods: {
    randomData(num, max) {
      let arrData = [];
      for (let i = 0; i < num; i++) {
        arrData.push(Math.floor(Math.random() * max));
      }
      return arrData;
    },
    labelSize(min, max, step) {
      let arrlabel = [];
      for (let i = min; i <= max; i += step) {
        arrlabel.push(i);
      }
      return arrlabel;
    },
  },
  mounted() {
    this.renderChart(this.data, options);
  },
};
</script>

<style></style>
