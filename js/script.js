const form= document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const variavel_Ponto = parseFloat('height');

    const bmi = (weight/(height*height)).toFixed(2);
    const value = document.getElementById('value');

    let description = ''

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) (
        description = 'Você está abaixo do peso ideal.'
    )
    document.getElementById('description').textContent=description;
});