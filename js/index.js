$(document).ready(function() {
  
 
  
 var getSearch = function(){
   var searchText = $("#searchBox").val();
   $.ajax( {
    url: "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + searchText,
    dataType: 'jsonp',
    headers: { 'Api-User-Agent': 'FCCProjetDanica/1.0' },
    
    success: function(data) {
     var resultsData = data.query.search;
      var resultsArr = [];
      var hitsData = data.query.searchinfo.totalhits;
      for (var result in resultsData)
     
      resultsArr.push('<a href="https://en.wikipedia.org/wiki/' + resultsData[result].title + '"target="_blank" class="list-group-item results" id="resultLink"><h4 class="list-group-item-heading" id="resultTitle">' + resultsData[result].title + '</h4><p class="list-group-item-text" id="resultDescription">' + resultsData[result].snippet + '</p></a>');
      
      
       
    if (hitsData == 0){
      $("#resultsdiv").html("<h1>Sorry, your search matched 0 results</h1>");
      
    }
  else{
   
   $("#resultsdiv").html(resultsArr);
      $("#close").removeClass("hide");
      }
      
    }
   });
 };
 $("#searchBtn").click(getSearch);
  $("#searchBox").keydown(function(e){
    if(e.which === 13){
        $("#searchBtn").click();
    }
});
  $("#close").click(function(){
    $("#resultsdiv").html("");
    $("#close").addClass("hide");
  })
  
  
})