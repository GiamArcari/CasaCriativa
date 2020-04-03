function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList  
        .toggle("addScroll")
    }


    //validações - fica a dica você deve fazer no FrontEnd e no BackEnd
    //especialmente no BackEnd porque no FrontEnd pode ser que haja algum problema ou alguem
    //consiga uma forma de burlar as regras, MAS, no BackEnd deve haver validação
    //desafio faça validação no BackEnd Boa sorte, agora, vamos valifar o FrontEnd

    function checkFields(event){
        
        const valuesToCheck = [
            "title",
            "image",
            "category",
            "description",
            "link",
        ]

        const isEmpty = valuesToCheck.find(function(value){

            const checkIfIsString = typeof event.target[value].value === "string"
            const checkIfIsEmpty = !event.target[value].value.trim()

            if (checkIfIsString && checkIfIsEmpty){
                return true
            }
        })

        if(isEmpty){
            event.preventDefault()
             alert("Por favor, preencha todos os campos")
        }
    }
