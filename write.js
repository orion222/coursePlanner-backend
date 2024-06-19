/*
    Read the contents of the scraped JSON file
    and parse it to make a new JSON file with additional 
    fields:

    - postreqs field
*/

const fs = require('fs');

const file = fs.readFileSync('dummydata.json')
const data = JSON.parse(file);

const courseToId = new Map()
for (let i = 0; i < data.length; i++){
    courseToId.set(data[i].name, i);
    data[i].postreqs = [];
}
for (const course of data){
    for (const prereq of course.prerequisites){
        data[courseToId.get(prereq)].postreqs.push(course.name);
    }
}

fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8', (err) => {
  if (err) throw err;
  console.log('Data added to file');
});

const update_data = fs.readFileSync('data.json');
const updated_jsonData = JSON.parse(update_data);
console.log("After Adding data:\n", JSON.stringify(updated_jsonData, null, 4))

module.exports = courseToId;