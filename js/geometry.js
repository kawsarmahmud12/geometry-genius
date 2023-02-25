//first calculate btn addeventlistener
document.getElementById('first-calculate-btn').addEventListener('click',function(){
   const firstInputFieldElement = document.getElementById('first-input-field');
   const firstInputFieldString = firstInputFieldElement.value;
   const firstInputField = parseFloat(firstInputFieldString);
   
   const secondInputFieldElement = document.getElementById('second-input-field');
   const secondInputFieldString = secondInputFieldElement.value;
   const secondInputField = parseFloat(secondInputFieldString);

  let total = 0.5 * firstInputField * secondInputField;

   console.log(firstInputField,secondInputField,total);
});