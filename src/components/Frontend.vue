<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Frontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Frontend',
            data: [],
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
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      const frontInfo = this.$store.getters.getSkills('Frontend')
      frontInfo.skill.forEach((skill) => {
        this.data.labels.push(skill.name)
        this.data.datasets[0].data.push(skill.score)
      })
    },
  }
}
</script>
