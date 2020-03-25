function onOff() { // ouvidor de eventos
        
    document
        .querySelector("#modal")
        .classList //propriedade
        .toggle("hide") //funcao de colocar e tirar o "hide"
    
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")

}