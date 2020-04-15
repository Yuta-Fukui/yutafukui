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
              'rgba(87, 16, 131, 0.5)'
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.5)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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
      }
    }
  }
},
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
