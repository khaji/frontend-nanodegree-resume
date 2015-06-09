var bio = {
	"name" : "Alex Khajehtoorian",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my online Resume, a work in progress..",
	"contacts" : {
		"mobile" : "408-483-2770",
		"email" : "alex.khajehtoorian@gmail.com",
		"github" : "khaji",
		"twitter" : "@khajehtoorian",
		"location" : "Washington DC"
	},
	"skills" : ["HTML/CSS", "JS", "Teaching", "Project Management"],
	"bioPic" : "images/profile-pirate.png"
}

var work = {
	"jobs" : [
	{
		"employer" : "Homenetmen",
		"title" : "Volunteer, IT committee",
		"location" : "Washington DC, US",
		"dates" : "2004 - present",
		"description" : "Responible for bringing innovative and efficient changes to non-profit"
	},
	{
		"employer" : "The John Stewart Company",
		"title" : "Program Coordinator",
		"location" : "San Jose, CA, US",
		"dates" : "May 2007 - Dec 2009",
		"description" : "Teaching underserved children in community about technology"
	},
	{
		"employer" : "Virage Logic",
		"title" : "Intern",
		"location" : "Milpitas, CA",
		"dates" : "August 2004 - November 2005",
		"description" : "Being an Intern - breaking stuff and learning"
	}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Web Developer",
		"dates" : "March 2015",
		"description" : "Developed a responsive website with bootstrap with over 1,300 pageviews",
		"images" : ["images/navs1.png","images/navs2.png"]
	},
	{
		"title" : "Technical Project Manager",
		"dates" : "Oct 2013 - March 2014",
		"description" : "Rolled Google Apps out to entire organization globally.",
		"images" : ["images/hmen1.png","images/hmen2.png"]
	}
	]

}

var education = {
	"schools" : [
	{
		"name" : "San Jose State Univeristy (SJSU)",
		"location" : "San Jose, CA, US",
		"degree" : "BS",
		"major" : ["Management Information Systems (MIS)"],
		"dates" : "2004 - 2010",
		"url" : "http://www.sjsu.edu"
	}
	],
	"onlineCourses" : [
	{
		"class" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : "March 2015",
		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	{
		"class" : "Responsive Web Design Fundamentals",
		"school" : "Udacity",
		"dates" : "March 2015",
		"url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
	},
	{
		"class" : "Responsive Images",
		"school" : "Udacity",
		"dates" : "April 2015",
		"url" : "https://www.udacity.com/course/responsive-images--ud882"
	},
	{
		"class" : "How to Use Git and GitHub",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
	},
	{
		"class" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : "May 2015",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}

}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray =[];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}

}

$("#mapDiv").append(googleMap);