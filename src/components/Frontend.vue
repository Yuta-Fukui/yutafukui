<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Frontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue', ],
        datasets: [
          {
            label: 'Frontend',
            data: [4, 3, 3, 2, 3],
            backgroundColor: [
              'rgba(181, 26, 26, 0.25)'
            ],
            borderColor: [
              'rgba(181, 26, 26, 0.5)',
              'rgba(181, 26, 26, 0.5)',
              'rgba(181, 26, 26, 0.5)',
              'rgba(181, 26, 26, 0.5)',
              'rgba(181, 26, 26, 0.5)',
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
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
