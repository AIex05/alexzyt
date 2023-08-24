const AWS = require("aws-sdk");

// Set the region and credentials
AWS.config.update({ region: "us-west-1" }); // Replace with your desired region
AWS.config.credentials = new AWS.Credentials({
  accessKeyId: "AKIATEESOSXLCR57DMT5",
  secretAccessKey: "9RWocEuoiC4WtRsdreIdxQSBb4ozl3G0XlUDVaIg",
});

// Create an S3 service object
const s3 = new AWS.S3();

export {s3};
