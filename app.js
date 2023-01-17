
const input = document.querySelector('.input')

input.addEventListener('change', () => {
    const checked = input.checked
    if(checked) {
        document.querySelector('.price-1').innerText = '$19.99'
        document.querySelector('.price-2').innerText = '$24.99'
        document.querySelector('.price-3').innerText = '$39.99'
    }else {
        document.querySelector('.price-1').innerText = '$199.99'
        document.querySelector('.price-2').innerText = '$249.99'
        document.querySelector('.price-3').innerText = '$399.99'
    }
})