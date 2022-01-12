require('dotenv');
const { expect, requester } = require('./set_up');

describe('transaction test', async () => {

    it('transactions within daterange', async () => {
        const res = await requester
            .get('/api/1.0/transactions/daterange?start=2021-01-03&end=2021-01-04')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const statisticExpected = {
            quantity: "13",
            amount: "37.30"
        }
        expect(data[0]).to.deep.equalInAnyOrder(statisticExpected);
    });

    it('transactions within daterange, result is zero', async () => {
        const res = await requester
            .get('/api/1.0/transactions/daterange?start=2021-01-04&end=2021-01-10')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const statisticExpected = {
            quantity: "0",
            amount: "0"
        }
        expect(data[0]).to.deep.equalInAnyOrder(statisticExpected);
    });

    it('transactions within daterange, only given start', async () => {
        const res = await requester
            .get('/api/1.0/transactions/daterange?start=2021-01-03')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const statisticExpected = {
            quantity: "13",
            amount: "37.30"
        }
        expect(data[0]).to.deep.equalInAnyOrder(statisticExpected);
    });

    it('transactions within daterange, only given end', async () => {
        const res = await requester
            .get('/api/1.0/transactions/daterange?end=2021-01-04')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const statisticExpected = {
            quantity: "23",
            amount: "70.95"
        }
        expect(data[0]).to.deep.equalInAnyOrder(statisticExpected);
    });

    it('transactions within wrong start date', async () => {
        const res = await requester
            .get('/api/1.0/transactions/daterange?start=2021-aa-03&end=2021-01-04')

        expect(res.body.error).to.equal('invalid query parameter');
    });

    it('transactions within wrong end date', async () => {
        const res = await requester
            .get('/api/1.0/transactions/daterange?start=2021-01-03&end=2021-s-a1')

        expect(res.body.error).to.equal('invalid query parameter');
    });

    it('post transaction', async () => {
        const transaction = {
            userName: "test_User_1",
            maskName: "test_mask_1 (blue) (10 per pack)",
            pharmacyName: "test_pharmacy_1"
        }
        const res = await requester
            .post('/api/1.0/transactions')
            .send(transaction);

        const data = res.body.data.transaction;
        expect(Object.keys(data).length).to.equal(7);
        const postTransactionExpected = {
            id: 4,
            user_name: "test_User_1",
            pharmacy_name: "test_pharmacy_1",
            mask_name: "test_mask_1 (blue) (10 per pack)",
            piece: 10,
            transaction_amount: 33.65,

        }
        expect(data.id).to.equal(postTransactionExpected.id);
        expect(data.user_name).to.equal(postTransactionExpected.user_name);
        expect(data.pharmacy_name).to.equal(postTransactionExpected.pharmacy_name);
        expect(data.mask_name).to.equal(postTransactionExpected.mask_name);
        expect(data.piece).to.equal(postTransactionExpected.piece);
        expect(Date.parse(data.transaction_date)).to.be.closeTo(Date.now(), 1000);
    });

    it('wrong user', async () => {
        const transaction = {
            userName: "test_User_99",
            maskName: "test_mask_1 (blue) (10 per pack)",
            pharmacyName: "test_pharmacy_1"
        }
        const res = await requester
            .post('/api/1.0/transactions')
            .send(transaction);

        const data = res.body;
        const postTransactionExpected = {
            error: "invalid user name!",

        }
        expect(data.error).to.equal(postTransactionExpected.error);
    });

    it('wrong mask name', async () => {
        const transaction = {
            userName: "test_User_1",
            maskName: "wrong test_mask_1 (blue) (10 per pack)",
            pharmacyName: "test_pharmacy_1"
        }
        const res = await requester
            .post('/api/1.0/transactions')
            .send(transaction);

        const data = res.body;
        const postTransactionExpected = {
            error: "invalid mask name or pharmacy name!",

        }
        expect(data.error).to.equal(postTransactionExpected.error);
    });

    it('wrong pharmacy name', async () => {
        const transaction = {
            userName: "test_User_1",
            maskName: "test_mask_1 (blue) (10 per pack)",
            pharmacyName: "wrong test_pharmacy_1"
        }
        const res = await requester
            .post('/api/1.0/transactions')
            .send(transaction);

        const data = res.body;
        const postTransactionExpected = {
            error: "invalid mask name or pharmacy name!",

        }
        expect(data.error).to.equal(postTransactionExpected.error);
    });

    it('not enough cash', async () => {
        const transaction = {
            userName: "test_User_2",
            maskName: "test_mask_1 (blue) (10 per pack)",
            pharmacyName: "test_pharmacy_1"
        }
        const res = await requester
            .post('/api/1.0/transactions')
            .send(transaction);
        const data = res.body;
        const postTransactionExpected = {
            error: "not enough cash!",
        }
        expect(data.error).to.equal(postTransactionExpected.error);
    });

});