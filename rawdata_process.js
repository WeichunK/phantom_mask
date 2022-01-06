const fs = require('fs');
const pharmacies = JSON.parse(fs.readFileSync("./data/pharmacies.json"));
const users = JSON.parse(fs.readFileSync("./data/users.json"));

let pharmacyData = []
let maskData = []
let openingHourData = []
let transactionData = []
let userData = []

for (let i in pharmacies) {
    pharmacyData.push({ pharmacyName: pharmacies[i].name, cashBalance: pharmacies[i].cashBalance })
    let openingHours = pharmacies[i].openingHours.split(' / ')

    for (let j in openingHours) {
        let openingTimes = openingHours[j].match(/([0-9]+:[0-9]+)/g)
        let openingDays = openingHours[j].match(/([A-Z][a-z]+)/g)

        for (let d in openingDays) {
            let openingHour = {}
            openingHour.pharmacyName = pharmacies[i].name
            openingHour.day = openingDays[d]
            openingHour.open = openingTimes[0]
            openingHour.close = openingTimes[1]
            openingHourData.push(openingHour)
        }
    }

    for (let m in pharmacies[i].masks) {
        let mask = {
            maskName: pharmacies[i].masks[m].name,
            pharmacyName: pharmacies[i].name,
            price: pharmacies[i].masks[m].price
        }
        maskData.push(mask)
    }

}

for (let i in users) {
    userData.push({ userName: users[i].name, cashBalance: users[i].cashBalance })

    for (let j in users[i].purchaseHistories) {
        let transaction = {
            userName: users[i].name,
            pharmacyName: users[i].purchaseHistories[j].pharmacyName,
            maskName: users[i].purchaseHistories[j].maskName,
            transactionAmount: users[i].purchaseHistories[j].transactionAmount,
            transactionDate: users[i].purchaseHistories[j].transactionDate
        }
        transactionData.push(transaction)
    }
}

fs.writeFile('./data/pharmacyData.json', JSON.stringify(pharmacyData), (err) => {
    if (err) {
        throw err;
    }
    console.log("pharmacyData is saved.");
});

fs.writeFile('./data/maskData.json', JSON.stringify(maskData), (err) => {
    if (err) {
        throw err;
    }
    console.log("maskData is saved.");
});

fs.writeFile('./data/openingHourData.json', JSON.stringify(openingHourData), (err) => {
    if (err) {
        throw err;
    }
    console.log("openingHourData is saved.");
});

fs.writeFile('./data/transactionData.json', JSON.stringify(transactionData), (err) => {
    if (err) {
        throw err;
    }
    console.log("transactionData is saved.");
});

fs.writeFile('./data/userData.json', JSON.stringify(userData), (err) => {
    if (err) {
        throw err;
    }
    console.log("userData is saved.");
});