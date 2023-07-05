let fs = require("fs")
let num = 1
function readFile(parnName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(parnName, 'utf-8', function (err, data) {
            if (err) {
                reject(err)

            }
            ++num
            resolve(data)

        })
    })
}

let promise = readFile("name.txt")

setTimeout(() => {
    console.log(promise);
}, 5000);
console.log(num);

// promise.then(function (data) {
//     console.log(1, data);
// })