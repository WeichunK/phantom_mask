require('dotenv');
const { expect, requester } = require('./set_up');

describe('transaction test', async () => {
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
        expect(Object.keys(data).length).to.equal(6);
        const postTransactionExpected = {
            id: 4,
            user_name: "test_User_1",
            pharmacy_name: "test_pharmacy_1",
            mask_name: "test_mask_1 (blue) (10 per pack)",
            transaction_amount: 33.65,

        }
        expect(data.id).to.equal(postTransactionExpected.id);
        expect(data.user_name).to.equal(postTransactionExpected.user_name);
        expect(data.pharmacy_name).to.equal(postTransactionExpected.pharmacy_name);
        expect(data.mask_name).to.equal(postTransactionExpected.mask_name);
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