(function() {
var links = document.querySelectorAll('a[data-prefetch]');
var prefetched = new Set();

links.forEach(function(link){
link.addEventListener('mouseenter', function(){
var href = this.getAttribute('href');
if(href && !prefetched.has(href)){
var l = document.createElement('link');
l.rel='prefetch';
l.href=href;
document.head.appendChild(l);
prefetched.add(href);
}
},{once:true});
});
})();