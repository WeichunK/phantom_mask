API Doc
# Phantom-Mask-API-Doc

### Host Name



### API Version

1.0

### Response Object

* `Opening Hour Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| pharmacy_name | String |  Pharmacy's name |
| day | String | Week day |
| open | String | Opening time |
| close | String | Closing time |

* `Mask Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| mask_name | String |  Mask's name |
| pharmacy_name | String | Pharmacy's name|
| piece | Integer | Pieces per pack |
| price | String | Price of mask |

* `Pharmacy product count Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| pharmacy_name | String | Pharmacy's name |
| product_count | Integer | The number of product that fulfill query parameters|

* `User Transaction Amount Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| user_name | String | User's name |
| amount | String | The amount of transactions of the user within given date range|


* `Transaction Statistics Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| quantity | String | Total pieces of masks of transactions within given date range |
| amount | String | The amount of transactions within given date range|


* `Search Mask Result Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| id | Integer | Id of mask |
| mask_name | String |  Mask's name |
| pharmacy_name | String | Pharmacy's name|
| piece | Integer | Pieces per pack |
| price | String | Price of mask|


* `Search Pharmacy Result Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| pharmacy_name | String | Pharmacy's name|
| cash_balance | String | Cash_balance of pharmacy |


* `Transaction Object`

| Field | Type | Description |
| :---: | :---: | :--- |
| id | Integer | Id of Transaction |
| user_name | String |  User's name |
| pharmacy_name | String | Pharmacy's name|
| mask_name | String |  Mask's name |
| piece | Integer | Pieces per pack |
| transaction_amount | String | Amount of transaction|
| transaction_date | String | Date of transaction|


---

### Opening Hours API

* **End Point:** `/pharmacies/openinghours`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| day | String | mon/tue/wed/thu/fri/sat/sun |
| time | String | format: HH:MM |


* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/pharmacies/openinghours?day=Sun&time=14:00`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `Opening Hour Object`. |

* **Success Response Example:**

```
{
  "data": [
    {
      "pharmacy_name":"Pill Pack",
      "day":"Sun",
      "open":"01:39:00",
      "close":"16:59:00"
    },
    {
      "pharmacy_name":"Neighbors",
      "day":"Sun",
      "open":"00:02:00",
      "close":"16:40:00"
      }
    ]
 
}
```


* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

---

### Masks API

* **End Point:** `/masks`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| pharmacy | String | Pharmacy name |
| sort | String | maskname (default) or price |


* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/masks?pharmacy=Heartland Pharmacy&sort=price`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `Mask Object`. |

* **Success Response Example:**

```
{
  "data": [
    {
      "mask_name":"Free to Roam (black) (3 per pack)",
      "pharmacy_name":"Heartland Pharmacy",
      "piece":3,
      "price":"5.31"
    },
    {
      "mask_name":"Second Smile (green) (6 per pack)",
      "pharmacy_name":"Heartland Pharmacy",
      "piece":6,
      "price":"11.89"
      }
      ]
}
```


* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |


---


### Pharmacy Inventories within Price Range API

* **End Point:** `/pharmacies/query`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| lowest | String | lowest price (included) |
| highest | String | highest price (not included) |
| over | String | minimum number of product (not included)|
| under | String | maximum number of product (not included)|


* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/pharmacies/query?lowest=10&highest=13&over=1&under=3`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `Pharmacy Product Count Object`. |

* **Success Response Example:**

```
{
    "data":[
    {
        "pharmacy_name":"Drug Blend",
        "product_count":2
    },
    {
        "pharmacy_name":"Thrifty Way Pharmacy",
        "product_count":2
    }
    ]
}
```


* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |



---


### Top X Users API

* **End Point:** `/transactions/users`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| start | String | start date (included) |
| end | String | end date (not included) |
| limit | String | the number of top X users|


* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/transactions/users?start=2021-01-02&end=2021-01-04&limit=3`
`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `User Transaction Amount Object`. |

* **Success Response Example:**

```
{
    "data":[
        {
            "user_name":"Tamara Dean",
            "amount":"28.52"
        },
        {
            "user_name":"Mindy Perkins",
            "amount":"24.44"
        },
        {
            "user_name":"Jo Barton",
            "amount":"13.04"
        },
        ]
}

```


* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |



---

### Transactions within Date Range API


* **End Point:** `/transactions/daterange`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| start | String | start date (included) |
| end | String | end date (not included) |


* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/transactions/daterange?start=2021-01-02&end=2021-01-10`
`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `Transaction Statistics Object`. |

* **Success Response Example:**

```
{
    "data":[
        {
            "quantity":"175",
            "amount":"560.64"
        }
        ]
}

```


* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |



---

### Search Mask API


* **End Point:** `/search/mask`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| keywords | String | separated by space |

* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/search/mask?keywords=Free to Roam black`
`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `Search Mask Result Object`. |

* **Success Response Example:**

```
{
    "data":[
        {
            "id":3,"mask_name":"Free to Roam (black) (3 per pack)",
            "pharmacy_name":"Cash Saver Pharmacy",
            "piece":3,
            "price":"13.83"
        },
        {
            "id":13,"mask_name":"Free to Roam (black) (10 per pack)",
            "pharmacy_name":"MedSavvy",
            "piece":10,
            "price":"26.54"
        }
    ]
}
```

* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

* **Wrong Request Error Response: 400**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

---


### Search Pharmacy API


* **End Point:** `/search/pharmacy`

* **Method:** `GET`

* **Query Parameters**

| Field | Type | Description |
| :---: | :---: | :--- |
| keywords | String | separated by space |

* **Request Example:**

  `http://[HOST_NAME]/api/[API_VERSION]/search/pharmacy?keywords=drugs`
`

* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Array | Array of `Search Pharmacy Result Object`. |

* **Success Response Example:**

```
{
  "data":[
    {
      "pharmacy_name":"Atlas Drugs",
      "cash_balance":"785.02"
      },
    {
      "pharmacy_name":"Discount Drugs",
      "cash_balance":"753.18"
      }
      ]
}
```

* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

* **Wrong Request Error Response: 400**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

---


### Purchase Mask API


* **End Point:** `/transactions`

* **Method:** `POST`

* **Request Body**

| Field | Type | Description |
| :---: | :---: | :--- |
| userName | String | separated by space |
| maskName | String | separated by space |
| pharmacyName | String | separated by space |

* **Request Body Example:**

```
  {
    "userName": "Eula Wheeler",
    "maskName": "Masquerade (black) (10 per pack)",
    "pharmacyName": "MedSavvy"
  }
```


* **Success Response: 200**

| Field | Type | Description |
| :---: | :---: | :--- |
| data | Object | `Transaction Object`. |

* **Success Response Example:**

```
{
    "data": {
        "transaction": {
            "id": 100,
            "user_name": "Eula Wheeler",
            "pharmacy_name": "MedSavvy",
            "mask_name": "Masquerade (black) (10 per pack)",
            "piece":10,
            "transaction_amount": "19.54",
            "transaction_date": "2022-01-10T05:37:48.000Z"
        }
    }
}
```


* **Server Error Response: 500**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

* **Wrong Request Body Error Response: 400**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

* **Not Enough Cash Error Response: 403**

| Field | Type | Description |
| :---: | :---: | :--- |
| error | String | Error message. |

---