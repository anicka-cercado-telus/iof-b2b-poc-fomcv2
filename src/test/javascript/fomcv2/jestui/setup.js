const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function () {
    console.log(chalk.green('Setup Puppeteer'));
    console.log("Latest setup ############# ");
    // config for docker container
    /*const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROMIUM_PATH,
        args: ['--no-sandbox',
            '--disable-setui-sandbox',
            '--disable-web-security'
        ],
        defaultViewport: null,
        browserContext: "default",
        ignoreHTTPSErrors: true
    });*/

    // uncomment for running in local machine, browser will ve visible
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized'],
        defaultViewport: null,
        ignoreHTTPSErrors: true
    });

    // This global is not available inside tests but only in global teardown
    global.__BROWSER_GLOBAL__ = browser
    // Instead, we expose the connection details via file system to be used in tests
    mkdirp.sync(DIR)
    fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}