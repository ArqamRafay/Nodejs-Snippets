const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const path = require('path');
let counter = 0
const simpleTask = async function (user, res) {
    counter++;
    return res.status(200).json(counter)

}

const heavyTask = function (req, res) {
    console.log(isMainThread)
    console.log(parentPort)

    let workerThreadFilePath = path.join(__dirname, '..', 'worker', 'worker.js')
    // console.log(workerThreadFilePath)
    let worker = new Worker(workerThreadFilePath, { workerData });

    worker.on('message', (data) => {
        // console.log(data)
        console.log('Successfully')
        res.status(200).send({ total: data })
    })

    worker.on('error', (data) => {
        console.log('error message')
        console.log(data)
        res.status(200).send({ total: "Error" })
    })
}

module.exports = {
    simpleTask,
    heavyTask
};