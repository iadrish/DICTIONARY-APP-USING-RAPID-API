const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ee3fc58aamshb8d18718b9b3b4ep1bef1bjsn2f346ec16d11',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
        .then(response => response.json())
        .then((response) => {
            
            
            
            wordheading.innerHTML=response.word;
            definition.innerHTML= response.definition;
            console.log(word, response)
        
        
        })
        .catch(err => console.error(err));
}


searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value);

})