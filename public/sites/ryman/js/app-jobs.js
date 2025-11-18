$(document).ready(function() {
		console.log('ready');
		checkPage();
	});
var baseUrl = 'https://www.rhpcareers.com/search/';
var detailsUrl = 'job-description/';
var apiUrl = baseUrl + 'wp-json/wp/v2/jobs/location?locationID=';

function checkPage() {
	var pageClass = $('body').attr('class');
	console.log(pageClass);
	var locationID = ((val) => {
		switch(val) {
			case 'auditorium-class':
				return 8;
				break;
			case 'old-red-gatlinburg-class':
				return 17;
				break;
			case 'opry-ent-group-class':
				return 10;
				break;
			case 'old-red-nashville-class':
				return 14;
				break;
			case 'corporate-class':
				return 11;
				break;
			case 'wildhorse-store-class':
				return 19;
				break;
			case 'grand-ole-opry-class':
				return 7;
				break;
			case 'ole-red-tish-class':
				return 15;
				break;
			case 'lula-class':
				return 13;
				break;
			default:
				return null;
		}
	})(pageClass);
	fetchJobsByLocation(locationID);
}

function fetchJobsByLocation( locationID ) {
	// console.log("fetch jobs at : " + locationID);
	$.get(apiUrl + locationID, function() {
	})
	.done(function(res) {
		loadJobsData(res);
	})
	.fail(function(err) {
		console.log(err);
	});
}

function loadJobsData(jobsData) {

	for(prop in jobsData) {
		var jobID = jobsData[prop]['job_id_short'];
		var jobTitle = jobsData[prop]['job_title'].split('-')[0];;
		var jobCategory = jobsData[prop]['position_category'];
		var jobBrand = jobsData[prop]['company_name'].split('-')[0];
		var jobType = jobsData[prop]['job_type'];
		var jobCity = jobsData[prop]['city_name'];
		var jobState = jobsData[prop]['state_name_abbrev'];
		var jobIDLong = jobsData[prop]['job_id_long'];
		var jobUpdated = jobsData[prop]['updated_date'].split(' ')[0];

		var unorderedList = $("#jobs-list-id");
		var output = $("<li></li>").addClass("job-list-item row text-left");
		$('#jobs-list-id').append(output);
		var specificJobUrl = baseUrl + detailsUrl + '?id=' + jobIDLong;

		output.append(`<button type="button" onclick="window.location.href='${specificJobUrl}'" style="max-height:50px" class="btn btn-primary col-xs-1 view-more-btn">View</button>`);
		output.append('<p class="job-title-class col-md-2 col-xs-2">' + jobTitle + '</p>');
		output.append('<p class="job-id-long-class nowrap col-xs-2">' + jobIDLong + '</p>');
		if (jobCategory.includes('/')) {
			jobCategory = jobCategory.replace('/', '/<wbr>');
		}
		output.append('<p class="job-category-class col-md-2 col-md-offset-0 col-xs-6 col-xs-offset-5">' + jobCategory + '</p>');
		output.append('<p class="job-type-class nowrap col-md-2 col-md-offset-0 col-xs-6 col-xs-offset-5">' + jobType + '</p>');
		output.append('<p class="job-location-class col-md-2 col-md-offset-0 col-xs-6 col-xs-offset-5">' + jobCity + ', ' + jobState + '</p>');
		output.append('<p class="job-updated-class nowrap col-md-2 col-md-offset-0 col-xs-6 col-xs-offset-5">' + jobUpdated + '</p>');
	}
}
