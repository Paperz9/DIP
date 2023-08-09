/*
En Promise er et objekt, der repræsenterer en værdi, der muligvis er tilgængelig nu, senere eller aldrig.
Promises bruges til at arbejde med asynkrone operationer på en mere struktureret måde.
En Promise har tre mulige tilstande: "pending" (afventende), "fulfilled" (opfyldt) eller "rejected" (afvist).
*/

function gaetTalISyttenTabel() {
    return new Promise(function (resolve, reject) {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 2001);
            if (randomNumber % 17 === 0) {
                resolve(randomNumber);
            } else {
                reject(new Error('Ikke OK'));
            }
        }, delay);
    });
}

async function proevTreGange(nr) {
    const promises = [];
    for (let i = 0; i < nr; i++) {
        promises.push(gaetTalISyttenTabel());
    }
    return Promise.any(promises);
}

// gaetTalISyttenTabel()
//     .then(resultat => {
//         console.log('Talet går op i 17: ' + resultat);
//     })
//     .catch(error => {
//         console.log('Talet går ikke op i 17: ' + error);
//     })

proevTreGange(10)
    .then((resultat) => {
        console.log('Talet går op i 17: ' + resultat);
    })
    .catch((error) => {
        console.log('Talet går ikke op i 17: ' + error);
    });