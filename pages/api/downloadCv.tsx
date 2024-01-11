import type { NextApiRequest, NextApiResponse } from "next";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2,
  keyGenerator: (req) => {
    return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Takstgrense oversteget",
      message:
        "Takstgrense oversteget, vennligst vent 15 minutter og prøv på nytt.",
    });
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await limiter(req, res, async () => {
    const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
      },
    });

    const zipKey = "Curriculum-Vitae.zip";

    try {
      const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: zipKey,
      });

      const url = await getSignedUrl(s3, command, {
        expiresIn: 60,
      });

      res.status(200).json({ url });
    } catch (error) {
      console.error("Error generating pre-signed URL:", error);
      res.status(500).json({ error: "Error generating URL" });
    }
  });
}
