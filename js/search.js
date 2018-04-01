<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript"> 
google.load('search', '1', {language : 'ru', style : google.loader.themes.MINIMALIST});
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-23542767-1"]);
function _trackQuery(control, searcher, query) {
var gaQueryParamName = "q";
var loc = document.location;
var url = [
loc.pathname,
loc.search,
loc.search ? '&' : '?',
gaQueryParamName == '' ? 'q' : encodeURIComponent(gaQueryParamName),
'=',
encodeURIComponent(query)
].join('');
_gaq.push(["_trackPageview", url]);
}
google.setOnLoadCallback(function() {
var customSearchControl = new google.search.CustomSearchControl('009949135420727346414:kgtwppfo9mc');
customSearchControl.setResultSetSize(google.search.Search.SMALL_RESULTSET);
customSearchControl.setSearchStartingCallback(null, _trackQuery);
customSearchControl.draw('cse');
}, true);
</script>