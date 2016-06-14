angular.module('app')
    /**
     * @ngdoc filter
     * @name app.filter:labelCase
     * @description
     * <h3>This filter:</h3>
     * <ol>
     * 		<li>Adds a space before every upper case letter.</li>
     * 		<li>Capitalizes the first letter of the string.</li>
     * </ol>
     * 
     * @param {String} input String to be transformed to labelCase
     * @returns {String} String which has been transformed to labelCase
     */
    .filter('labelCase', function() {
        return function (input) {
            input = input.replace(/([A-Z])/g, ' $1');
            return input[0].toUpperCase() + input.slice(1);
        }
    })
    /**
     * @ngdoc filter
     * @name app.filter:camelCase
     * @description
     * <h3>This filter:</h3>
     * <ol>
     * 		<li>Converts all letters to lowercase.</li>
     * 		<li>Wherever a space is found, the letter following the space is capitalized, and the space is removed.</li>
     * </ol>
     * 
     * @param {String} input String to be transformed to camelCase
     * @returns {String} String which has been transformed to camelCase
     */
    .filter('camelCase', function() {
        return function(input) {
            // "First Name" -> "first name" -> first( n)ame -> firstName
            return input.toLowerCase().replace(/ (\w)/g, function (match, letter) {
                return letter.toUpperCase();
            })
        }
    })
    /**
     * @ngdoc filter
     * @name app.filter:keyFilter
     * @description
     * <h3>This filter:</h3>
     * <ol>
     * 		<li>Create empty result object.</li>
     * 		<li>Iterate through key/value pairs in object.
     * 			<ul>
     * 				<li>If key doesn't match query
     * 					<ul>
     * 						<li>Add key/value pair to result object</li>
     * 					</ul>
     * 				</li>
     * 				<li>If key does match query
     * 					<ul>
     * 						<li>Key/value pair is not added to result object thus omitting it from the returned object.</li>
     * 					</ul>
     * 				</li>
     * 			</ul>
     * 		</li>
     * </ol>
     * 
     * @param {Object} obj Object containing keys and values to be filtered
     * @returns {String} query Query term identifying key/value to be filter from obj
     * @returns {Object} Object containing remaining key/value pairs
     */
    .filter('keyFilter', function () {
        return function (obj, query) {
            var result = {};
            angular.forEach(obj, function (val, key) {
                if (key !== query) {
                    result[key] = val;
                }
            });

            return result;
        }
    })
