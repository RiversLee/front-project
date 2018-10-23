var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var NBA_LINK_SELECTOR = '[data-image-role="trigger"]';

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
    });
}