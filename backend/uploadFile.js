const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
    region: 'ap-southeast-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

const params = {
    Bucket: 'ecommerceteam4pinecone',
    Key: 'Character.svg',
    Body: fs.createReadStream('/Users/23LP5567/Desktop')
};

s3.upload(params, (err, data) => {
    if (err) {
        console.log('Error uploading file:', err);
    } else {
        console.log('File uploaded successfully. File location:', data.Location);
    }
});