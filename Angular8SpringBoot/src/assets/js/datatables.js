// $(document).ready(function() {
    $(document).ready(function() {
			$('#table').dataTable( {
				"bServerSide": true,
				"fnServerData": function (sSource, aoData, fnCallback) {
					var myData = JSON.stringify(aoData);
					console.log(aoData);
					$.ajax({
						"dataType": 'json',
						"contentType" : "application/json;charset=utf-8",
						"type": "GET",
						"crossDomain": true,
						"url": "Access-Control-Allow-Origin: http://localhost:8080/api/pessoas",
						"data": myData,
						"success": fnCallback,
						"error": function () {
							alert('have some problem');
						}
					});
				}					
			} );
		} );
// });