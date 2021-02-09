

function button(){
        var start =  document.getElementById('start')
        var end = document.getElementById('end')
        var step = document.getElementById('step')
        var text_respost = document.getElementById('result')
        var result = document.getElementById('result')
        var step_start = parseInt(start.value)
        var step_end =  parseInt(end.value)
        var steps = parseInt(step.value)
        if(start.value.lenght == 0 || end.value.lenght == 0 || step.value.lenght == 0 ){
                alert ('[ERRO] Faltam dados!')
        } 
           else{

        
                  result.innerText = 'Contando :'                
                  while(step_start <= step_end){
                  console.log('teste inicio') 
                  step_start += steps
                  result.innerHTML += ` ${step_start} \u{1F449}`
                  console.log(`teste final ${step_start}`)
                   }
                  result.innerHTML += `\u{1F3C1}` 
                              
                }                


}
