/*
 * Jquery plugin dotify
 * Description: place '...' or whatever and shorten long text
 * author: Harma Davtian
 * Date: 12/6/2016
 * */

(function($){

    $.fn.dotify = function ( options ) {

        return this.each(function(){

            var max = null;
            var dotCharacters = null;

            // store a reference to the jq selected object
            var _$el = $(this);

            // creating an object with some useful properties to be used later
            var $el = {
                el: _$el,
                value: _$el.text(), // will be the string value
                charCount: _$el.text().length,
                wordArray: _$el.text().split(' '),
                wordArrayCount: _$el.text().split(' ').length
            };

            // if no options then set defaults
            if (options !== undefined) {
                max = (options.max) ? options.max : 20;
                dotCharacters = (options.dotCharacters) ? options.dotCharacters : '...';
            } else {
                max = 20;
                dotCharacters = '...';
            };

            var insertDots = function () {

                var newCharCount = 0;
                var insertedDots = false;
                var extraContentStart = false;
                var extraContentEnd = false;
                var newWordArray = [];

                for (var i = 0, l = $el.wordArrayCount; i < l; i++) {

                    if (newCharCount + i <= max && !insertedDots) {

                        newWordArray.push($el.wordArray[i]);
                        newCharCount += $el.wordArray[i].length + i; // incrementing

                    } else if (newCharCount + i > max && !insertedDots) {

                        newWordArray.push('<span class="dotify-dots">' + dotCharacters + '</span>');
                        insertedDots = true;
                        i--;

                    } else if (newCharCount + i > max && insertedDots) {

                        if (!extraContentStart) {
                            newWordArray.push('<span class="dotify-extra-content">');
                            extraContentStart = true;
                        };

                        newWordArray.push($el.wordArray[i]);
                        newCharCount += $el.wordArray[i].length + i; // incrementing

                        if (i == $el.wordArrayCount) {
                            newWordArray.push('</span>');
                            extraContentEnd = true;
                        };

                    };

                }//end for

                return newWordArray.join(' ');

            };

            // testing
            console.log('---------');
            console.log('max: ' + max);
            console.log('dotCharacters: ' + dotCharacters);
            console.log('$el: ' + $el);
            console.log('$el.el: ' + $el.el);
            console.log('$el.value: ' + $el.value);
            console.log('$el.charCount: ' + $el.charCount);
            console.log('$el.wordArray: ' + $el.wordArray);
            console.log('$el.wordArrayCount: ' + $el.wordArrayCount);
            console.log('newWordArray: ' + insertDots());

            // execute the main function
            _$el.html(insertDots());

        });// end each

    };

}(jQuery));
