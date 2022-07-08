var globalRedirectURL = "";

function initializer() {
    var redirectFail = document.getElementById('redirectFail');
	redirectFail.style.visibility = 'hidden';

    var successText = document.getElementById('success');
    successText.style.visibility = 'hidden';
}

function redirectFail() {
    var redirecting = document.getElementById('redirecting');
    redirecting.style.visibility = 'hidden';

	var redirectFail = document.getElementById('redirectFail');
	redirectFail.style.visibility = 'visible';
}

function redirectSuccess() {
    var loadingText = document.getElementById('loading');
    loadingText.style.visibility = 'hidden';

    var circle = document.getElementById('redirectingCircle');
    circle.innerHTML = 'Ready';
    circle.id = 'successCircle';

    var successText = document.getElementById('success');
    successText.style.visibility = 'visible';
}

function redirectButton() {
    window.location.href = globalRedirectURL;
}

function urlProcessing() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const redirectid = urlParams.get('redirectid');

    
}

//initializer()