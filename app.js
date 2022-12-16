


let outputScreen = document.getElementById("outputscreen")
function display(num){
    outputScreen.value += num
}


function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value 
    .slice(0,-2)
}
function calculate() {
    if (outputScreen.value == '' || outputScreen.value == undefined) {
      outputScreen.value = '0';
      return;
    }
  
    try {
      outputScreen.value = eval(outputScreen.value);
    } catch (err) {
      console.log('error', outputScreen.value);
      alert('error');
    }
  }
