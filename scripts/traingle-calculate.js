
/**
 * objectives: get base,height of a tringle.Calculate the area by using provided formula and display the area
 * step-1: get base value
 * step-2: added an id in the base input field
 * step-3: use getElementById to acces the input field
 * step-4: get value from the input field (value is string now)
 * step-5: convert the value to a number use parseFloat
 */


function caculateArea(){
   // get tringle base value
   const triangleBaseInput=document.getElementById('triangle-base');
   const triangleBaseText=triangleBaseInput.value;
   const base=parseFloat(triangleBaseText);
   // console.log( base);

   // get tringle base value
   const triangleHeight=document.getElementById('tringle-height');
   const triangleBaseText2=triangleHeight.value;
   const height=parseFloat(triangleBaseText2);
   // console.log(height);

   // Calculate triangle area
   const area=0.5*base*height;
   // console.log('Area of the triangle is:',area,'square cm'); 

   // display triangle area
   const triangleAreaSpan=document.getElementById('triangle-area');
   triangleAreaSpan.innerText=area;

   // const arearCalculationContainer=document.getElementById('area-calculation-container');
   // arearCalculationContainer.innerText=area;

}