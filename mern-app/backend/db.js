const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://noorjahanpp786:ABCDabcd@cluster0.dcftkxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongodb = async() =>{
        mongoose.connect(mongoURI, { useNewUrlParsel: true }, async (err, result) => {
                if (err) console.log("....", err);
                else {

                        console.log("CONNECTED");
                        const fetched_data = await mongoose.connection.db.collection("foods");
                        fetched_data.find({}).toArray(async function (err, data) {
                                const foodCategory = await mongoose.connection.db.collection("foodcategory");
                                foodCategory.find({}).toArray(function (err, catData) {
                                        if (err) console.log(err);
                                        else {
                                                global.foods = data;
                                        }

                                });


                        }
                        );

                }
        })
}
module.exports=mongodb;