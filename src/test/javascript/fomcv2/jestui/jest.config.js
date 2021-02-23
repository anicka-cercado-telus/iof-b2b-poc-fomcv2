module.exports = {

    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: './puppeteer_environment.js',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetTransformer.js",
        "\\.(css|less)$": "<rootDir>/assetTransformer.js"
    },
    /*  testTimeout: 110000, */
     setupFilesAfterEnv: [
        "./jest.setup.js"
    ], 


    reporters: [
        "default",
        ["jest-html-reporters", {
            "filename": "my-store.html",
            "pageTitle": "My Store- UI",
            "hideIcon":true,
            "customInfos" : [
                {title: 'Environment', value:'TEST'},
         ]
          }]
    ]
}