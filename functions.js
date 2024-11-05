var xValues,yValues
var compoundinterest, initialInvestment, annualInvestment, initialMoney
const count = () => {
  initialMoney = Number(InitialMoneyValue.value)
  const annualMoney = Number(AnnualIncomeValue.value)
  const percentage = YearlyReturnValue.value/100
  const MaxYears = Number(YearsofInvestingvalue.value)
  xValues = [0]
  yValues = [initialMoney]

  for (let i = 1; i <= MaxYears; i++){
      initialInvestment = initialMoney*(1+(percentage/12))**(12*i)
      annualInvestment = initialMoney*((1+(percentage/12))**(12*i)-1)/(percentage/12)
      compoundinterest = initialInvestment + annualInvestment


      initialInvestment = Math.round(initialInvestment)
      annualInvestment = Math.round(annualInvestment)
      compoundinterest = Math.round(compoundinterest)
      xValues.push(i)
      yValues.push(compoundinterest)
  }
  FinalMoneyTEXT.innerHTML = `Celková částka:&ensp;&ensp;<span>${compoundinterest} KČ</span>`
  InvestedMoneyTEXT.innerHTML = `Investovaná částka:&ensp;&ensp;<span>${initialInvestment} KČ</span>`
  CompoundMoneyTEXT.innerHTML = `Obdržený úrok:&ensp;&ensp;<span>${annualInvestment} KČ</span>`
  console.log(FinalMoneyTEXT.innerHTML)
}


let drawChart = () => {
  new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: initialMoney, max: compoundinterest}}],
        }
      }
    });

}



