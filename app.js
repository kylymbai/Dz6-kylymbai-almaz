const input = document.getElementById('int')
const words = document.getElementById('words')

const reverseWords = e => {
    if(input.value.trim() === ''){
        return false
    }else {
        let arr = []
        arr.push(input.value)
        arr.map(word => {
            let p = document.createElement('p')
            words.append(p)
            p.append(word.split('').reverse().join(''))
        })
    }
    input.value = ''
}

input.onkeydown = e => {e.keyCode === 13 ? reverseWords() : false}
