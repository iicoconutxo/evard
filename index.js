const { settings } = require("cluster");
const fs = require("fs");

function ErrorLog(ErrorMessage) {
    if(ErrorMessage) {
        if(!ErrorMessage) { return; }
        console.log('\u001b[' + 33 + 'm' + '(Evard: 001) ' + '\u001b[0m' + `UnhandledPromiseRejectionWarning: EvardAPIError: ${ErrorMessage}`)
    } else {
        console.log('\u001b[' + 31 + 'm' + 'Evard npm Code Error: 002' + '\u001b[0m')
    }
}

function log(Args) {
    if(Args) {
        console.log('\u001b[' + 33 + 'm' + '(Evard) ' + '\u001b[0m' + `${Args}`)
    } else {
        return;
    }
}



function run(Settings) {
    if(!Settings) { return ErrorLog("Didn't find Function Settings"); }
    
    if(Settings.Function === 'font') {
        if(Settings.message) {
                var FontFile = require('./Font.json');        
                if(!FontFile) {
                    ErrorLog("File not found..")
                } else { 
                    var Font = FontFile.letters 
                }
    
                var lines = ['', '', '', '', '', ''];
                const letters = Font;
                for (var i = 0; i < Settings.message.length; i++) {
                var letter = Settings.message[i].toLowerCase();
                for (var j = 0; j < 1; j++) { lines[j] += letters[letter] + ' ';}
                }

                let text = lines.join('')
            return text
        } else {
            ErrorLog("Didn't find message for: evern.on({message: 'nil'}")
        }
    
    } else if(Settings.Function === 'add') {
        let sfgc = Settings.one + Settings.two
        return sfgc
    } else {
        ErrorLog("Didn't find Function for: evern.on({Function: 'nil'}")
    }

}


module.exports.run = run;
module.exports.log = log;