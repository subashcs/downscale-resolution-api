# Downscale Image Resolution API
A REST API service that accepts an image and saves the image by converting it into multiple downscaled resolution format.

# Languages
The conversion mechanism of the API is implemented using python Pillow (PIL) module.The Rest API is implemented using express and Node.js.

# Routes
  Endpoint | HTTP Method
------------ | -------------
  api/v1/convert | POST

# API Input
The API accepts an image of JPEG or PNG format.
  ## Important API Headers
  Content-Type: multipart/form-data
  
  
# API Output

 ## Success Response 
 1. 200 Ok

# Installation Steps
1.  Clone or Download the reposit
2.  In the project root folder , Run *yarn * or *npm install* based on the package manager you choose
3.  In order for the python script to work you need to have python installed with version >= 3.7
4.  Install Pillow using pip by running *pip install Pillow* 
5.  Run command *npm run start* or *yarn start* to start the project in development mode




