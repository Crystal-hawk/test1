<template>
  <div id="app">
    <h1>Калькулятор високосных годов</h1>
    <div>
      <label for="startYear">Введите первый год:</label>
      <input type="number" v-model="startYear" id="startYear" />
    </div>
    <div>
      <label for="endYear">Введите последний год:</label>
      <input type="number" v-model="endYear" id="endYear" />
    </div>
    <button @click="calculateLeapYears">Рассчитать</button>

    <div v-if="leapYears.length > 0">
      <h2>Високосные годы:</h2>
      <ul>
        <li v-for="year in leapYears" :key="year">{{ year }}</li>
      </ul>
      <p>Всего високосных годов: {{ leapYears.length }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startYear: '',
      endYear: '',
      leapYears: [],
    };
  },
  methods: {
    calculateLeapYears() {
      this.leapYears = []; 
      const start = parseInt(this.startYear);
      const end = parseInt(this.endYear);

      if (isNaN(start) || isNaN(end) || start > end) {
        alert('Пожалуйста, введите корректные года.');
        return;
      }

      for (let year = start; year <= end; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          this.leapYears.push(year);
        }
      }
    },
  },
};
</script>
