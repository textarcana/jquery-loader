/**
 * Load jQuery in compatibility mode.  Intended for use in hostile
 * environments :) where another JS library has previously been loaded.
 *
 * See http://stackoverflow.com/questions/2074982
 */

(function () {

    /**
     * load jQUery immediately
     */

    var jQueryBootstrap = function (callback) {

        var remoteScript = document.createElement('script');

        remoteScript.type = "text/javascript";
        remoteScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js";

        remoteScript.onload = function(){
            var compatible = document.createTextNode('jQuery.noConflict();');
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

    var loadUI = function(){

        /* here you can use the new jQuery object...  */

    };

    var initializeUI = function () {
        jQueryBootstrap(loadUI);
    };



    window.addEventListener('load',
                            initializeUI,
                            false);


}());
