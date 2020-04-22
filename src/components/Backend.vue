<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Backend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Backend',
            data: [],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)'
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
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      const frontInfo = this.$store.getters.getSkills('Backend')
      frontInfo.skill.forEach((skill) => {
        this.data.labels.push(skill.name)
        this.data.datasets[0].data.push(skill.score)
      })
    },
  }
}
</script>
