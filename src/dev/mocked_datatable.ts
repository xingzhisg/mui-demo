const customers = [
  {
    customer_id: 1,
    first_name: "Ezri",
    last_name: "Crump",
    email: "ecrump0@telegraph.co.uk",
    phone_number: "674-552-2990",
    birthdate: "12/25/1975",
    address: "0686 Shelley Hill",
    city: "Rathwire",
    state: null,
    country: "Ireland",
  },
  {
    customer_id: 2,
    first_name: "Carin",
    last_name: "Workman",
    email: "cworkman1@a8.net",
    phone_number: "663-552-9428",
    birthdate: "10/21/1983",
    address: "46826 Village Road",
    city: "Port-à-Piment",
    state: null,
    country: "Haiti",
  },
  {
    customer_id: 3,
    first_name: "Yevette",
    last_name: "Lintott",
    email: "ylintott2@geocities.com",
    phone_number: "924-700-6413",
    birthdate: "8/25/2003",
    address: "6895 Lighthouse Bay Alley",
    city: "Fier",
    state: null,
    country: "Albania",
  },
  {
    customer_id: 4,
    first_name: "Ofelia",
    last_name: "Millions",
    email: "omillions3@myspace.com",
    phone_number: "682-312-0058",
    birthdate: "12/20/1989",
    address: "1 Banding Point",
    city: "Fort Worth",
    state: "Texas",
    country: "United States",
  },
  {
    customer_id: 5,
    first_name: "Paule",
    last_name: "Gunny",
    email: "pgunny4@google.de",
    phone_number: "536-941-0673",
    birthdate: "1/1/1970",
    address: "558 Knutson Avenue",
    city: "Macabugos",
    state: null,
    country: "Philippines",
  },
  {
    customer_id: 6,
    first_name: "Jemimah",
    last_name: "Gilmartin",
    email: "jgilmartin5@miibeian.gov.cn",
    phone_number: "296-117-9049",
    birthdate: "1/27/1982",
    address: "2 Stuart Trail",
    city: "Shinyanga",
    state: null,
    country: "Tanzania",
  },
  {
    customer_id: 7,
    first_name: "Helge",
    last_name: "Dumphry",
    email: "hdumphry6@theglobeandmail.com",
    phone_number: "910-273-9739",
    birthdate: "8/5/1981",
    address: "64 Armistice Alley",
    city: "Bucay",
    state: null,
    country: "Philippines",
  },
  {
    customer_id: 8,
    first_name: "Hy",
    last_name: "Klemt",
    email: "hklemt7@ucsd.edu",
    phone_number: "761-423-7981",
    birthdate: "1/17/1983",
    address: "92 Cambridge Terrace",
    city: "Gimbi",
    state: null,
    country: "Ethiopia",
  },
  {
    customer_id: 9,
    first_name: "Mozelle",
    last_name: "Kinzel",
    email: "mkinzel8@rakuten.co.jp",
    phone_number: "344-568-1119",
    birthdate: "8/11/1987",
    address: "446 Bowman Terrace",
    city: "Aleksandrovac",
    state: null,
    country: "Serbia",
  },
  {
    customer_id: 10,
    first_name: "Northrop",
    last_name: "Mulhall",
    email: "nmulhall9@webs.com",
    phone_number: "207-658-4606",
    birthdate: "4/11/1951",
    address: "1 Ryan Place",
    city: "Czarnożyły",
    state: null,
    country: "Poland",
  },
  {
    customer_id: 11,
    first_name: "Sven",
    last_name: "Astlett",
    email: "sastletta@oracle.com",
    phone_number: "179-968-1725",
    birthdate: "4/9/1999",
    address: "85 Sycamore Trail",
    city: "Piraí",
    state: null,
    country: "Brazil",
  },
  {
    customer_id: 12,
    first_name: "Kathy",
    last_name: "Janus",
    email: "kjanusb@geocities.com",
    phone_number: "682-385-7708",
    birthdate: "6/1/1999",
    address: "92 Basil Court",
    city: "Uripa",
    state: null,
    country: "Peru",
  },
  {
    customer_id: 13,
    first_name: "Carroll",
    last_name: "Lippingwell",
    email: "clippingwellc@washington.edu",
    phone_number: "523-779-8735",
    birthdate: "8/9/1992",
    address: "26532 Golf Course Road",
    city: "Kao Liao",
    state: null,
    country: "Thailand",
  },
  {
    customer_id: 14,
    first_name: "Kurt",
    last_name: "Rowden",
    email: "krowdend@creativecommons.org",
    phone_number: "572-252-0990",
    birthdate: "5/10/1992",
    address: "404 Orin Hill",
    city: "Khoroshëvo-Mnevniki",
    state: null,
    country: "Russia",
  },
  {
    customer_id: 15,
    first_name: "Sharia",
    last_name: "Vaillant",
    email: "svaillante@yandex.ru",
    phone_number: "720-962-4425",
    birthdate: "12/21/1977",
    address: "17 East Park",
    city: "Golek",
    state: null,
    country: "Indonesia",
  },
  {
    customer_id: 16,
    first_name: "Vanni",
    last_name: "Robinet",
    email: "vrobinetf@webs.com",
    phone_number: "217-412-4846",
    birthdate: "5/21/1953",
    address: "8742 John Wall Trail",
    city: "Lagunillas",
    state: "Jalisco",
    country: "Mexico",
  },
  {
    customer_id: 17,
    first_name: "Billie",
    last_name: "MacCorkell",
    email: "bmaccorkellg@netvibes.com",
    phone_number: "674-628-3396",
    birthdate: "9/22/1958",
    address: "1971 Eastlawn Road",
    city: "Lacroix-Saint-Ouen",
    state: "Picardie",
    country: "France",
  },
  {
    customer_id: 18,
    first_name: "Nertie",
    last_name: "Gipps",
    email: "ngippsh@arstechnica.com",
    phone_number: "852-162-6075",
    birthdate: "3/13/1973",
    address: "7 Buena Vista Junction",
    city: "Hualongyan",
    state: null,
    country: "China",
  },
  {
    customer_id: 19,
    first_name: "Annabell",
    last_name: "Shackesby",
    email: "ashackesbyi@theglobeandmail.com",
    phone_number: "355-337-5732",
    birthdate: "11/12/2002",
    address: "0 Morning Pass",
    city: "Liucheng",
    state: null,
    country: "China",
  },
  {
    customer_id: 20,
    first_name: "Gerhardine",
    last_name: "Sackett",
    email: "gsackettj@amazon.de",
    phone_number: "410-249-1167",
    birthdate: "4/8/1984",
    address: "8158 Old Gate Way",
    city: "Twardogóra",
    state: null,
    country: "Poland",
  },
  {
    customer_id: 21,
    first_name: "Consuelo",
    last_name: "MacMorland",
    email: "cmacmorlandk@geocities.jp",
    phone_number: "458-814-9347",
    birthdate: "11/27/1960",
    address: "6488 Golden Leaf Crossing",
    city: "Heshan",
    state: null,
    country: "China",
  },
  {
    customer_id: 22,
    first_name: "Edgar",
    last_name: "Vernazza",
    email: "evernazzal@hp.com",
    phone_number: "504-650-9439",
    birthdate: "8/10/1995",
    address: "2604 1st Point",
    city: "Dingchang",
    state: null,
    country: "China",
  },
  {
    customer_id: 23,
    first_name: "Alexander",
    last_name: "Reely",
    email: "areelym@etsy.com",
    phone_number: "598-171-1761",
    birthdate: "2/6/2003",
    address: "40237 Algoma Terrace",
    city: "Mauloo",
    state: null,
    country: "Indonesia",
  },
  {
    customer_id: 24,
    first_name: "Rosemaria",
    last_name: "Barthelet",
    email: "rbartheletn@wired.com",
    phone_number: "759-561-3421",
    birthdate: "11/21/1990",
    address: "9112 Shelley Junction",
    city: "Lope de Vega",
    state: null,
    country: "Philippines",
  },
  {
    customer_id: 25,
    first_name: "Rodrique",
    last_name: "Coolson",
    email: "rcoolsono@freewebs.com",
    phone_number: "317-752-2372",
    birthdate: "7/20/1974",
    address: "908 Fieldstone Way",
    city: "Pangushan",
    state: null,
    country: "China",
  },
];

const transactions = [
  {
    trade_id: 1,
    stock_symbol: "VLY",
    quantity: 843,
    purchase_price: 933.8,
    sale_price: 193.7,
    purchase_date: "8/19/2012",
    sale_date: "11/29/2016",
    profit: -740.1,
    transaction_type: "Cover",
    brokerage_fee: 91.81,
  },
  {
    trade_id: 2,
    stock_symbol: "CERCW",
    quantity: 8627,
    purchase_price: 710.48,
    sale_price: 472.06,
    purchase_date: "1/19/2006",
    sale_date: "10/19/2017",
    profit: -238.42,
    transaction_type: "Short",
    brokerage_fee: 67.66,
  },
  {
    trade_id: 3,
    stock_symbol: "GILT",
    quantity: 3961,
    purchase_price: 404.04,
    sale_price: 903.69,
    purchase_date: "7/7/2013",
    sale_date: "4/10/2010",
    profit: 499.65,
    transaction_type: "Sell",
    brokerage_fee: 19.88,
  },
  {
    trade_id: 4,
    stock_symbol: "CLRBW",
    quantity: 9237,
    purchase_price: 304.18,
    sale_price: 694.3,
    purchase_date: "12/30/2008",
    sale_date: "10/16/2022",
    profit: 390.12,
    transaction_type: "Buy",
    brokerage_fee: 11.18,
  },
  {
    trade_id: 5,
    stock_symbol: "DWTR",
    quantity: 8403,
    purchase_price: 337.76,
    sale_price: 583.51,
    purchase_date: "7/24/2008",
    sale_date: "4/11/2020",
    profit: 245.75,
    transaction_type: "Short",
    brokerage_fee: 18.06,
  },
  {
    trade_id: 6,
    stock_symbol: "EBR.B",
    quantity: 2834,
    purchase_price: 836.85,
    sale_price: 201.65,
    purchase_date: "5/5/2021",
    sale_date: "11/6/2000",
    profit: -635.2,
    transaction_type: "Short",
    brokerage_fee: 52.44,
  },
  {
    trade_id: 7,
    stock_symbol: "DS",
    quantity: 4626,
    purchase_price: 792.11,
    sale_price: 943.5,
    purchase_date: "6/5/2005",
    sale_date: "8/26/2017",
    profit: 151.39,
    transaction_type: "Short",
    brokerage_fee: 7.46,
  },
  {
    trade_id: 8,
    stock_symbol: "BSD",
    quantity: 8903,
    purchase_price: 834.64,
    sale_price: 346.48,
    purchase_date: "8/16/2010",
    sale_date: "12/9/2007",
    profit: -488.16,
    transaction_type: "Buy",
    brokerage_fee: 99.99,
  },
  {
    trade_id: 9,
    stock_symbol: "NOVN",
    quantity: 6880,
    purchase_price: 535.72,
    sale_price: 194.7,
    purchase_date: "1/17/2018",
    sale_date: "11/23/2001",
    profit: -341.02,
    transaction_type: "Cover",
    brokerage_fee: 11.6,
  },
  {
    trade_id: 10,
    stock_symbol: "LOR",
    quantity: 6588,
    purchase_price: 794.38,
    sale_price: 397.19,
    purchase_date: "8/30/2022",
    sale_date: "6/28/2010",
    profit: -397.19,
    transaction_type: "Cover",
    brokerage_fee: 28.7,
  },
  {
    trade_id: 11,
    stock_symbol: "SNAK",
    quantity: 7027,
    purchase_price: 460.15,
    sale_price: 693.7,
    purchase_date: "8/28/2016",
    sale_date: "10/5/2008",
    profit: 233.55,
    transaction_type: "Sell",
    brokerage_fee: 21.52,
  },
  {
    trade_id: 12,
    stock_symbol: "SNE",
    quantity: 9453,
    purchase_price: 556.5,
    sale_price: 290.77,
    purchase_date: "2/5/2010",
    sale_date: "2/22/2000",
    profit: -265.73,
    transaction_type: "Buy",
    brokerage_fee: 1.67,
  },
  {
    trade_id: 13,
    stock_symbol: "MPX",
    quantity: 630,
    purchase_price: 385.56,
    sale_price: 511.34,
    purchase_date: "6/15/2005",
    sale_date: "12/19/2017",
    profit: 125.78,
    transaction_type: "Sell",
    brokerage_fee: 70.46,
  },
  {
    trade_id: 14,
    stock_symbol: "JONE",
    quantity: 3515,
    purchase_price: 486.96,
    sale_price: 945.33,
    purchase_date: "2/27/2005",
    sale_date: "8/1/2006",
    profit: 458.37,
    transaction_type: "Cover",
    brokerage_fee: 27.37,
  },
  {
    trade_id: 15,
    stock_symbol: "ED",
    quantity: 9645,
    purchase_price: 891.69,
    sale_price: 411.6,
    purchase_date: "11/8/2008",
    sale_date: "8/19/2012",
    profit: -480.09,
    transaction_type: "Short",
    brokerage_fee: 2.6,
  },
  {
    trade_id: 16,
    stock_symbol: "IIIN",
    quantity: 244,
    purchase_price: 691.17,
    sale_price: 421.28,
    purchase_date: "1/25/2013",
    sale_date: "2/14/2006",
    profit: -269.89,
    transaction_type: "Sell",
    brokerage_fee: 52.12,
  },
  {
    trade_id: 17,
    stock_symbol: "DYN.WS",
    quantity: 3884,
    purchase_price: 515.19,
    sale_price: 155.35,
    purchase_date: "1/7/2009",
    sale_date: "3/11/2014",
    profit: -359.84,
    transaction_type: "Sell",
    brokerage_fee: 46.99,
  },
  {
    trade_id: 18,
    stock_symbol: "EMP",
    quantity: 2605,
    purchase_price: 119.77,
    sale_price: 563.26,
    purchase_date: "5/16/2013",
    sale_date: "3/20/2004",
    profit: 443.49,
    transaction_type: "Short",
    brokerage_fee: 85.72,
  },
  {
    trade_id: 19,
    stock_symbol: "KTF",
    quantity: 9874,
    purchase_price: 666.06,
    sale_price: 359.9,
    purchase_date: "6/21/2006",
    sale_date: "4/19/2017",
    profit: -306.16,
    transaction_type: "Short",
    brokerage_fee: 4.87,
  },
  {
    trade_id: 20,
    stock_symbol: "AIG.WS",
    quantity: 9636,
    purchase_price: 906.33,
    sale_price: 845.67,
    purchase_date: "6/4/2005",
    sale_date: "7/22/2005",
    profit: -60.66,
    transaction_type: "Sell",
    brokerage_fee: 66.42,
  },
  {
    trade_id: 21,
    stock_symbol: "FCAU",
    quantity: 6850,
    purchase_price: 593.0,
    sale_price: 375.1,
    purchase_date: "2/24/2018",
    sale_date: "11/5/2010",
    profit: -217.9,
    transaction_type: "Cover",
    brokerage_fee: 42.55,
  },
  {
    trade_id: 22,
    stock_symbol: "STAY",
    quantity: 4919,
    purchase_price: 764.68,
    sale_price: 810.11,
    purchase_date: "1/12/2004",
    sale_date: "11/26/2014",
    profit: 45.43,
    transaction_type: "Short",
    brokerage_fee: 21.54,
  },
  {
    trade_id: 23,
    stock_symbol: "LKOR",
    quantity: 9354,
    purchase_price: 391.66,
    sale_price: 32.1,
    purchase_date: "4/3/2009",
    sale_date: "10/31/2018",
    profit: -359.56,
    transaction_type: "Short",
    brokerage_fee: 18.24,
  },
  {
    trade_id: 24,
    stock_symbol: "DSU",
    quantity: 6809,
    purchase_price: 20.1,
    sale_price: 157.32,
    purchase_date: "2/23/2019",
    sale_date: "1/30/2006",
    profit: 137.22,
    transaction_type: "Buy",
    brokerage_fee: 82.54,
  },
  {
    trade_id: 25,
    stock_symbol: "PSET",
    quantity: 8081,
    purchase_price: 606.29,
    sale_price: 213.46,
    purchase_date: "2/27/2010",
    sale_date: "1/5/2014",
    profit: -392.83,
    transaction_type: "Short",
    brokerage_fee: 60.81,
  },
];

const shopping_malls = [
  {
    mall_name: "Babbleopia",
    location: "Suite 94",
    opening_hours: "7:31 AM",
    number_of_shops: 29,
    parking_spaces: 176,
    average_daily_visitors: 1048,
    anchor_store: "Macy's",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "Low",
  },
  {
    mall_name: "Rhybox",
    location: "4th Floor",
    opening_hours: "8:32 AM",
    number_of_shops: 165,
    parking_spaces: 433,
    average_daily_visitors: 2858,
    anchor_store: "Nordstrom",
    food_court: true,
    entertainment_options: "Movie Theater",
    security_level: "Low",
  },
  {
    mall_name: "Dynabox",
    location: "Room 614",
    opening_hours: "8:29 AM",
    number_of_shops: 83,
    parking_spaces: 82,
    average_daily_visitors: 2991,
    anchor_store: "Macy's",
    food_court: false,
    entertainment_options: "Movie Theater",
    security_level: "High",
  },
  {
    mall_name: "Thoughtworks",
    location: "PO Box 43524",
    opening_hours: "10:27 PM",
    number_of_shops: 117,
    parking_spaces: 318,
    average_daily_visitors: 361,
    anchor_store: "Nordstrom",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "Medium",
  },
  {
    mall_name: "Yakitri",
    location: "Room 264",
    opening_hours: "12:56 AM",
    number_of_shops: 165,
    parking_spaces: 127,
    average_daily_visitors: 1035,
    anchor_store: "Target",
    food_court: false,
    entertainment_options: "Bowling Alley",
    security_level: "Medium",
  },
  {
    mall_name: "Oyoloo",
    location: "Room 106",
    opening_hours: "8:02 AM",
    number_of_shops: 159,
    parking_spaces: 242,
    average_daily_visitors: 4861,
    anchor_store: "Target",
    food_court: false,
    entertainment_options: "Bowling Alley",
    security_level: "Medium",
  },
  {
    mall_name: "Feednation",
    location: "6th Floor",
    opening_hours: "4:46 PM",
    number_of_shops: 124,
    parking_spaces: 181,
    average_daily_visitors: 1372,
    anchor_store: "Target",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "Low",
  },
  {
    mall_name: "Myworks",
    location: "Apt 867",
    opening_hours: "10:54 PM",
    number_of_shops: 78,
    parking_spaces: 486,
    average_daily_visitors: 2739,
    anchor_store: "Nordstrom",
    food_court: true,
    entertainment_options: "Bowling Alley",
    security_level: "Medium",
  },
  {
    mall_name: "BlogXS",
    location: "Apt 283",
    opening_hours: "3:37 AM",
    number_of_shops: 139,
    parking_spaces: 137,
    average_daily_visitors: 286,
    anchor_store: "Macy's",
    food_court: false,
    entertainment_options: "Movie Theater",
    security_level: "Medium",
  },
  {
    mall_name: "Feedmix",
    location: "Suite 45",
    opening_hours: "7:18 AM",
    number_of_shops: 111,
    parking_spaces: 128,
    average_daily_visitors: 1695,
    anchor_store: "Nordstrom",
    food_court: false,
    entertainment_options: "Arcade",
    security_level: "High",
  },
  {
    mall_name: "Midel",
    location: "PO Box 6356",
    opening_hours: "11:34 PM",
    number_of_shops: 31,
    parking_spaces: 260,
    average_daily_visitors: 2088,
    anchor_store: "Nordstrom",
    food_court: false,
    entertainment_options: "Arcade",
    security_level: "High",
  },
  {
    mall_name: "Kwimbee",
    location: "Suite 11",
    opening_hours: "11:28 AM",
    number_of_shops: 43,
    parking_spaces: 139,
    average_daily_visitors: 3665,
    anchor_store: "Nordstrom",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "High",
  },
  {
    mall_name: "Gigazoom",
    location: "Room 1361",
    opening_hours: "1:30 AM",
    number_of_shops: 54,
    parking_spaces: 63,
    average_daily_visitors: 2638,
    anchor_store: "Nordstrom",
    food_court: true,
    entertainment_options: "Movie Theater",
    security_level: "Low",
  },
  {
    mall_name: "Cogilith",
    location: "Room 622",
    opening_hours: "11:01 PM",
    number_of_shops: 74,
    parking_spaces: 341,
    average_daily_visitors: 4954,
    anchor_store: "Target",
    food_court: false,
    entertainment_options: "Arcade",
    security_level: "Low",
  },
  {
    mall_name: "Jabbersphere",
    location: "PO Box 58821",
    opening_hours: "4:08 AM",
    number_of_shops: 78,
    parking_spaces: 487,
    average_daily_visitors: 4400,
    anchor_store: "Target",
    food_court: false,
    entertainment_options: "Arcade",
    security_level: "Medium",
  },
  {
    mall_name: "Vinder",
    location: "PO Box 4115",
    opening_hours: "7:07 PM",
    number_of_shops: 184,
    parking_spaces: 200,
    average_daily_visitors: 3771,
    anchor_store: "Macy's",
    food_court: false,
    entertainment_options: "Bowling Alley",
    security_level: "Medium",
  },
  {
    mall_name: "Vipe",
    location: "Suite 94",
    opening_hours: "10:05 PM",
    number_of_shops: 107,
    parking_spaces: 325,
    average_daily_visitors: 2517,
    anchor_store: "Nordstrom",
    food_court: false,
    entertainment_options: "Bowling Alley",
    security_level: "Low",
  },
  {
    mall_name: "Zoozzy",
    location: "Suite 8",
    opening_hours: "1:24 AM",
    number_of_shops: 49,
    parking_spaces: 329,
    average_daily_visitors: 2003,
    anchor_store: "Nordstrom",
    food_court: true,
    entertainment_options: "Bowling Alley",
    security_level: "Low",
  },
  {
    mall_name: "Aimbo",
    location: "Room 1529",
    opening_hours: "4:56 PM",
    number_of_shops: 189,
    parking_spaces: 242,
    average_daily_visitors: 3600,
    anchor_store: "Target",
    food_court: true,
    entertainment_options: "Bowling Alley",
    security_level: "Low",
  },
  {
    mall_name: "Innojam",
    location: "Apt 668",
    opening_hours: "6:01 PM",
    number_of_shops: 115,
    parking_spaces: 178,
    average_daily_visitors: 2124,
    anchor_store: "Target",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "Medium",
  },
  {
    mall_name: "Oozz",
    location: "11th Floor",
    opening_hours: "8:45 AM",
    number_of_shops: 55,
    parking_spaces: 293,
    average_daily_visitors: 972,
    anchor_store: "Macy's",
    food_court: false,
    entertainment_options: "Arcade",
    security_level: "Medium",
  },
  {
    mall_name: "Youtags",
    location: "PO Box 66615",
    opening_hours: "11:14 AM",
    number_of_shops: 148,
    parking_spaces: 426,
    average_daily_visitors: 2847,
    anchor_store: "Macy's",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "Low",
  },
  {
    mall_name: "Gabcube",
    location: "Apt 1165",
    opening_hours: "10:20 AM",
    number_of_shops: 19,
    parking_spaces: 186,
    average_daily_visitors: 2251,
    anchor_store: "Macy's",
    food_court: true,
    entertainment_options: "Bowling Alley",
    security_level: "High",
  },
  {
    mall_name: "Oodoo",
    location: "Apt 1435",
    opening_hours: "3:45 AM",
    number_of_shops: 155,
    parking_spaces: 274,
    average_daily_visitors: 3381,
    anchor_store: "Target",
    food_court: true,
    entertainment_options: "Arcade",
    security_level: "Medium",
  },
  {
    mall_name: "Podcat",
    location: "Room 1106",
    opening_hours: "4:14 AM",
    number_of_shops: 40,
    parking_spaces: 477,
    average_daily_visitors: 1407,
    anchor_store: "Nordstrom",
    food_court: false,
    entertainment_options: "Movie Theater",
    security_level: "Low",
  },
];

const airports = [
  {
    airport_code: "BCA",
    airport_name: "Gustavo Rizo Airport",
    country_code: "PL",
    region_code: "D",
    latitude: 54.2787562,
    longitude: 18.5760979,
    elevation_feet: 12454,
    municipality: "Straszyn",
    continent: "Europe",
    gps_code: "ABC",
  },
  {
    airport_code: "BJE",
    airport_name: "Baleela Airport",
    country_code: "CZ",
    region_code: "C",
    latitude: 50.0644155,
    longitude: 14.4200237,
    elevation_feet: 12907,
    municipality: "Vysehrad",
    continent: "Africa",
    gps_code: "GHI",
  },
  {
    airport_code: "ILM",
    airport_name: "Wilmington International Airport",
    country_code: "JP",
    region_code: "B",
    latitude: 36.3798483,
    longitude: 139.1107678,
    elevation_feet: 8184,
    municipality: "Maebashi-shi",
    continent: "Europe",
    gps_code: "ABC",
  },
  {
    airport_code: "BLD",
    airport_name: "Boulder City Municipal Airport",
    country_code: "PT",
    region_code: "A",
    latitude: 40.7655059,
    longitude: -8.5555429,
    elevation_feet: 7969,
    municipality: "Estarreja",
    continent: "Africa",
    gps_code: "ABC",
  },
  {
    airport_code: "MNJ",
    airport_name: "Mananjary Airport",
    country_code: "US",
    region_code: "B",
    latitude: 40.5944059,
    longitude: -74.0711359,
    elevation_feet: 14671,
    municipality: "Staten Island",
    continent: "North America",
    gps_code: "GHI",
  },
  {
    airport_code: "SBF",
    airport_name: "Sardeh Band Airport",
    country_code: "CN",
    region_code: "C",
    latitude: 31.566634,
    longitude: 112.279737,
    elevation_feet: 10038,
    municipality: "Kongwan",
    continent: "Europe",
    gps_code: "DEF",
  },
  {
    airport_code: "LUP",
    airport_name: "Kalaupapa Airport",
    country_code: "CO",
    region_code: "D",
    latitude: 4.517444,
    longitude: -74.790311,
    elevation_feet: 5474,
    municipality: "Guataquí",
    continent: "Africa",
    gps_code: "GHI",
  },
  {
    airport_code: "VRI",
    airport_name: "Varandey Airport",
    country_code: "BG",
    region_code: "B",
    latitude: 41.9310069,
    longitude: 25.5327587,
    elevation_feet: 5008,
    municipality: "Zlatograd",
    continent: "Europe",
    gps_code: "ABC",
  },
  {
    airport_code: "YZR",
    airport_name: "Chris Hadfield Airport",
    country_code: "CN",
    region_code: "A",
    latitude: 29.391849,
    longitude: 118.031547,
    elevation_feet: 11671,
    municipality: "Xiaoqi",
    continent: "Africa",
    gps_code: "ABC",
  },
  {
    airport_code: "KAX",
    airport_name: "Kalbarri Airport",
    country_code: "ID",
    region_code: "D",
    latitude: -9.7934897,
    longitude: 124.4319309,
    elevation_feet: 6115,
    municipality: "Nunsena",
    continent: "Africa",
    gps_code: "DEF",
  },
  {
    airport_code: "FLI",
    airport_name: "Holt Airport",
    country_code: "ID",
    region_code: "D",
    latitude: -7.256,
    longitude: 108.3155,
    elevation_feet: 12829,
    municipality: "Cukanguncal",
    continent: "Africa",
    gps_code: "DEF",
  },
  {
    airport_code: "KDO",
    airport_name: "Kadhdhoo Airport",
    country_code: "CN",
    region_code: "D",
    latitude: 24.9372186,
    longitude: 118.6422409,
    elevation_feet: 13442,
    municipality: "Huaqiao",
    continent: "Asia",
    gps_code: "DEF",
  },
  {
    airport_code: "RTI",
    airport_name: "David Constantijn Saudale Airport",
    country_code: "CN",
    region_code: "D",
    latitude: 37.070834,
    longitude: 114.504677,
    elevation_feet: 10936,
    municipality: "Xingtai",
    continent: "Europe",
    gps_code: "ABC",
  },
  {
    airport_code: "NMP",
    airport_name: "New Moon Airport",
    country_code: "ID",
    region_code: "B",
    latitude: -8.7458539,
    longitude: 121.8505679,
    elevation_feet: 7575,
    municipality: "Koanara",
    continent: "Asia",
    gps_code: "GHI",
  },
  {
    airport_code: "KKR",
    airport_name: "Kaukura Airport",
    country_code: "PE",
    region_code: "A",
    latitude: -10.4911471,
    longitude: -76.5155834,
    elevation_feet: 4535,
    municipality: "Yanahuanca",
    continent: "North America",
    gps_code: "ABC",
  },
  {
    airport_code: "LKA",
    airport_name: "Gewayentana Airport",
    country_code: "CN",
    region_code: "B",
    latitude: 22.8311155,
    longitude: 113.2516686,
    elevation_feet: 13462,
    municipality: "Fengsheng",
    continent: "North America",
    gps_code: "GHI",
  },
  {
    airport_code: "SGR",
    airport_name: "Sugar Land Regional Airport",
    country_code: "SI",
    region_code: "B",
    latitude: 45.9536011,
    longitude: 14.8386368,
    elevation_feet: 13255,
    municipality: "Šentvid pri Stični",
    continent: "Asia",
    gps_code: "ABC",
  },
  {
    airport_code: "OHR",
    airport_name: "Wyk auf Föhr Airport",
    country_code: "CO",
    region_code: "B",
    latitude: 4.5943745,
    longitude: -74.0740729,
    elevation_feet: 14817,
    municipality: "Candelaria",
    continent: "Africa",
    gps_code: "GHI",
  },
  {
    airport_code: "KTV",
    airport_name: "Kamarata Airport",
    country_code: "CN",
    region_code: "B",
    latitude: 28.564189,
    longitude: 111.271014,
    elevation_feet: 11718,
    municipality: "Guniushan",
    continent: "Asia",
    gps_code: "DEF",
  },
  {
    airport_code: "KGF",
    airport_name: "Sary-Arka Airport",
    country_code: "TH",
    region_code: "A",
    latitude: 13.5167584,
    longitude: 99.9541293,
    elevation_feet: 2261,
    municipality: "Damnoen Saduak",
    continent: "North America",
    gps_code: "ABC",
  },
  {
    airport_code: "LCL",
    airport_name: "La Coloma Airport",
    country_code: "CN",
    region_code: "A",
    latitude: 48.1973404,
    longitude: 16.3587247,
    elevation_feet: 13669,
    municipality: "Zhongxin",
    continent: "North America",
    gps_code: "ABC",
  },
  {
    airport_code: "TRU",
    airport_name:
      "Capitan FAP Carlos Martinez De Pinillos International Airport",
    country_code: "MA",
    region_code: "A",
    latitude: 33.8153704,
    longitude: -6.0573302,
    elevation_feet: 961,
    municipality: "Khemisset",
    continent: "North America",
    gps_code: "DEF",
  },
  {
    airport_code: "YBH",
    airport_name: "Bull Harbour Water Aerodrome",
    country_code: "MX",
    region_code: "A",
    latitude: 19.75,
    longitude: -104.016667,
    elevation_feet: 816,
    municipality: "El Limon",
    continent: "Europe",
    gps_code: "GHI",
  },
  {
    airport_code: "OMR",
    airport_name: "Oradea International Airport",
    country_code: "KR",
    region_code: "B",
    latitude: 37.7838437,
    longitude: 126.283172,
    elevation_feet: 2777,
    municipality: "Gyodong",
    continent: "North America",
    gps_code: "GHI",
  },
  {
    airport_code: "BWI",
    airport_name:
      "Baltimore/Washington International Thurgood Marshall Airport",
    country_code: "PT",
    region_code: "D",
    latitude: 38.1661758,
    longitude: -7.888224,
    elevation_feet: 7267,
    municipality: "Cuba",
    continent: "Asia",
    gps_code: "GHI",
  },
];

const mocked_data_records: any = {
  broker: {
    customers: {
      meta: {
        schema: "broker",
        table: "customers",
        primary_keys: ["customer_id"],
        columns: [
          "customer_id",
          "first_name",
          "last_name",
          "email",
          "phone_number",
          "birthdate",
          "address",
          "city",
          "state",
          "country",
        ],
      },
      records: customers,
    },
    transactions: {
      meta: {
        schema: "broker",
        table: "transactions",
        primary_keys: ["trade_id"],
        columns: [
          "trade_id",
          "stock_symbol",
          "quantity",
          "purchase_price",
          "sale_price",
          "purchase_date",
          "sale_date",
          "profit",
          "transaction_type",
          "brokerage_fee",
        ],
      },
      records: transactions,
    },
  },
  POI: {
    shopping_malls: {
      meta: {
        schema: "POI",
        table: "shopping_malls",
        primary_keys: ["mall_name"],
        columns: [
          "mall_name",
          "location",
          "opening_hours",
          "number_of_shops",
          "parking_spaces",
          "average_daily_visitors",
          "anchor_store",
          "food_court",
          "entertainment_options",
          "security_level",
        ],
      },
      records: shopping_malls,
    },
    airports: {
      meta: {
        schema: "POI",
        table: "airports",
        primary_keys: ["airport_code"],
        columns: [
          "airport_code",
          "airport_name",
          "country_code",
          "region_code",
          "latitude",
          "longitude",
          "elevation_feet",
          "municipality",
          "continent",
          "gps_code",
        ],
      },
      records: airports,
    },
  },
};

export default mocked_data_records;