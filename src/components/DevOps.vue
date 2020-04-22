<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'DevOps',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'DevOps',
            data: [],
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
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      const frontInfo = this.$store.getters.getSkills('DevOps')
      frontInfo.skill.forEach((skill) => {
        this.data.labels.push(skill.name)
        this.data.datasets[0].data.push(skill.score)
      })
    },
  }
}
</script>
