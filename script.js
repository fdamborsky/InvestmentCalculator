// Vybrání hodnot sliderů a inputů
const InitialMoneySlider = document.querySelector("#FirstSlider");
const InitialMoneyValue = document.querySelector("#FirstInput");

const AnnualIncomeSlider = document.querySelector("#SecondSlider");
const AnnualIncomeValue = document.querySelector("#SecondInput");

const YearlyReturnValue = document.querySelector("#ThirdInput")
const YearlyReturnSlider = document.querySelector("#ThirdSlider")

const YearsofInvestingvalue = document.querySelector('#ForthInput')
const YearsofInvestingslider = document.querySelector('#ForthSlider')





InitialMoneyValue.addEventListener("click", function(event){
    InitialMoneyValue.value = ""
})
InitialMoneyValue.addEventListener("change", function(event){
    if ((isNaN(InitialMoneyValue.value)) || InitialMoneyValue.value < 0 || InitialMoneyValue.value > 10000000000){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)
    }}
    
)

AnnualIncomeValue.addEventListener("click", function(event){
    AnnualIncomeValue.value = ""
})
AnnualIncomeValue.addEventListener("change", function(event){
    if ((isNaN(AnnualIncomeValue.value)) || AnnualIncomeValue.value < 0 || AnnualIncomeValue.value > 10000000000){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)
    }}
    
)

YearlyReturnValue.addEventListener("click", function(event){
    YearlyReturnValue.value = ""
})
YearlyReturnValue.addEventListener("change", function(event){
    if ((isNaN(YearlyReturnValue.value)) || YearlyReturnValue.value < 0){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)
    }}  
)


const count = () => {
    const initialMoney = Number(InitialMoneyValue.value)
    const annualMoney = Number(AnnualIncomeValue.value)
    const percentage = YearlyReturnValue.value/100
    const MaxYears = Number(YearsofInvestingvalue.value)
    const years = 0
    console.log(initialMoney,annualMoney,percentage,MaxYears)
    for (let years = 1; years <= MaxYears; years++){
    InitialInvestment = initialMoney * (1+percentage)**years
    AnnualInvestment = annualMoney * ((Math.pow((1 + percentage), years) - 1) / percentage) * Math.pow((1 + percentage), (1 - 1 / 12));
    CompleteInvestment = InitialInvestment + AnnualInvestment
    
    InvestmentYearbyYear.push(Math.round(CompleteInvestment))
    console.log(`${years}.rok  ${CompleteInvestment}`)}
}

const InvestmentYearbyYear = []
count()
console.log()

let countX = 10000
for (let y = 1; y <= 30; y++){
    countX = (countX*1.08) + 1000
    console.log(countX)
}


