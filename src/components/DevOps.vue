<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'DevOps',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'DevOps',
            data: [3, 4, 3, 5, 2],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)'
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.5)',
              'rgba(87, 16, 131, 0.5)',
              'rgba(87, 16, 131, 0.5)',
              'rgba(87, 16, 131, 0.5)',
              'rgba(87, 16, 131, 0.5)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        responsive: true, // ウィンドウのサイズによってグラフの大きさが変わるか
        scale: {
            ticks: {
            suggestedMax: 5,
            suggestedMin: 0,
            stepSize: 1,
          }
        },
        legend: {
            display: false,
          }
      }
  }
},
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
