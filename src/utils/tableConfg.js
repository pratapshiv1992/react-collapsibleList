export const userTableHeaders = [
    {
        name: "Date",
        sorting: true
    },
    {
        name: "User ID",
    },
    {
        name: "Old value",
    },
    {
        name: "New value",
    }
];


export const projectTableHeaders = [
    {
        name: "Date",
        sorting: true
    },
    {
        name: "Project ID",
    },
    {
        name: "Old value",
    },
    {
        name: "New value",
    }
];




const output = {
    1242362340000: {
        x: 1242362340000,
        points: [20, 10, 6, 11],
        total: 47,
    },
    1242362340001: {
        x: 1242362340001,
        points: [0, 4, 9, 13],
        total: 26,
    },
    1242362340002: {
        x: 1242362340002,
        points: [0, 1, 0, 2],
        total: 3,
    }
};
const input = [
    { data: [[1242362340000, 20]] },
    { data: [[1242362340000, 10], [1242362340001, 4], [1242362340002, 1]] },
    { data: [[1242362340000, 6], [1242362340001, 9]] },
    { data: [[1242362340000, 11], [1242362340001, 13], [1242362340002, 2]] },
];

const responseToTimeseries = (response = []) => {
    const output = {};
    const uniqueKeys = {};
    let uniqueKeysLength = 0;
    let count = 0;

    response.forEach((obj, rootCount) => {
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((arr) => {
                    if(uniqueKeys[arr[0]]){
                        uniqueKeys[arr[0]]['occurence']  = uniqueKeys[arr[0]]['occurence'] +1;
                        uniqueKeys[arr[0]]['points'].push(arr[1]);
                    } else {
                        uniqueKeys[arr[0]]  = {occurence:1, points:[arr[1]]};
                        ++uniqueKeysLength;
                    }
                });
            }
        }
    });

    const responseCopied = JSON.parse(JSON.stringify(response));
    responseCopied.forEach((dataObj, index) => {
        if(dataObj.data.length < uniqueKeysLength){
            dataObj.data.forEach((dataArray)=> {
                for(let uniqueKey in uniqueKeys){
                    dataArray.forEach((chunkArrays)=>{
                        if(chunkArrays[0] != uniqueKey){
                            response[index].data.push([uniqueKey, 0]);
                        }
                    });
                }

            });
        }
    });


//    console.log('------>',uniqueKeys,uniqueKeysLength);
    console.log(response);







    response.forEach((obj) => {
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach((arr) => {
                    if (Array.isArray(arr)) {
                        if(output[arr[0]]){
                            output[arr[0]].points.push(arr[1]);
                            output[arr[0]].total = parseInt(output[arr[0]].total) + parseInt(arr[1]);
                        } else {
                            output[arr[0]] = {
                                x: arr[0],
                                points: [arr[1]],
                                total: arr[1]
                            }
                        }
                    }
                });
            }
        }
    });
    return output;
};

const input3 = [
    { data: [[1242362340000, 20]] },
    { data: [[1242362340000, 10], [1242362340001, 4], [1242362340002, 1]] },
    { data: [[1242362340000, 6],  [1242362340001, 9]] },
    { data: [[1242362340000, 11], [1242362340001, 13], [1242362340002, 2]] },
];


const output3 = {
    1242362340000: {
        x: 1242362340000,
        points: [20, 10, 6, 11],
        total: 47,
    },
    1242362340001: {
        x: 1242362340001,
        points: [0, 4, 9, 13],
        total: 26,
    },
    1242362340002: {
        x: 1242362340002,
        points: [0, 1, 0, 2],
        total: 3,
    }
};

//console.log('------', );
responseToTimeseries(input3)


