/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	'name': 'Samantha Canedy',
 	'role': 'Web Developer',
 	'age': 27,
 	contacts: {
 		'mobile': '210-385-8301',
 		'email': 'samcanedy@gmail.com',
 		'linkedin': 'Samantha Canedy',
 		'github': 'scanedy',
 		'location': 'Austin, TX, USA',
 	},
 	'welcomeMessage': 'Hello! Welcome to my Resume.',
 	'skills': ['HTML5', ' CSS3', ' JavaScript'],
 	'bioPic': 'images/me.jpg'
 };

bio.display = function () {
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedRole).prepend(formattedName);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedLocation);
	$('#topContacts').append(formattedGithub);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedLocation);
	$('#footerContacts').append(formattedGithub);

	var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)
	var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
	$('#header').append(formattedMessage);
	$('#header').prepend(formattedPic);


	var formattedSkills = HTMLskills.replace('%data%', bio.skills);

	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace('%data%',bio.skills[0]);
		$('#skills').append(formattedSkill);
			formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
			formattedSkill = HTMLskills.replace('%data%',bio.skills[2]);
		$('#skills').append(formattedSkill);
	}
};

bio.display ();

// Internationalize name function below.
function inName (name) {
	name = bio.name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	var intName = (name[0] + " " + name[1]);

	return intName;
};

$('#main').append(internationalizeButton);



 var work = {
 	'jobs': [
	 	{
	 		'title': 'Regional Associate',
	 		'employer': 'Youth America Grand Prix',
	 		'location': 'Remote',
	 		'dates': 'December 2015 - Present',
	 		'description': 'Implement and manage 20 Semi-Regional ballet competitions across the US including a week-long Final Compeititon in New York City with participants from across the globe; Manage and corresponde with YAGP clients; Provide assistance to travel teams as well as onsite management of competitions and master classes.'
	 	},
	 	{
	 		'title': 'Public Relations Intern',
	 		'employer': 'Texas 4000 for Cancer',
	 		'location': 'Austin, TX, USA',
	 		'dates': 'September 2014 - December 2014',
	 		'description': 'Research and document the various media outlets who published coverage of the Texas 4000 for Cancer 2014 Annual Charity bike ride; Produce a final product that summarizes media coverage and serves as a benchmark for future charity rides. Other duties included drafting press releases and blog posts.'
	 	},
	 	{
	 		'title': 'Digital and Social Media Intern',
	 		'employer': 'IT\'S TIME TEXAS',
	 		'location': 'Austin, TX, USA',
	 		'dates': 'June 2014 - August 2014',
	 		'description': 'Assist in rebranding IT\'S TIME TEXAS and and preparations to implement upcoming H-E-B Community Challenege Initiative; Revise Adobe InDesign and Illustrator files along with management of blog posts.'
	 	}, 
	 	{
	 		'title': 'Sales Associate',
	 		'employer': 'Movin\' Easy Dancewear',
	 		'location': 'Austin, TX, USA',
	 		'dates': 'May 2014 - November 2015',
	 		'description': 'Manage Movin\' Easy Dancewear\'s onlince and social media presence in the Austin Dance Community by creating monthly email blasts and a calendar for social meda posting; Analytically asses foot shape, size, flexibility and strength to find appropriate pointe shoes that will provide best support for young dancers. '
	 	}, 
	 	{
	 		'title': 'Sales Associate',
	 		'employer': 'St. Bernard Sports',
	 		'location': 'Austin, TX, USA',
	 		'dates': 'August 2008 - July 2012',
	 		'description': 'Responsible for maintaining a visually attractive and efficient shoe department; Maintain St. Bernard\'s high quality service to its customers and impart useful knowledge and guidance during the purhasing process.'
 		}
 	]
 };

function displayWork() {
	for(var i=0; i<work.jobs.length; i++){//for (job in work.jobs) { // for in loops are not best practice
	 	$('#workExperience').append(HTMLworkStart);

	 	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
	 	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
	 	var formattedEmployerTitle = formattedEmployer +formattedTitle;
	//concatenation of employer and title with class work-entry:last
	 	$('.work-entry:last').append(formattedEmployerTitle);

	 	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
	 	$('.work-entry:last').prepend(formattedLocation);

	 	var formattedWorkdates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
	 	$('.work-entry:last').append(formattedWorkdates);

	 	var formattedWorkdescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
	 	$('.work-entry:last').append(formattedWorkdescription);
	}
};

displayWork (); // accessible because it is in the GLOBAL scope and the function is as well


//collecting click location code below
$(document).click(function(loc){
	//$('#log').text( 'pageX: ' + event.pageX + ", pageY: " + event.pageY );
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

 //work.position = 'Regional Associate';
 //work.employer = 'Youth America Grand Prix';
 //work.years = 2;
 //$('#main').append(work['position']);
 

 var education = {
 	'schools': [
	 	{
	 		'name': 'The University of Texas at Austin',
	 		'city': 'Austin, TX, USA',
	 		'degree': 'BS',
	 		'major': ['Advertising'],
	 		'graduationYear': '2015'
	 	}, 
	 ],
	 'onlineCourses': [
	 	{
	 		'title': 'Front-End Web Developer',
	 		'school': 'Udacity',
	 		'completionYear': '2017',
	 		'url': ['https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001']
	 	}
 	]
 };
 
 education.display = function () {
 	for(var i=0; i<education.schools.length; i++){
 		$('#education').append(HTMLschoolStart);

 		var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
 		$('.education-entry:last').append(formattedschoolName);

 		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
 		$('.education-entry:last').append(formattedDegree);

 		var formattedschoolCity = HTMLschoolLocation.replace('%data%', education.schools[i].city);
 		$('.education-entry:last').append(formattedschoolCity);

 		var formattedschoolYear = HTMLschoolDates.replace('%data%', education.schools[i].graduationYear);
 		$('.education-entry:last').append(formattedschoolYear);

 		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);
 		$('.education-entry:last').append(formattedMajor);
 	}
 	for(var i=0; i<education.onlineCourses.length; i++) {
 		$('#education').append(HTMLonlineClasses);
 		$('#education').append(HTMLschoolStart);

 		var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
 		$('.education-entry:last').append(formattedonlineTitle);

 		var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
 		$('.education-entry:last').append(formattedonlineSchool);

 		var formattedonlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[i].completionYear);
 		$('.education-entry:last').append(formattedonlineDate);

 		var formattedonlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
 		$('.education-entry:last').append(formattedonlineUrl);
 	}
 };

education.display ();
//education["name"] = "The University of Texas at Austin"
//education["years"] = "2012 - 2015"
//education["city"] = "Austin, TX, USA"

 //$('#main').append(education.name)

var projects = {
	'projects': [
		{
			'title': 'Resume',
			'dates': 'Summer 2017',
			'description': 'While learning the basics of JavaScript, build a resume to be used for potential jobs.',
			'images': ['http://via.placeholder.com/350x150']
		},
		{
			'title': 'Porfolio',
			'dates': 'Summer 2017',
			'description': 'Using HTML and CSS, create a portfolio to showcase projects and work experience.',
			'images': ['http://via.placeholder.com/350x150']
		}
	]
};

projects.display = function (){
	for(var i=0; i<projects.projects.length; i++){
		$('#projects').append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		$('.project-entry:last').append(formattedprojectTitle);

		var formattedprojectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		$('.project-entry:last').append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('.project-entry:last').append(formattedprojectDescription);
		
		var formattedprojectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images);
		$('.project-entry:last').append(formattedprojectImage);
	}
};

projects.display ();

$('#mapDiv').append(googleMap);
//var awesomeThoughts = "I am Sam and I am AWESOME!"
 	//console.log (awesomeThoughts);
 //var funThoughts = 
 	//awesomeThoughts.replace ("AWESOME", "FUN")
//$("#main").append(funThoughts);
	//console.log (funThoughts);
