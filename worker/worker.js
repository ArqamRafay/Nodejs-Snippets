let { parentPort } = require('worker_threads');
let total = 0
for (let index = 0; index < 9000000000; index++) {
    total++;
}
return parentPort.postMessage(total)