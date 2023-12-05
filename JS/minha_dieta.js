document.addEventListener('DOMContentLoaded', function(){
    botton = document.querySelector('button')
    body = document.querySelector('body')
    Header = document.querySelector('header')
    footer = document.querySelector('footer')
    main = document.querySelector('main')
    section = document.querySelector('.container')
    cria_card = document.querySelector('.novo-card')

    botton.addEventListener('click', function(event){

        if (main.style.backgroundColor != 'gray'){
            main.style.backgroundColor = 'gray'
            footer.style.backgroundColor= 'gray'
            Header.style.backgroundColor = 'gray'
            

            main.style.opacity = '0.3'
            footer.style.opacity = '0.7'
            Header.style.opacity = '0.3'

            cria_card = document.createElement('section')
            cria_card.style.display = 'flex'
            cria_card.style.flexDirection = 'column'
            cria_card.style.position = 'fixed'
            cria_card.style.backgroundColor = 'white'

            cria_card.style.top = '33%'
            cria_card.style.left = '17%'
            cria_card.style.opacity = '1'

            cria_card.style.padding = '2rem'
            cria_card.style.borderRadius = '2rem'
            cria_card.style.border = '.1rem solid black'


            body.appendChild(cria_card)

            nova_div1 = document.createElement('div')
            nova_div1.style.display = 'flex'
            nova_div1.style.flexDirection = 'column'
            nova_div1.style.opacity = '1'
            nova_div1.style.margin = '0.5rem'

            nova_div2 = document.createElement('div')
            nova_div2.style.display = 'flex'
            nova_div2.style.flexDirection = 'column'
            nova_div2.style.margin = '0.5rem'
            
            nova_div3 = document.createElement('div')
            nova_div3.style.display = 'flex'
            nova_div3.style.flexDirection = 'column'
            nova_div3.style.margin = '0.5rem'

            h3Ref = document.createElement('h3')
            h3Ref.style.opacity = '1'
            h3hor = document.createElement('h3')
            h3rec = document.createElement('h3')

            h3Ref.innerHTML = 'Refeição:'
            h3hor.innerHTML = 'Horário:'
            h3rec.innerHTML = 'Receitas:'

            input1 = document.createElement('input')
            input1.type = 'text'

            input2 = document.createElement('input')
            input2.type = 'text'

            input3 = document.createElement('input')
            input3.type = 'text'

            input4 = document.createElement('input')
            input4.type = 'submit'            

            nova_div1.appendChild(h3Ref)
            nova_div1.appendChild(input1)
            
            nova_div2.appendChild(h3hor)
            nova_div2.appendChild(input2)

            nova_div3.appendChild(h3rec)
            nova_div3.appendChild(input3)

            cria_card.appendChild(nova_div1)

            cria_card.appendChild(nova_div2)

            cria_card.appendChild(nova_div3)

            cria_card.appendChild(input4)

            input4.addEventListener('click', function(event){
                refeicao = input1.value
                horario = input2.value
                receita = input3.value

                novo_card = section.cloneNode(true)
                div = novo_card.querySelectorAll('div')
                h2 = div[0].querySelectorAll('h2')
                h2[0].innerHTML = refeicao
                h2[1].innerHTML = 'Horário: ' + horario
                p = div[1].querySelectorAll('p')
                p[1].remove()
                p[2].remove()
                p[0].innerHTML = receita
                p[3].remove()
                main.appendChild(novo_card)


                main.style.opacity = '1'
                footer.style.opacity = '1'
                Header.style.opacity = '1'

                main.style.backgroundColor = '#849CFA'
                footer.style.backgroundColor= 'white'
                Header.style.backgroundColor = 'white'

                cria_card.remove()
                

                
            })
            
        
        }
        


    })

})