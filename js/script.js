const fotoGrande = document.getElementById('fotoGrande')
let corAtual = 'red'
function trocaFoto(img) {
    fotoGrande.src = `assets/${corAtual}-${img}.jpg`
}

function trocaCor(cor) {
    corAtual = cor
    let foto = 1
    while (foto <= 8) {
        let cod = `aj${foto}`
        let mini = document.getElementById(cod)
        mini.src = `assets/thumbs/${corAtual}-${foto}.jpg`
        foto++
    }
    trocaFoto(1)
}

const cores = document.querySelectorAll('.cor')
cores.forEach(cor => {
    cor.addEventListener('click', () => {
        cores.forEach(item => {
            item.classList.remove('ativo')

        })
        cor.classList.add('ativo')
    })
})

