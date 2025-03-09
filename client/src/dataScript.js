// JavaScript version
const fs = require("fs");

// 1. Read the file
fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // 2. Parse the JSON data
  let jsonData = JSON.parse(data);
  let num = 0;

  // 3. Iterate through each category in the menu
  for (const category in jsonData.menu) {
    // For each item in the category array
    jsonData.menu[category].forEach((item, index) => {
      num++;
      item.id = num;
      // Or set a completely new id based on index
      // item.id = index + 1;
    });
  }

  // 4. Write the modified data back to the file
  fs.writeFile(
    "data.json",
    JSON.stringify(jsonData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Menu JSON file has been updated");
    },
  );
});
