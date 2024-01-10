// File: pages/api/downloadCv.ts
import type {NextApiRequest, NextApiResponse} from "next";
import AWS from "aws-sdk";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	AWS.config.update({
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		region: process.env.AWS_REGION,
	});

	const s3 = new AWS.S3();
	const zipKey = "Curriculum-Vitae.zip"; // Replace with your ZIP file's name

	try {
		const url = await s3.getSignedUrlPromise("getObject", {
			Bucket: process.env.S3_BUCKET_NAME,
			Key: zipKey,
			Expires: 60, // URL expires in 60 seconds
		});

		res.status(200).json({url});
	} catch (error) {
		res.status(500).json({error: "Error generating URL"});
	}
}
