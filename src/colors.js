

const rootColors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
];

function getRandomColors(){
    const colors = []
    let color1 = '#'
    let color2 = '#'
    let color3 = '#'
    let color4 = '#'
    let color5 = '#'
    for (let i = 0; i < 6; i++) {
        const randomNumber1 = Math.trunc(Math.random() * rootColors.length)
        const randomNumber2 = Math.trunc(Math.random() * rootColors.length)
        const randomNumber3 = Math.trunc(Math.random() * rootColors.length)
        const randomNumber4 = Math.trunc(Math.random() * rootColors.length)
        const randomNumber5 = Math.trunc(Math.random() * rootColors.length)
        color1 += rootColors[randomNumber1]
        color2 += rootColors[randomNumber2]
        color3 += rootColors[randomNumber3]
        color4 += rootColors[randomNumber4]
        color5 += rootColors[randomNumber5]
    }
    colors.push(color1)
    colors.push(color2)
    colors.push(color3)
    colors.push(color4)
    colors.push(color5)
    return colors   
}


export { getRandomColors };