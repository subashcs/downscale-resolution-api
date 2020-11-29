# Downscale Image Resolution API
A REST API service that accepts an image and saves the image by converting it into multiple downscaled resolution format.

# Implementation Details
The conversion mechanism of the API is implemented using python Pillow (PIL) module.The Rest API is implemented using express and Node.js.

# Routes
  Endpoint | HTTP Method
------------ | -------------
  api/v1/convert | POST

# API Input
The API accepts an image file as input.
  ## Important API Headers
  Content-Type: multipart/form-data
  
  
# API Output

 ## Success Response 
 1. 200 Ok

# Installation Steps
1.  Clone or Download the repository
2.  In the project root folder , Run *yarn* or *npm install* based on the package manager you choose
3.  In order for the python script to work you need to have python installed with version >= 3.7
4.  Install Pillow using pip by running *pip install Pillow* 
5.  Run command *npm run start* or *yarn start* to start the project in development mode
API will now be live on port 3000 , visit http://localhost:3000/ to make sure its up and running



