const fs = require('fs');
const pharmacies = JSON.parse(fs.readFileSync("./data/pharmacies.json"));
const users = JSON.parse(fs.readFileSync("./data/users.json"));

let pharmacyData = []
let maskData = []
let openingHourData = []
let transactionData = []
let userData = []
const weekIdx = { 'Mon': 0, 'Tue': 1, 'Wed': 2, 'Thu': 3, 'Fri': 4, 'Sat': 5, 'Sun': 6 }
const weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

for (let i in pharmacies) {
    pharmacyData.push({ pharmacyName: pharmacies[i].name, cashBalance: pharmacies[i].cashBalance })
    let openingHours = pharmacies[i].openingHours.split(' / ')

    for (let j in openingHours) {
        let openingTimes = openingHours[j].match(/([0-9]+:[0-9]+)/g)
        let openingDays = []
        if (openingHours[j].match(/([A-Z][a-z]+ - [A-Z][a-z]+)/g)) {
            let openingDaysArray = openingHours[j].match(/([A-Z][a-z]+)/g)
            if (weekIdx[openingDaysArray[1]] < weekIdx[openingDaysArray[0]]) {
                for (let i = weekIdx[openingDaysArray[0]]; i < weekDay.length; i++) {
                    openingDays.push(weekDay[i])
                }
                for (let i = 0; i <= weekIdx[openingDaysArray[1]]; i++) {
                    openingDays.push(weekDay[i])
                }
            } else {
                for (let i = weekIdx[openingDaysArray[0]]; i <= weekIdx[openingDaysArray[1]]; i++) {
                    openingDays.push(weekDay[i])
                }
            }
        } else {
            openingDays = openingHours[j].match(/([A-Z][a-z]+)/g)
        }

        for (let d in openingDays) {
            if (openingTimes[1].replace(':', '') < openingTimes[0].replace(':', '')) {
                let openingHourFirstDay = {}
                openingHourFirstDay.pharmacyName = pharmacies[i].name
                openingHourFirstDay.day = openingDays[d]
                openingHourFirstDay.open = openingTimes[0] + ':00'
                openingHourFirstDay.close = '23:59:59'
                openingHourData.push(openingHourFirstDay)
                // if (pharmacies[i].name == "test") { console.log('openingHourData', openingHourFirstDay) }
                let openingHourSecondDay = {}
                openingHourSecondDay.pharmacyName = pharmacies[i].name
                openingHourSecondDay.day = weekDay[(weekIdx[openingDays[d]] + 1) % 7]
                openingHourSecondDay.open = '00:00:00'
                openingHourSecondDay.close = openingTimes[1] + ':00'
                openingHourData.push(openingHourSecondDay)
                // if (pharmacies[i].name == "test") { console.log('openingHourData', openingHourSecondDay) }
            } else {
                let openingHour = {}
                openingHour.pharmacyName = pharmacies[i].name
                openingHour.day = openingDays[d]
                openingHour.open = openingTimes[0] + ':00'
                openingHour.close = openingTimes[1] + ':00'
                openingHourData.push(openingHour)
                // if (pharmacies[i].name == "test") { console.log('openingHourData', openingHour) }
            }
        }
    }

    for (let m in pharmacies[i].masks) {
        let mask = {
            maskName: pharmacies[i].masks[m].name,
            pharmacyName: pharmacies[i].name,
            piece: parseInt(pharmacies[i].masks[m].name.match(/(\([0-9]+)/g)[0].replace('(', '')),
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
            piece: parseInt(users[i].purchaseHistories[j].maskName.match(/(\([0-9]+)/g)[0].replace('(', '')),
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
