require('dotenv');
const { expect, requester } = require('./set_up');

describe('user test', async () => {
    it('user test within date range', async () => {
        const res = await requester
            .get('/api/1.0/transactions/users?start=2021-01-02&end=2021-01-04&limit=1')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const userExpected = {
            user_name: "test_User_1",
            amount: "37.30"
        }

        expect(data[0]).to.deep.equalInAnyOrder(userExpected);
    });

});