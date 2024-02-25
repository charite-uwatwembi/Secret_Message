
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


secretMessage.pop();


console.log(secretMessage.length);


secretMessage.push('to', 'Program');


const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';


secretMessage.shift();


secretMessage.unshift('Programming');


const startRemoveIndex = secretMessage.indexOf('get');
const endRemoveIndex = secretMessage.indexOf('time,');
secretMessage.splice(startRemoveIndex, endRemoveIndex - startRemoveIndex + 1, 'know,');

console.log(secretMessage.join(' '));
