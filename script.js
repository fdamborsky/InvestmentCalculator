// Vybrání hodnot sliderů a 
const InitialMoneySlider = document.querySelector("#FirstSlider");
const InitialMoneyValue = document.querySelector("#FirstInput");

const AnnualIncomeSlider = document.querySelector("#SecondSlider");
const AnnualIncomeValue = document.querySelector("#SecondInput");

const YearlyReturnValue = document.querySelector("#ThirdInput")
const YearlyReturnSlider = document.querySelector("#ThirdSlider")

const YearsofInvestingvalue = document.querySelector('#ForthInput')
const YearsofInvestingslider = document.querySelector('#ForthSlider')

const InvestedMoneyTEXT = document.querySelector('.InvestedMoney')
const CompoundMoneyTEXT = document.querySelector('.CompoundMoney')
const FinalMoneyTEXT = document.querySelector('.FinalMoney')

InitialMoneyValue.addEventListener("click", function(event){
    InitialMoneyValue.value = ""
})
InitialMoneyValue.addEventListener("change", function(event){
    if ((isNaN(InitialMoneyValue.value)) || InitialMoneyValue.value < 0 || InitialMoneyValue.value > 10000000000){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)
    }
    count()
    drawChart()
})

AnnualIncomeValue.addEventListener("click", function(event){
    AnnualIncomeValue.value = ""
})
AnnualIncomeValue.addEventListener("change", function(event){
    if ((isNaN(AnnualIncomeValue.value)) || AnnualIncomeValue.value < 0 || AnnualIncomeValue.value > 10000000000){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)
    }
    count()
    drawChart()
})

YearlyReturnValue.addEventListener("click", function(event){
    YearlyReturnValue.value = ""
})
YearlyReturnValue.addEventListener("input", function(event){
    if ((isNaN(YearlyReturnValue.value)) || YearlyReturnValue.value < 0){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)    
    }
    count()
    drawChart()
})

YearsofInvestingvalue.addEventListener("click", function(event){
    YearsofInvestingvalue.value = ""
})
YearsofInvestingvalue.addEventListener("change", function(event){
    if ((isNaN(YearsofInvestingvalue.value)) || YearsofInvestingvalue.value < 0){
        setTimeout(() =>  alert('Zadané číslo není platné'), 0)    
    }
    count()
    drawChart()
})

count()
drawChart()
