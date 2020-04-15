<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyonRails', 'MySQL'],
        datasets: [
          {
            label: 'Backend',
            data: [2, 4, 3,3],
            backgroundColor: [
              'rgba(15, 136, 57, 0.5)'
            ],
            borderColor: [
              'rgba(15, 136, 57, 0.5)',
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
