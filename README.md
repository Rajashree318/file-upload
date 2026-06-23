# file-upload
Adds new student records to MongoDB with support for photo uploads. Uses Multer to capture the file, converts it to Base64, and saves it alongside student details.

Student Upload API
This project includes an API endpoint to add new student records with photo uploads.

Endpoint
POST /addStudent

Features
Uses Express.js for routing

Handles file uploads with Multer (memoryStorage)

Converts uploaded photo to Base64 string

Stores student details and photo in MongoDB via Mongoose
Notes:
Ensure your form field for the file is named photo.

Schema must include a photo field (String for Base64 or Buffer for raw binary).

If using MongoDB Compass, Base64 strings will appear as readable text; Buffers will show as binary data.
