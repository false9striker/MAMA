MAMA
====

MAMA, the **MA**ss **MA**iler application, is an open source alternative to mailchimp from Beyond Bytes built on top of Node.js, Express,js and MongoDB. Be ready to power yourself with MAMA. 

### Notes for Beyond Bytes Contributers ###

#### How to get going: ####


1. Install [Node.js](http://nodejs.org/download/) for your operating system
2. Get a copy of code - `https://github.com/bbytes/MAMA.git` to your local directory.
3. Run the command -  `npm install -d`. This should install the dependencies currently added in `package.json` file.

#### Folder Structure ####


    -- models (contains all the domain objects)    
    -- node_modules (dependency directory created after step #3 above - DO NOT CHECK-IN)    	
    -- public (all the files that are externally accessed)
         -- css
         -- images
         -- js
            -- vendor    
    -- routes (contains all the routing logic)   
    -- views (jade and html pages)

#### How to add new dependencies ####

 If you are working on something and you need to add a new dependency edit the `dependencies` section in `package.json` file. Shown below is the current configuration

    "dependencies": {
       "express": "3.3.1",
       "jade": "*",
       "stylus": "*",
       "mongoose" :"latest",
       "passport": "latest",
       "passport-local": "latest"
    }
 

#### Running the application ####

From the command prompt run - `node app.js` . You should be able to see a sign in page at [http://localhost:3000/](http://localhost:3000/)
