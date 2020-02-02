jQuery(document).ready(function( $ ) {

		if($('#swift').length) {
			var doughnutData = [{
	        value: 150,
	        color: "#87ceeb"
	      },
	      {
	        value: 100,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("swift").getContext("2d")).Pie(doughnutData);
		};

		// Java Chart
		if($('#java').length) {
			var doughnutData = [{
					value: 150,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Pie(doughnutData);
		}

		// Perl Chart
		if($('#perl').length) {
			var doughnutData = [{
					value: 300,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("perl").getContext("2d")).Pie(doughnutData);
		}

		// ShellScript Chart
		if($('#shellscript').length) {
			var doughnutData = [{
					value: 300,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("shellscript").getContext("2d")).Pie(doughnutData);
		}


		// HTML Chart
		if($('#html').length) {
			var doughnutData = [{
					value: 300,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Pie(doughnutData);
		}


		// CSS Chart
		if($('#css').length) {
			var doughnutData = [{
					value: 300,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Pie(doughnutData);
		}

		// JavaScript Chart
		if($('#javascript').length) {
			var doughnutData = [{
					value: 200,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Pie(doughnutData);
		}


		// English Chart
		if($('#english').length) {
			var doughnutData = [{
					value: 400,
					color: "#87ceeb"
				},
				{
					value: 100,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("english").getContext("2d")).Pie(doughnutData);
		}
});