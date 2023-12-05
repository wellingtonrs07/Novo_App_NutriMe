document.addEventListener('DOMContentLoaded' , function(){

    imagem_add = document.querySelector('.imagem_icon')
    imagem_add.addEventListener('click' , function(event){
        lista_lembretes = document.querySelector('.lista_lembretes')
        console.log(lista_lembretes)
        input_add = document.createElement('input')
        input_add.setAttribute('type' , 'text')
       
        
        button_add = document.createElement('button')
        button_add.setAttribute('type' , 'button')
        button_add.textContent = 'Confirmar Mudança?'
        
        lista_lembretes.appendChild(input_add)
        lista_lembretes.appendChild(button_add)

        button_add.addEventListener('click' , function(event){
            texto_novo = input_add.value
            texto_novo = String(texto_novo)
            if (texto_novo.length != 0 ){
                
                lista_lembretes.removeChild(input_add)
                lista_lembretes.removeChild(button_add)
                
                p = document.createElement('p')
                li = document.createElement('li')
                p.textContent = texto_novo
                li.appendChild(p)
                lista_lembretes.appendChild(li)
                
            }
        })
        
    })
    
})