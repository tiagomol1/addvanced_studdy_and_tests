
function test(){
    [1,2,3,4,5,6,7,8,9,10].forEach(number => {
        console.log(number)
    })
    return
}

const measure = () => {
    console.time('test()')
    test()
    console.timeEnd('test()')
}

measure()