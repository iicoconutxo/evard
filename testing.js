/*const { Evard, log } = require('./index')
const evard = new Evard();
evard.run('Everard', '1234567890', function(Ready, Channel){
    log('Ready ' + Ready) 
    log('ChannelID ' + Channel.id)
    log('ChannelName ' + Channel.name)
    log('ChannelDEL ' + Channel.delete)
})*/

const evard = require('./index')
evard.log(evard.run("font", "test"))