require('dotenv');
const { expect, requester } = require('./set_up');

describe('openinghours', async () => {
    it('select pharmacies given week day and time', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/openinghours?day=mon&time=12:58');
        const data = res.body.data;
        expect(data.length).to.equal(2);

        const openingHoursExpected = [
            {
                pharmacy_name: "test_pharmacy_1",
                day: "Mon",
                open: "12:56:00",
                close: "21:58:00"
            },
            {
                pharmacy_name: "test_pharmacy_2",
                day: "Mon",
                open: "09:00:00",
                close: "13:00:00"
            },
        ]

        expect(data).to.deep.equalInAnyOrder(openingHoursExpected);
    });

    it('select pharmacies given week day', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/openinghours?day=mon');

        const data = res.body.data;
        expect(data.length).to.equal(3);

        const openingHoursExpected = [
            {
                pharmacy_name: "test_pharmacy_1",
                day: "Mon",
                open: "12:56:00",
                close: "21:58:00"
            },
            {
                pharmacy_name: "test_pharmacy_2",
                day: "Mon",
                open: "09:00:00",
                close: "13:00:00"
            },
            {
                pharmacy_name: "test_pharmacy_3",
                day: "Mon",
                open: "14:00:00",
                close: "22:00:00"
            },
        ]

        expect(data).to.deep.equalInAnyOrder(openingHoursExpected);
    });

    it('select pharmacies given time', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/openinghours?time=12:58');

        const data = res.body.data;
        expect(data.length).to.equal(3);

        const openingHoursExpected = [
            {
                pharmacy_name: "test_pharmacy_1",
                day: "Mon",
                open: "12:56:00",
                close: "21:58:00"
            },
            {
                pharmacy_name: "test_pharmacy_1",
                day: "Sun",
                open: "11:22:00",
                close: "23:58:00"
            },
            {
                pharmacy_name: "test_pharmacy_2",
                day: "Mon",
                open: "09:00:00",
                close: "13:00:00"
            },
        ]

        expect(data).to.deep.equalInAnyOrder(openingHoursExpected);
    });


});