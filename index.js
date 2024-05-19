const heightEl = document.getElementById("height");

const weightEl = document.getElementById("weight");

const btnEl = document.getElementById("btn");

const bmiResultEL = document.getElementById("bmi-result");

const bodyConditionEl = document.getElementById("body-condition");

function calculateBMI() {
  const heightValue = heightEl.value / 100;
  const weightValue = weightEl.value;

  const BMIValue = weightValue / (heightValue * heightValue);

  bmiResultEL.value = BMIValue;

  // console.log(BMIValue);

  if (BMIValue < 18.5) {
    bodyConditionEl.innerText = "Under Weight";
  } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
    bodyConditionEl.innerText = "Normal Weight";
  } else if (BMIValue >= 24.9 && BMIValue <= 29.9) {
    bodyConditionEl.innerText = "Over Weight";
  } else if (BMIValue >= 29.9) {
    bodyConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
