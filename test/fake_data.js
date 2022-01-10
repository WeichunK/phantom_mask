const pharmacydata = [
    {
        pharmacyName: "test_pharmacy_1",
        cashBalance: 466.36
    },
    {
        pharmacyName: "test_pharmacy_2",
        cashBalance: 1466.36
    },
];

const maskData = [
    {
        maskName: "test_mask_1 (blue) (10 per pack)",
        pharmacyName: "test_pharmacy_1",
        piece: 10,
        price: 33.65
    },
    {
        maskName: "test_mask_2 (green) (3 per pack)",
        pharmacyName: "test_pharmacy_1",
        piece: 3,
        price: 2.65
    },
    {
        maskName: "test_mask_2 (green) (3 per pack)",
        pharmacyName: "test_pharmacy_2",
        piece: 3,
        price: 3.65
    },
    {
        maskName: "test_mask_2 (red) (10 per pack)",
        pharmacyName: "test_pharmacy_2",
        piece: 10,
        price: 25.65
    },
    {
        maskName: "test_mask_3 (green) (6 per pack)",
        pharmacyName: "test_pharmacy_2",
        piece: 4.8,
        price: 3.65
    },
];

const openingHourData = [
    {
        pharmacyName: "test_pharmacy_1",
        day: "Mon",
        open: "12:56:00",
        close: "21:58:00"
    },
    {
        pharmacyName: "test_pharmacy_1",
        day: "Sun",
        open: "11:22:00",
        close: "23:58:00"
    },
    {
        pharmacyName: "test_pharmacy_2",
        day: "Mon",
        open: "09:00:00",
        close: "13:00:00"
    },
    {
        pharmacyName: "test_pharmacy_3",
        day: "Mon",
        open: "14:00:00",
        close: "22:00:00"
    },
];

const userdata = [
    {
        userName: "Test_User_1",
        cashBalance: 952.69
    },
    {
        userName: "Test_User_2",
        cashBalance: 1.69
    }
];

const transactionData = [
    {
        userName: "test_User_1",
        pharmacyName: "test_pharmacy_1",
        maskName: "test_mask_1 (blue) (10 per pack)",
        piece: 10,
        transactionAmount: 33.65,
        transactionDate: "2021-01-02 20:41:02"
    },
    {
        userName: "test_User_2",
        pharmacyName: "test_pharmacy_1",
        maskName: "test_mask_1 (blue) (10 per pack)",
        piece: 10,
        transactionAmount: 33.65,
        transactionDate: "2021-01-03 12:41:02"
    },
    {
        userName: "test_User_1",
        pharmacyName: "test_pharmacy_2",
        maskName: "test_mask_2 (green) (3 per pack)",
        piece: 3,
        transactionAmount: 3.65,
        transactionDate: "2021-01-03 16:41:02"
    },
];

module.exports = {
    pharmacydata,
    maskData,
    openingHourData,
    userdata,
    transactionData,
};