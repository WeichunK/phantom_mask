require('dotenv');
const { expect, requester } = require('./set_up');

describe('search test', async () => {
    it('search pharmacy', async () => {
        const res = await requester
            .get('/api/1.0/search/pharmacy?keywords=test_pharmacy_2')
        const data = res.body.data;
        expect(data.length).to.equal(1);
        const pharmacyExpected = {
            pharmacy_name: "test_pharmacy_2",
            cash_balance: "1466.36"
        }
        expect(data[0]).to.deep.equalInAnyOrder(pharmacyExpected);
    });

    it('search mask', async () => {
        const res = await requester
            .get('/api/1.0/search/mask?keywords=test_mask_2 green')
        const data = res.body.data;
        expect(data.length).to.equal(4);
        const maskExpected =
        {
            id: 2,
            mask_name: "test_mask_2 (green) (3 per pack)",
            pharmacy_name: "test_pharmacy_1",
            piece: 3,
            price: "2.65"
        }

        expect(data[0]).to.deep.equalInAnyOrder(maskExpected);
    });

    it('search empty keyword', async () => {
        const res = await requester
            .get('/api/1.0/search/mask')
        const data = res.body.data;

        expect(data.length).to.equal(0);
    });

});