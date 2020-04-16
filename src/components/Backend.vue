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
              'rgba(15, 136, 57, 0.5)',
              'rgba(15, 136, 57, 0.5)',
              'rgba(15, 136, 57, 0.5)',
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
          },
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
