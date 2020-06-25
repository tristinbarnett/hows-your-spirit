
const db = require("../models");
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/users"
);

exports.seedUsers = function seedUsers() {
    db.Users.find({}).exec(function (err, collection) {
        if (collection.length > 0) {
            db.Users
                .remove({})
                .create({
                    email: "testSeed@test.com",
                    password: "test"
                });
        }
    });
}

exports.seedEntries = function seedEntries() {

    db.Entries.find({}).exec(function (err, collection) {
        if (collection.length > 0) {
            // db.Entries
            //     .remove({})
            seedEntries('testSeed@test.com', {
                date: "June 1, 2020",
                emotions: [{ x: -1, y: -1, weight: 4 }],
                factors: {
                    exercise: true,
                    "get 8 hours of sleep": false,
                    "drink alcohol": false,
                }
            });
            seedEntries('test@test.com', {
                date: "June 2, 2020",
                emotions: [
                    { x: 2, y: 2, weight: 3 },
                    { x: -1, y: 2, weight: 1 },
                ],
                factors: {
                    exercise: true,
                    "get 8 hours of sleep": true,
                    "drink alcohol": false,
                }
            });
            seedEntries('test@test.com', {
                date: "June 3, 2020",
                emotions: [
                    { x: 1, y: 2, weight: 1 },
                    { x: -2, y: 2, weight: 1 },
                    { x: 2, y: 2, weight: 1 },
                ],
                factors: {
                    exercise: false,
                    "get 8 hours of sleep": false,
                    "drink alcohol": true,
                },
            });
        }
    });

    function seedEntries(userEmail, userEntry) {
        var parentUser;
        db.Users.findOne({ email: userEmail }).exec()
            .then(function (user) {
                parentUser = user;
                //do i need to drill down each entry piece?
                return db.Entries.create({ entry: userEntry });
            }).then(function (entries) {
                parentUser.entries.push(entries._id);
                parentUser.save(function (saveError) {
                    if (!saveError) {
                        console.log("Seeded article");
                    } else {
                        console.log(saveError);
                    }
                });
            });
    }
}


// const userSeed = [
//     {
//         email: "test@test.com",
//         password: "test",
//         entries: [
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'Entries'
//             }
//         ]
//     }

// ];

// const entrySeed = [
//     {
//         date: "June 1, 2020",
//         emotions: [{ x: -1, y: -1, weight: 4 }],
//         factors: {
//             exercise: true,
//             "get 8 hours of sleep": false,
//             "drink alcohol": false,
//         },
// ];

// {
//     date: "June 1, 2020",
//         emotions: [{ x: -1, y: -1, weight: 4 }],
//             factors: {
//         exercise: true,
//             "get 8 hours of sleep": false,
//                 "drink alcohol": false,
// 	},
// };
// const dayTwo = {
//     date: "June 2, 2020",
//     emotions: [
//         { x: 2, y: 2, weight: 3 },
//         { x: -1, y: 2, weight: 1 },
//     ],
//     factors: {
//         exercise: true,
//         "get 8 hours of sleep": true,
//         "drink alcohol": false,
//     },
// };
// const dayThree = {
//     date: "June 3, 2020",
//     emotions: [
//         { x: 1, y: 2, weight: 1 },
//         { x: -2, y: 2, weight: 1 },
//         { x: 2, y: 2, weight: 1 },
//     ],
//     factors: {
//         exercise: false,
//         "get 8 hours of sleep": false,
//         "drink alcohol": true,
//     },
// };
// const dayFour = {
//     date: "June 4, 2020",
//     emotions: [
//         { x: 1, y: 2, weight: 3 },
//         { x: -2, y: 1, weight: 1 },
//     ],
//     factors: {
//         exercise: false,
//         "get 8 hours of sleep": false,
//         "drink alcohol": false,
//     },
// };



// db.Users
//     .remove({})
//     .then(() => db.Users.collection.insertMany(userSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

// db.Entries
//     .remove({})
//     .then(() => db.Entries.collection.insertMany(entrySeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });