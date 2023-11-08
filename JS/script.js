
//variavis globais

const pokemoName = document.querySelector(".pokemon_name");
const pokemoNumber = document.querySelector(".pokemon_number");
const pokemoImage = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let sarchPokemon = 0;

//conectando com a api
const fetchPokemon = async (pokemon) => {
        const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


        console.log(ApiResponse)

        if (ApiResponse.status === 200) {
                const data = await ApiResponse.json();
                return data

        }




}


//enderizar os dados

const renderPokemon = async (pokemon) => {

        const data = await fetchPokemon(pokemon)

        pokemoName.innerHTML = "...";
        pokemoName.innerHTML = "";


        if (data) {

                pokemoName.innerHTML = data.name;
                pokemoNumber.innerHTML = data.id;
                pokemoImage.src = data["sprites"]["versions"]["generation-v"]['black-white']['animated']['front_default']

        } else {

                pokemoName.innirhtml="nao encontrado:c"
                input.value; 
                pokemoImage.src="";

        }



        console.log(data)


}

//cariturar pokemon pelo imput

form.addEventListener("submit", (event) => {
        event.preventDefault();

        renderPokemon(input.value.toLowerCase());

});

//enventos dos botoes prev e next1


btnNext.addEventListener("click",()=>{

       
        


})

btnPrev.addEventListener("click",()=>{
        if(serchPokemon>1){
                
        }


        sarchPokemon -=1
      renderPokemon(sarchPokemon)

})



renderPokemon(2)