## `WCS - FILE UPLOADS`

---

Wild Code School quest with express.js

#### *Goal:*

Create a new Express app.

Create POST route in routes/index.js, named /myupload, through which users can upload files.

The user must be able to send images only in .png format and the file size should not exceed 3MB.  

Inform the user of the accepted format type (png) using the HTML accept attribute.  


#### *Validation criteria:*

1. The form allows several files to be uploaded

2. The form blocks files larger than 3MB

3. The form only accepts files with the mimetype image/png