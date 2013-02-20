/**
 * Load jQuery in compatibility mode.  Intended for use in hostile
 * environments :) where another JS library has previously been loaded.
 *
 * See also:
 * http://stackoverflow.com/questions/2074982
 * http://api.jquery.com/jQuery.noConflict/
 *
 */

(function () {
    var jQueryBootstrap = function (callback) {

        var remoteScript = document.createElement('script');

        remoteScript.type = "text/javascript";
        remoteScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";

        remoteScript.onload = function(){
            var compatible = document.createTextNode('jQuery.noConflict(true);');
            var compatibilityScript = document.createElement('script');

            compatibilityScript.type = "text/javascript";
            compatibilityScript.appendChild(compatible);

            document
                .getElementsByTagName('body')[0]
                .appendChild(compatibilityScript);

            callback();

        };

        document
            .getElementsByTagName('body')[0]
            .appendChild(remoteScript);

    };

    var initializeUI = function () {
        jQueryBootstrap(loadUI);
    };

    var loadUI = function(){
        var $ = jQuery;

        /* code within this block uses our version of jQuery */

    };

    window.addEventListener('load',
                            initializeUI,
                            false);
}());
