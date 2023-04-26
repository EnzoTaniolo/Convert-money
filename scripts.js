
const button = document.getElementById('convert-button')
// toda vez que usamos esse botão, disparamos um evento de click
const select = document.getElementById('select-currency')
// toda vez que trocamos a informação desse select, disparamos um evento de change

const dolar = 5.05
const euro = 5.54
const btc = 143537.00

// --------------------

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value')


    realValueText.innerHTML = new Intl.NumberFormat('pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(inputReais)

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }
        ).format(inputReais / euro)
    }

    if(select.value === '₿ Bitcoin'){
        currencyValueText.innerHTML = '₿ ' + (inputReais / btc).toFixed(7)
    }

}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/Euro.png'
    }

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/estados-unidos.png'
    }

    if (select.value === '₿ Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }
    convertValues()
}

button.addEventListener('click', convertValues)
// o evento de click, é ouvido aqui
select.addEventListener('change', changeCurrency)
// o evento de change, é ouvido aqui
