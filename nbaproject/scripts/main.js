var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var NBA_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail'
var ESC_KEY = 27;

function setDetails(imageUrl,titleText) {
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);

    detailImage.setAttribute('src',imageUrl);
    detailTitle.textContent = titleText;
    
}
function imageFormThumb(nba) {
    return nba.getAttribute('data-image-url');
}
function titleFormThumb(nba) {
    return nba.getAttribute('data-imgae-title');
}
function setDetailsFromNba(nba) {
    setDetails(imageFormThumb(nba),titleFormThumb(nba));
}
function addNbaClickHander(nba) {
    nba.addEventListener('click',function (event) {
       event.preventDefault();
       setDetailsFromNba(nba); 
       showDetail();
    });
}
function getNbaArray() {
    var nba = document.querySelectorAll(NBA_LINK_SELECTOR)
    var nbaArray = [].slice.call(nba);
    return nbaArray;
}
function hideDetail() {
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
function showDetail(){
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}
function addKeyPressHandler() {
    document.body.addEventListener('keyup',function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode == 27){
            hideDetail();
        }
    })
}
function initializeEvents() {
    var array = getNbaArray();
    array.forEach(addNbaClickHander);
    addKeyPressHandler();
}
initializeEvents();