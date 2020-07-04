//dostat sa do adresara seed a spustit: node corona-seeder.js
const coronaModel = require("../models/corona");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Martin:databaza@cluster0-xpiag.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const coronas = [
  {
    datum: "2020-03-07",
    testy: 389,
    pozitivni: 2,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-08",
    testy: 107,
    pozitivni: 2,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-09",
    testy: 45,
    pozitivni: 2,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-10",
    testy: 49,
    pozitivni: 0,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-11",
    testy: 123,
    pozitivni: 3,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-12",
    testy: 119,
    pozitivni: 11,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-13",
    testy: 148,
    pozitivni: 11,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-14",
    testy: 220,
    pozitivni: 12,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-15",
    testy: 236,
    pozitivni: 17,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-16",
    testy: 200,
    pozitivni: 11,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-17",
    testy: 277,
    pozitivni: 25,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-18",
    testy: 225,
    pozitivni: 8,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-19",
    testy: 300,
    pozitivni: 19,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-20",
    testy: 268,
    pozitivni: 14,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-21",
    testy: 450,
    pozitivni: 41,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-22",
    testy: 332,
    pozitivni: 7,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-23",
    testy: 450,
    pozitivni: 19,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-24",
    testy: 476,
    pozitivni: 12,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-25",
    testy: 335,
    pozitivni: 10,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-26",
    testy: 972,
    pozitivni: 43,
    vylieceni: 2,
    umrtia: 0
  },
  {
    datum: "2020-03-27",
    testy: 688,
    pozitivni: 23,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-28",
    testy: 720,
    pozitivni: 22,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-29",
    testy: 401,
    pozitivni: 22,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-03-30",
    testy: 688,
    pozitivni: 27,
    vylieceni: 1,
    umrtia: 1
  },
  {
    datum: "2020-03-31",
    testy: 877,
    pozitivni: 37,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-01",
    testy: 1191,
    pozitivni: 26,
    vylieceni: 2,
    umrtia: 0
  },
  {
    datum: "2020-04-02",
    testy: 1454,
    pozitivni: 24,
    vylieceni: 3,
    umrtia: 0
  },
  {
    datum: "2020-04-03",
    testy: 1889,
    pozitivni: 21,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-04",
    testy: 1524,
    pozitivni: 14,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-05",
    testy: 1036,
    pozitivni: 49,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-06",
    testy: 1448,
    pozitivni: 47,
    vylieceni: 5,
    umrtia: 1
  },
  {
    datum: "2020-04-07",
    testy: 2042,
    pozitivni: 101,
    vylieceni: 3,
    umrtia: 0
  },
  {
    datum: "2020-04-08",
    testy: 1671,
    pozitivni: 19,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-09",
    testy: 2301,
    pozitivni: 14,
    vylieceni: 7,
    umrtia: 0
  },
  {
    datum: "2020-04-10",
    testy: 2174,
    pozitivni: 13,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-11",
    testy: 1580,
    pozitivni: 14,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-12",
    testy: 1446,
    pozitivni: 27,
    vylieceni: 84,
    umrtia: 0
  },
  {
    datum: "2020-04-13",
    testy: 1302,
    pozitivni: 66,
    vylieceni: 0,
    umrtia: 0
  },
  {
    datum: "2020-04-14",
    testy: 1439,
    pozitivni: 28,
    vylieceni: 6,
    umrtia: 0
  },
  {
    datum: "2020-04-15",
    testy: 2967,
    pozitivni: 114,
    vylieceni: 38,
    umrtia: 4
  },
  {
    datum: "2020-04-16",
    testy: 3351,
    pozitivni: 72,
    vylieceni: 16,
    umrtia: 2
  },
  {
    datum: "2020-04-17",
    testy: 3144,
    pozitivni: 40,
    vylieceni: 8,
    umrtia: 1
  },
  {
    datum: "2020-04-18",
    testy: 3323,
    pozitivni: 72,
    vylieceni: 38,
    umrtia: 2
  },
  {
    datum: "2020-04-19",
    testy: 1970,
    pozitivni: 12,
    vylieceni: 16,
    umrtia: 1
  },
  {
    datum: "2020-04-20",
    testy: 2694,
    pozitivni: 26,
    vylieceni: 29,
    umrtia: 2
  },
  {
    datum: "2020-04-21",
    testy: 3468,
    pozitivni: 45,
    vylieceni: 26,
    umrtia: 0
  },
  {
    datum: "2020-04-22",
    testy: 4772,
    pozitivni: 81,
    vylieceni: 4,
    umrtia: 1
  },
  {
    datum: "2020-04-23",
    testy: 3840,
    pozitivni: 35,
    vylieceni: 67,
    umrtia: 2
  },
  {
    datum: "2020-04-24",
    testy: 4828,
    pozitivni: 13,
    vylieceni: 31,
    umrtia: 0
  },
  {
    datum: "2020-04-25",
    testy: 4839,
    pozitivni: 6,
    vylieceni: 8,
    umrtia: 1
  },
  {
    datum: "2020-04-26",
    testy: 3171,
    pozitivni: 2,
    vylieceni: 9,
    umrtia: 0
  },
  {
    datum: "2020-04-27",
    testy: 1767,
    pozitivni: 3,
    vylieceni: 20,
    umrtia: 2
  },
  {
    datum: "2020-04-28",
    testy: 5472,
    pozitivni: 7,
    vylieceni: 61,
    umrtia: 1
  },
  {
    datum: "2020-04-29",
    testy: 4584,
    pozitivni: 5,
    vylieceni: 40,
    umrtia: 2
  },
  {
    datum: "2020-04-30",
    testy: 5150,
    pozitivni: 7,
    vylieceni: 34,
    umrtia: 0
  },
  {
    datum: "2020-05-01",
    testy: 3698,
    pozitivni: 4,
    vylieceni: 50,
    umrtia: 1
  },
  {
    datum: "2020-05-02",
    testy: 1450,
    pozitivni: 1,
    vylieceni: 11,
    umrtia: 0
  },
  {
    datum: "2020-05-03",
    testy: 1584,
    pozitivni: 5,
    vylieceni: 24,
    umrtia: 1
  },
  {
    datum: "2020-05-04",
    testy: 2060,
    pozitivni: 8,
    vylieceni: 98,
    umrtia: 0
  },
  {
    datum: "2020-05-05",
    testy: 4742,
    pozitivni: 8,
    vylieceni: 21,
    umrtia: 0
  },
  {
    datum: "2020-05-06",
    testy: 5200,
    pozitivni: 16,
    vylieceni: 44,
    umrtia: 1
  },
  {
    datum: "2020-05-07",
    testy: 4694,
    pozitivni: 10,
    vylieceni: 99,
    umrtia: 0
  },
  {
    datum: "2020-05-08",
    testy: 3910,
    pozitivni: 0,
    vylieceni: 14,
    umrtia: 0
  },
  {
    datum: "2020-05-09",
    testy: 1488,
    pozitivni: 2,
    vylieceni: 22,
    umrtia: 0
  },
  {
    datum: "2020-05-10",
    testy: 786,
    pozitivni: 0,
    vylieceni: 18,
    umrtia: 0
  },
  {
    datum: "2020-05-11",
    testy: 2063,
    pozitivni: 8,
    vylieceni: 24,
    umrtia: 1
  },
  {
    datum: "2020-05-12",
    testy: 4326,
    pozitivni: 4,
    vylieceni: 77,
    umrtia: 0
  },
  {
    datum: "2020-05-13",
    testy: 4876,
    pozitivni: 8,
    vylieceni: 52,
    umrtia: 0
  }
];

var counter = 0;
for (let item of coronas) {
  new coronaModel(item).save((err, doc) => {
    counter++;
    if (counter === coronas.length) {
      mongoose.disconnect();
    }
  });
}
