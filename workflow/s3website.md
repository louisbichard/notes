# Making an S3 bucket website

# Enable website hosting

On the bucket preferences, set the bucket as a static website and allow access to the index.html file

# Add a bucket policy
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::lisajanegriffin.com/*"
            }
        ]
    }

Note: Replace the word current lisa jane bucket with your bucket name