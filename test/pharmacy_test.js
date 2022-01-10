require('dotenv');
const { expect, requester } = require('./set_up');

describe('pharmacy test', async () => {
    it('pharmacies within price range', async () => {
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

});
