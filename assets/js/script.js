let headsRoll = 0
let tailsRoll = 0


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', () => {
        let flippedHeads = math.random() < 0.5
        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'you flipped heads'
            headsRoll += 1
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'you flipped tails'
            tailsRoll += 1
        }
        let total = headsRoll + tailsRoll
        let percentHeads = 0
        let percentTails = 0
        if (total > 0) {
            percentHeads = math.round((headsRoll / total) * 100)
            percentTails = math.round((tailsRoll / total) * 100)
        }
        document.getElementById('heads').textContent = headsRoll
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRoll
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        headsRoll = 0
        tailsRoll = 0

        document.getElementById('message').textContent = 'Let\'s Get Rolling!'
        let total = headsRoll + tailsRoll
        let percentHeads = 0
        let percentTails = 0
        
        if (total > 0) {
            percentHeads = Math.round((headsRoll / total) * 100)
            percentTails = Math.round((tailsRoll / total) * 100)
        }

        document.getElementById('heads').textContent = headsRoll
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRoll
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})