// start the JS
// Declare the variables
var request1 = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var request3 = new XMLHttpRequest();
var Res1, x1, txt1 = "", Res2, x2, txt2 = "", Res3, x3, txt3 = "", tempDate, tempStr = "", tempLink;
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// making first ajax call to makeschool on load
request1.open('GET', 'http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=makeschool', true);
request1.onload = function () {

	// Begin accessing JSON data here
	Res1 = JSON.parse(this.response);
	// looping over response to filter out the data needed
	for (x1 in Res1) {				
		if (Res1[x1].retweeted_status != null){
			tempStr = Res1[x1].retweeted_status.text;
			tempStr= tempStr.substring(0, tempStr.indexOf('http'));
			txt1 += "<br>" + '<img src="tweet.jpg" alt="Trulli" width="50" height="30">' + tempStr;
			tempDate = new Date(Res1[x1].retweeted_status.created_at);
			txt1 += "<br><b><i>" + tempDate.toLocaleDateString("en-US", options) + "</b></i>";
			txt1 += "<br><b>Retweeted & Mentions By : </b><i>" + Res1[x1].retweeted_status.user.name + "</i>";
		}
		else{
			tempStr = Res1[x1].text;
			tempStr= tempStr.substring(0, tempStr.indexOf('http'));
			txt1 += "<br> " + '<img src="tweet.jpg" alt="Trulli" width="50" height="30">' + tempStr;
			tempDate = new Date(Res1[x1].created_at); 
			txt1 += "<br><b><i>" + tempDate.toLocaleDateString("en-US", options) + "</b></i>";
			txt1 += "<br><b>Retweeted & Mentions By : </b><i>" + Res1[x1].user.name + "</i>";
		}

		tempLink = 'https://twitter.com/teentechsf/status/' + Res1[x1].id_str;
		txt1 += "<br><a href= " + tempLink + " class='twitterBtn twitter'> Goto Tweet  &nbsp; </a><br />";
	}
	// showing the data on UI
	document.getElementById("col1").innerHTML = txt1;
}
//sending request
request1.send();

// making second ajax call to newsycombinator on load
request2.open('GET', 'http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=newsycombinator', true);
request2.onload = function () {

	// Begin accessing JSON data here
	Res2 = JSON.parse(this.response);
	// looping over response to filter out the data needed
	for (x2 in Res2) {
		if (Res2[x2].retweeted_status != null){
			tempStr = Res2[x2].retweeted_status.text;
			tempStr= tempStr.substring(0, tempStr.indexOf('http'));
			txt2 += "<br> " + '<img src="tweet.jpg" alt="Trulli" width="50" height="30">' + tempStr;
			tempDate = new Date(Res2[x2].retweeted_status.created_at);
			txt2 += "<br><b><i>" + tempDate.toLocaleDateString("en-US", options) + "</b></i>";
			txt2 += "<br><b>Retweeted & Mentions By : </b><i>" + Res2[x2].retweeted_status.user.name + "</i>";
		}
		else{
			tempStr = Res2[x2].text;
			tempStr= tempStr.substring(0, tempStr.indexOf('http'));
			txt2 += "<br> " + '<img src="tweet.jpg" alt="Trulli" width="50" height="30">'  + tempStr;
			tempDate = new Date(Res2[x2].created_at);
			txt2 += "<br><b><i>" + tempDate.toLocaleDateString("en-US", options) + "</b></i>";
			txt2 += "<br><b>Retweeted & Mentions By : </b><i>" + Res2[x2].user.name + "</i>";
		}

		tempLink = 'https://twitter.com/teentechsf/status/' + Res2[x2].id_str;
		txt2 += "<br><a href= " + tempLink + " class='twitterBtn twitter'> Goto Tweet  &nbsp; </a><br />";
	}
	// showing the data on UI
	document.getElementById("col2").innerHTML = txt2;
}
//sending request
request2.send();

// making third ajax call to ycombinator on load
request3.open('GET', 'http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=ycombinator', true);
request3.onload = function () {

	// Begin accessing JSON data here
	Res3 = JSON.parse(this.response);
	// looping over response to filter out the data needed
	for (x3 in Res3) {
		if (Res3[x3].retweeted_status != null){
			tempStr = Res3[x3].retweeted_status.text;
			tempStr= tempStr.substring(0, tempStr.indexOf('http'));
			txt3 += "<br> " + '<img src="tweet.jpg" alt="Trulli" width="50" height="30">' + tempStr;
			tempDate = new Date(Res3[x3].retweeted_status.created_at);
			txt3 += "<br><b><i>" + tempDate.toLocaleDateString("en-US", options) + "</b></i>";
			txt3 += "<br><b>Retweeted & Mentions By : </b><i>" + Res3[x3].retweeted_status.user.name + "</i>";
		}
		else{
			tempStr = Res3[x3].text;
			tempStr= tempStr.substring(0, tempStr.indexOf('http'));
			txt3 += "<br> " + '<img src="tweet.jpg" alt="Trulli" width="50" height="30">' + tempStr;
			tempDate = new Date(Res3[x3].created_at);
			txt3 += "<br><b><i>" + tempDate.toLocaleDateString("en-US", options) + "</b></i>";
			txt3 += "<br><b>Retweeted & Mentions By : </b><i>" + Res3[x3].user.name + "</i>";
		}

		tempLink = 'https://twitter.com/teentechsf/status/' + Res3[x3].id_str;
		txt3 += "<br><a href= " + tempLink + " class='twitterBtn twitter'> Goto Tweet &nbsp; </a><br />";
	}
	// showing the data on UI
	document.getElementById("col3").innerHTML = txt3;
}
//sending request
request3.send();

