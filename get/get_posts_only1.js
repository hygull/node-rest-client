/*
	{
		"created_on": "7 Oct 2017",
		"aim": "To fetch a post with id 1 as JSON using node-rest-client",
		"coded_by": "Rishikesh Agrawani"
	}
*/

var Client = require("node-rest-client").Client
var client = new Client()

/*
	https://jsonplaceholder.typicode.com/posts/1
*/
var baseUrl = "https://jsonplaceholder.typicode.com"
var endpoint = "/posts/1"
var url = baseUrl + endpoint

//Direct way for making GET REST API call
client.get(url, function(data, response){
	/*
		Parsed response body as a JS object
	*/
	console.log("============== Response as JS object===============\n")
	console.log(data)
	/*
		Raw response
	*/
	console.log("\n============== Raw response ===============")
	console.log(response)
})