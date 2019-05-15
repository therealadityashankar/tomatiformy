/**
 * convert form data to json
 * and vice-versa
 */

/**
 * @namespace
 *
 * all functions of tomatoformy
 */
var tomatoformy = {
    /**
     * @function tomato
     *
     * convert forms to jsons
     *
     * @param {FormData} form - a form object
     * @param {object} lists - an array of strings containing all form items considered to be lists
     *
     * @returns {object||undefined} returns undefined 
     */
    tomato: function(form, lists){
        if(form.checkValidity()){
            var body = {};
            var formData = new FormData(form);
            for(var key of formData.keys()){
                if(key in lists){
                    body[key] = formData.getAll(key);
                } else{
                    body[key] = formData.get(key);
                }
            }

            return body
        } else{
            return
        }
    }
}

if(module) module.exports = tomatoformy;
