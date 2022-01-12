require('dotenv');
const { expect, requester } = require('./set_up');

describe('mask test', async () => {
    it('masks sold by a given pharmacy, sorted by mask price', async () => {
        const res = await requester
            .get('/api/1.0/masks?pharmacy=test_pharmacy_2&sort=price')
        const data = res.body.data;
        expect(data.length).to.equal(3);
        const maskExpected = {
            mask_name: "test_mask_2 (green) (3 per pack)",
            pharmacy_name: "test_pharmacy_2",
            piece: 3,
            price: "3.65"
        }
        expect(data[0]).to.deep.equalInAnyOrder(maskExpected);
    });

    it('masks sold by a given pharmacy, sorted by mask name', async () => {
        const res = await requester
            .get('/api/1.0/masks?pharmacy=test_pharmacy_2&sort=name')
        const data = res.body.data;
        expect(data.length).to.equal(3);
        const maskExpected = {
            mask_name: "test_mask_2 (green) (3 per pack)",
            pharmacy_name: "test_pharmacy_2",
            piece: 3,
            price: "3.65"
        }

        expect(data[0]).to.deep.equalInAnyOrder(maskExpected);
    });

    it('masks sold by a given pharmacy, not given sort parameter', async () => {
        const res = await requester
            .get('/api/1.0/masks?pharmacy=test_pharmacy_2')
        const data = res.body.data;
        expect(data.length).to.equal(3);
        const maskExpected = {
            mask_name: "test_mask_2 (green) (3 per pack)",
            pharmacy_name: "test_pharmacy_2",
            piece: 3,
            price: "3.65"
        }

        expect(data[0]).to.deep.equalInAnyOrder(maskExpected);
    });

    it('masks sold, not given pharmacy, sorted by mask price', async () => {
        const res = await requester
            .get('/api/1.0/masks?sort=price')
        const data = res.body.data;
        expect(data.length).to.equal(5);
        const maskExpected = {
            mask_name: "test_mask_2 (green) (3 per pack)",
            pharmacy_name: "test_pharmacy_1",
            piece: 3,
            price: "2.65"
        }

        expect(data[0]).to.deep.equalInAnyOrder(maskExpected);
    });

    it('masks sold by a given pharmacy, pharmacy name does not exist', async () => {
        const res = await requester
            .get('/api/1.0/masks?pharmacy=anything')
        const data = res.body.data;
        expect(data.length).to.equal(0);
    });

    it('masks sold, not given any parameter', async () => {
        const res = await requester
            .get('/api/1.0/masks')
        const data = res.body.data;
        expect(data.length).to.equal(5);
    });


});
