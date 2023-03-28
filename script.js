const users = 'http://localhost:3000'
fetch(users + '/users')
    .then((res) => res.json())
    .then((res) => reload(res))

function reload(arr) {
    for (let item of arr) {
        let cont = document.querySelector('.container')

        item.forEach(element => {
            let div = document.createElement('div')
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let but = document.createElement('button')
            let btnp = document.createElement('p')

            div.classList.add('item')

            btnp.innerHTML = 'Подробнее'
            p1.innerHTML = element.name
            p2.innerHTML = element.company.bs
            p3.innerHTML = element.company.catchPhrase
            p4.innerHTML = element.company.name
            console.log(element.company);

            cont.append(div)
            but.append(btnp)
            div.append(p1, p2, p3, p4, but)
        });
    }
}
