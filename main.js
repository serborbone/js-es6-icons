const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const cardInject = document.getElementById('js-card');

//funzione per creare le i div con le icone
createIcons(cardInject, icons);

function createIcons (cardInject, icons) {
    let cardCreated = '';

    icons.forEach(object => {

        cardCreated += ` 
                        <div class="card color-${object.color}">
                          <i class="${object.family} ${object.prefix}${object.name}"></i>
                          <span>${object.name}</span>
                        </div>
                        `

    });

    //inietto i div con le icone nel div con l'id 'js-card'
    cardInject.innerHTML = cardCreated;

}


const selectType = document.getElementById('select-type');

//creo una funzione che si attivi al cambio di valore del select
selectType.addEventListener('change', function () {

    let selectValue = this.value;

    //se il valore si select è "all"
    if (selectValue == "all") {

        //mostro tutte le icone
        createIcons(cardInject, icons);

    } else {

        //altrimenti filtro le icone per tipo
        const filterIcon = icons.filter(iconElement => {

            if (iconElement.type == selectValue) {
              return true;
            } 
              return false;
        });

        //mostro le icone che hanno lo stesso type del valore selezionato da select
        createIcons(cardInject, filterIcon);
    }

});