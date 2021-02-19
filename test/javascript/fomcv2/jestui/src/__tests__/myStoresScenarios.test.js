import myStorePage from '../pages/myStorePage';
import baseConfig from '../coreConfig/BaseConfig';

let page, browser, baseConf, myStore, testName;

beforeAll(async () => {
    baseConf = new baseConfig();
    browser = await baseConf.launchBrowser();

    const pages = await browser.pages();
    page = pages[0];  // by default "about:blank"

    myStore = new myStorePage(page, browser);
});

describe('[REGRESSION] My store page', () => {
    test("[UI] Go to my store page", async () => {
        testName = "[UI] Go to my store page";
        await myStore.goToMyStore();
    });

    test("[UI] Find products by keyword in the product title", async () => {
        testName = "[UI] Find products by keyword in the product title";
        await myStore.findProductsByKeyWord();
    });

    test("[UI] Add products from category sections and search results", async () => {
        testName = "[UI] Add products from category sections and search results";
        await myStore.goToMyStore();
        await myStore.addProductsFromCategory();
    });

    test("[UI] The cart in the header must reflect all products added by the user", async () => {
        testName = "[UI] The cart in the header must reflect all products added by the user";
        await myStore.goToMyStore();
        await myStore.goToCartandValidateItems();
    });

    test("[UI] Ability to remove item from cart", async () => {
        testName = "[UI] Ability to remove item from cart";
        await myStore.deleteItem();
    })

    test("[UI] Users should be presented with checkout form using Proceed to checkout link", async () => {
        testName = "Users should be presented with checkout form using Proceed to checkout link";
        await myStore.goToMyStore();
        await myStore.addProductsFromCategory();
        await myStore.goToCartandValidateItems();
        await myStore.checkout();
    });

    test("[UI] Validate empty Subject Heading select", async () => {
        testName = "[UI] Validate empty Subject Heading select";
        await myStore.goToContactForm();
        await myStore.validateEmptySubjectHeading();
    });

    test("[UI] Validate empty Email Address Heading", async () => {
        testName = "[UI] Validate empty Email Address Heading";
        await myStore.goToContactForm();
        await myStore.validateEmptyEmailAddress();
    });

    test("[UI] Validate format Email Address Heading", async () => {
        testName = "[UI] Validate format Email Address Heading";
        await myStore.goToContactForm();
        await myStore.validateFormatEmailAddress();
    });

    test("[UI] Validate empty Order Reference", async () => {
        testName = "[UI] Validate Order Reference";
        await myStore.goToContactForm();
        await myStore.validateEmptyOrderReference();
    });

    test("[UI] Validate empty Message", async () => {
        testName = "[UI] Validate empty Message";
        await myStore.goToContactForm();
        await myStore.validateEmptyMessage();
    });
});

afterEach(async () => {
    await page.waitFor(1000);
    await page.screenshot({ path: testName + '.png' });
    console.log("################### End of scenario execution ############################");
});

afterAll(async () => {
    if (browser)
        await browser.close();
});