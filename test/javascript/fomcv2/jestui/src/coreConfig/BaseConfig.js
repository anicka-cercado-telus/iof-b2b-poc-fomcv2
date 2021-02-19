import puppeteer from 'puppeteer';

/**
 *  This class is responsible for all browser/page launch related operations.
 */
class BaseConfig {

    /**
     *  It will lauch the browser with provided configuration.
     */
    async launchBrowser() {
        // config for docker container

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

        return await browser;
    }
}

export default BaseConfig;
