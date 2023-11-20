const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      //don't try memorizing this src as this is coming straight from node docs.
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        if (body) {
          resolve(body);
        } else {
          reject(new Error("No body data"));
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  writeDataToFile,
  getPostData,
};
