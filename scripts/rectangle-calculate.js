/**
 * objectives: get width,length of a rectangle.Calculate the area by using provided formula and display the area
 * step-1: get width value
 * step-2: added an id in the width input field
 * step-3: use getElementById to acces the input field
 * step-4: get value from the input field (value is string now)
 * step-5: convert the value to a number use parseFloat
 */
function rectangleCalculation(){
    // get width value
     const rectangleWidth=document.getElementById('rectangle-width');
     const rectangleText=rectangleWidth.value;
     const width=parseFloat(rectangleText);
    //  console.log( width);

    // get length
    const rectangleLength=document.getElementById('rectangle-length');
    const rectangleText2=rectangleLength.value;
    const length=parseFloat(rectangleText2);
    
    // Area calculation
    const area=width*length;
    // console.log('Area of rectangle:',area);

    const spanCalculationArea=document.getElementById('span-calculation-area');
    spanCalculationArea.innerText=area;

}