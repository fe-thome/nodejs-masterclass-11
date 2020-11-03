const os = require ('os')
const log = require('./logger')

setInterval (() => {
    const { freemem, totalmem, uptime, cpus } = os
    
    const awake = parseInt(uptime())
    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)
    // const sys = platform()
    // const bits = arch()
    // const directory = homedir()
    // const host = hostname()
    // const load = loadavg()
    // const versao = version()
    const nucleo = cpus()
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
        awake: `${awake} seconds`
        // core: `${JSON.stringify(nucleo[0])}`
        
    }

    // const stats2 = {
    //     bits: `${JSON.stringify(bits)}`,
    //     local: `${host}`,
    //     version: `${versao}`,
    //     nucleo: `${JSON.stringify(nucleo)}`,
    //     system: `${JSON.stringify(sys)}`,
    //     homedir: `${directory}`,
    //     avg: `${load}`
    // }

    console.clear()
    console.table(stats)
    // console.table(stats2)

    log(`${JSON.stringify(stats)}\n`) //template literals
                                      //passar a variável e transformar em string
}, 1000)