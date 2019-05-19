/**
 * convert form data to json
 * and vice-versa
 */
if (typeof window == 'undefined')
    var FormData = require('form-data');

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
     * @returns {object|undefined} returns undefined 
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
    },

    /**
     * create form from a js object
     * it was fun writing that
     *
     * @param {object} jsObj - the js object to maek into a form <br>
     * thas rite folks make is now spelt maek <br>
     * unless thats an abusive word of some kind <br>
     * then sorry <br>
     * I'm too lazy to  google right now <br>
     */
    formy: function(jsObj){
        var formData = new FormData();
        for(var key in jsObj){
            formData.append(key, jsObj[key]);
        }

        return formData;
    }
}

if(module) module.exports = tomatoformy;
