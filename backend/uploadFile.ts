// const AWS = require('aws-sdk');
// const fs = require('fs');

// AWS.config.update({
//     region: 'ap-southeast-1',
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const s3 = new AWS.S3();

// const params = {
//     Bucket: 'ecommerceteam4pinecone',
//     Key: 'Character.svg',
//     Body: fs.createReadStream('/Users/23LP5567/Desktop')
// };

// s3.upload(params, (err, data) => {
//     if (err) {
//         console.log('Error uploading file:', err);
//     } else {
//         console.log('File uploaded successfully. File location:', data.Location);
//     }
// });

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 } from 'uuid';

const s3 = new S3Client({
  region: 'ap-southeast-1',
  endpoint: process.env.ENDPOINT || '',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID || '',
    secretAccessKey: process.env.SECRET_ACCESS_KEY || '',
  },
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const count = url.searchParams.get('count');

  if (!count) {
    return Response.json(
      { message: 'Missing count parameter' },
      { status: 400 }
    );
  }

  const keys = Array.from({ length: Number(count) }, () => v4());

  const urls = await Promise.all(
    keys.map((key) =>
      getSignedUrl(
        s3,
        new PutObjectCommand({
          Bucket: 'ecommerceteam4pinecone',
          Key: key,
          ACL: 'public-read',
        }),
        {
          expiresIn: 60 * 60,
        }
      )
    )
  );

  return Response.json({
    uploadUrls: urls,
    accessUrls: keys.map((key) => process.env.PUB_URL + key),
  });
}