const BMIData = [
    { name: "Underweight", color: "midnightblue", range: [0, 18.5] },
    { name: "Healthy", color: "green", range: [18.5, 25] },
    { name: "Overweight", color: "lightcoral", range: [25, 30] },
    { name: "Moderate obesity", color: "orange", range: [30, 35] },
    { name: "Severe obesity", color: "crimson", range: [35, 40] },
    { name: "Morbid obesity", color: "purple", range: 40 },
  ];



  // Triggering Calculation of BMI with Button ___________________________

  const form = document.querySelector("form");

  form.addEventListener("submit", handleForm);

  function handleForm(event) {

    event.preventDefault();

    calculateBMI();
  }

   // Defining the function calculateBMI() _______________________________

   //get both inputs in the form of a Node List
   const inputs = document.querySelectorAll("input")  
   
   
   function calculateBMI() {

    //get each input
    const height = inputs[0].value;
    const weight = inputs[1].value;

    //handle no-input || false-input scenari
    if (!height || !weight || height<=0 || weight <= 0) {
        handleError();
        return;
    } 

    //Make the actual calculation of a BMI - with 1 decimal.
    const BMI = (weight / Math.pow(height/100, 2)).toFixed(1);
    console.log(BMI)

    //Trigger a further function for the result to show up in the browser
    showResult(BMI);

   }


    // Defining the functions handleError() and showResult()_______________________________

    const displayBMI = document.querySelector(".bmi-value");
    const result = document.querySelector(".result");

    function handleError() {
        displayBMI.textContent="oops...";
        displayBMI.style.color = "inherit";
        result.textContent= "Please fill out both boxes with the appropriate values"
    }


    function showResult(BMI) {
        const rank = BMIData.find(data => {
            if (BMI >= data.range[0] && BMI < data.range[1]) return data;
            else if (typeof data.range === "number" && BMI >= data.range) return data;
        });
        displayBMI.textContent = BMI;
        displayBMI.style.color = `${rank.color}`;
        result.textContent = `Result : ${rank.name}`;
    }