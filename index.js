const FontFile = require('./Font.json')
const Font = FontFile.letters

function ErrorLog(ErrorMessage) {
    if(ErrorMessage.message) {
        console.log('\u001b[' + 33 + 'm' + '(Evard: 001) ' + '\u001b[0m' + `UnhandledPromiseRejectionWarning: EvardAPIError: ${ErrorMessage.message}`)
    } else {
        console.log('\u001b[' + 31 + 'm' + 'Evard npm Code Error: 002' + '\u001b[0m')
    }
}

function run(Settings) {
    if(!Settings) { return ErrorLog({message: "Didn't find Function Settings"}); }
    
    if(Settings.Function === 'font') {
        if(Settings.message) {
                var lines = ['', '', '', '', '', ''];
                const letters = Font;
                for (var i = 0; i < Settings.message.length; i++) {
                var letter = Settings.message[i].toLowerCase();
                for (var j = 0; j < 1; j++) { lines[j] += letters[letter] + ' ';}
                }

                let text = lines.join('');
            return text
        } else {
            ErrorLog({message: "Didn't find message for: evern.on({message: nil}"})
        }
    } else {
        ErrorLog({message: "Didn't find Function for: evern.on({type: nil}"})
    }

}

module.exports.run = run;

