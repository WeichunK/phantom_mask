require('dotenv');
const { expect, requester } = require('./set_up');

describe('pharmacy test', async () => {
    it('pharmacies within price range and more than x mask and less than y mask', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?lowest=1&highest=5&over=1&under=3')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_2",
            product_count: 2
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies within price range', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?lowest=1&highest=5')
        const data = res.body.data;
        expect(data.length).to.equal(2);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_1",
            product_count: 1
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies within price range, only given lowest price', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?lowest=1')
        const data = res.body.data;
        expect(data.length).to.equal(2);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_1",
            product_count: 2
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies within price range, only given highest price', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?highest=5')
        const data = res.body.data;
        expect(data.length).to.equal(2);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_2",
            product_count: 2
        }

        expect(data[1]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies with more than x mask and less than y mask', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?over=2&under=4')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_2",
            product_count: 3
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies with more than x mask', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?over=1')
        const data = res.body.data;
        expect(data.length).to.equal(2);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_1",
            product_count: 2
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies with less than y mask', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?under=3')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_1",
            product_count: 2
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('pharmacies not given any parameter', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/all')
        const data = res.body.data;
        expect(data.length).to.equal(2);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_1",
            cash_balance: "466.36"
        }

        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });


    it('pharmacies within price range, wrong query parameter', async () => {
        const res = await requester
            .get('/api/1.0/pharmacies/query?lowest=1&highest=5&over=1&under=aaa')

        expect(res.body.error).to.equal('invalid query parameter');
    });

});
