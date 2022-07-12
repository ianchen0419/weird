//防止前一個套件結尾忘記加上`;`
;(function(global, $) {

    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es']; //這個變數外界存取不到，但是這隻檔案可以存取到

    // informal greetings
    greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language"; // throw error
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            // 如果formal是undefined或是null，他會被型別轉換成false
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }

            // 在Execution Context時，this會轉變成calling object
            return this; //讓他可以Chainable
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()) ;
            }

            return this; //讓他可以Chainable
        },

        setLang: function(lang) {
            // set the language
            this.language = lang;

            // validate
            this.validate();
             
            return this; //讓他可以Chainable
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if(!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            return this; //讓他可以Chainable
        }
    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en'; 
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));