const fs = require("fs");

ClassifingNewData = (newData, data, file) => {

    // if the new data which is apped is an object with only one 
    if (typeof newData === "object" && typeof newData.length === "undefined") {

        // looping in the keys from data
        for (i in data) {

            //if the key is already included in the data
            if ((i === Object.keys(newData)[0])) {
                // concat the newData and filter unique values
                data[i] = [...new Set(data[i].concat(newData[i]))];
            }
        }

        data = { ...data, ...newData }
        //rewrite the json with the new data
        WriteJSONSync(file, data)
        console.log("Updated JSON file!");

    }
    // if the new data is an array, console a message
    else if (typeof newData.length === "number") {
        console.log("Your Array needs a key!");
    }
}

//Sync the function to don't have problem when it is called more than one time simultanuosly
WriteJSONSync = (file, data) => {
    data = JSON.stringify(data, null, 4);
    fs.writeFileSync(file, data);
};

module.exports.AppendJSON = (file, newData) => {
    //Sync the function to don't have problem when it is called more than one time simultanuosly
    let data = fs.readFileSync(file, "utf8");
    //if the JSON is empty should append {} and callback function
    if (data.length != 0) {
        data = JSON.parse(data);
        ClassifingNewData(newData, data, file);

    } else {
        //json is empty and can not be writen, {} must be added
        WriteJSONSync(file, {});
        this.AppendJSON(file, newData);
    }
}