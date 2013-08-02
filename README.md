MAMA
====

MAMA, the **MA**ss **MA**iler application, is an open source alternative to mailchimp from Beyond Bytes built on top of Node.js, Express.js and MongoDB. Be ready to power yourself with MAMA. 

### Notes for Beyond Bytes Contributers ###

#### How to get going: ####


1. Install [Node.js](http://nodejs.org/download/) for your operating system.
2. Install [MongoDB](http://www.mongodb.org/) for your operating system.
2. Get a copy of code - `https://github.com/bbytes/MAMA.git` to your local directory.
3. Run the command -  `npm install -d` - in Node command prmpt after changing to your cloned directory. This should install the dependencies currently added in `package.json` file.

#### Folder Structure ####

	-- config (contains all hard coded config items)
	-- controllers (contains all the routing logic)
    -- models (contains all the domain objects)    
    -- node_modules (dependency directory created after step #3 above - DO NOT CHECK-IN)    	
    -- public (all the files that are externally accessed)
         -- css
         -- images
         -- js
            -- vendor       
    -- views (jade and html pages)

#### How to add new dependencies ####

 If you are working on something and you need to add a new dependency edit the `dependencies` section in `package.json` file. Shown below is the current configuration

	"dependencies": {
		"express": "3.3.4",
		"jade": "*",
		"stylus": "*",
		"mongoose" :"latest",
		"connect-flash": "latest",    
		"passport": "latest",
		"passport-facebook": "latest",
		"passport-twitter": "latest",
		"passport-github": "latest",
		"passport-google-oauth": "latest",
		"connect-multipart-gridform":"0.1.4",
		"passport-linkedin":"latest",
		"ya-csv":"latest",
		"passport-google":"latest"
	}
 

#### Running the application ####

Start the MongoDB database and keep it running at localhost default port.

From the command prompt run - `node app.js` . You should be able to see a sign in page at [http://localhost:3000/](http://localhost:3000/)
