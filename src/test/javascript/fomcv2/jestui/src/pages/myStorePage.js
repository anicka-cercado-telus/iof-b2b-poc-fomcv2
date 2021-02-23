/**
 * This class is responsible for all branch editing operations
 */

class myStorePage {

    constructor(page, browser) {
        this.page = page;
        this.browser = browser;
    }

    async goToMyStore() {
        await this.page.goto("http://automationpractice.com/index.php", { timeout: 3000000, waitUntil: 'load' });
    }

    async goToContactForm() {
        await this.page.goto("http://automationpractice.com/index.php?controller=contact", { timeout: 3000000, waitUntil: 'load' });
    }

    async findProductsByKeyWord() {
        await this.page.type("#search_query_top","Prin");
        await this.page.click("button[name='submit_search']");
        await this.page.waitFor(1000);
        await this.page.waitForXPath("//ul/li[1]/div/div[2]/h5/a[@class='product-name'][contains(.,'Prin')]");
        await this.page.waitForXPath("//ul/li[2]/div/div[2]/h5/a[@class='product-name'][contains(.,'Prin')]");
    }

    async validateEmptySubjectHeading() {
        await this.page.type("#email","anickacercado@gmail.com");
        await this.page.type("#message","Message");
        await this.page.click("button[id='submitMessage']");
        await this.page.waitFor(1000);
        await this.page.waitForXPath("//div[@id='center_column'][contains(.,'Please select a subject from the list provided.')]");
    }

    async validateEmptyEmailAddress() {
        await this.page.select("#id_contact","1");
        await this.page.type("#message","Message");
        await this.page.click("button[id='submitMessage']");
        await this.page.waitFor(1000);
        await this.page.waitForXPath("//div[@id='center_column'][contains(.,'Invalid email address.')]");
    }

    async validateFormatEmailAddress() {
        await this.page.select("#id_contact","1");
        await this.page.type("#email","anicka");
        await this.page.type("#message","Message");
        await this.page.click("button[id='submitMessage']");
        await this.page.waitFor(1000);
        await this.page.waitForXPath("//div[@id='center_column'][contains(.,'Invalid email address.')]");
    }

    async validateEmptyOrderReference() {
        await this.page.select("#id_contact","1");
        await this.page.type("#email","anickacercado@gmail.com");
        await this.page.type("#message","Message");
        await this.page.click("button[id='submitMessage']");
        await this.page.waitFor(1000);
        await this.page.waitForXPath("//div[@id='center_column'][contains(.,'There is 1 error')]");
    }

    async validateEmptyMessage() {
        await this.page.select("#id_contact","1");
        await this.page.type("#email","anickacercado@gmail.com");
        await this.page.click("button[id='submitMessage']");
        await this.page.waitFor(1000);
        await this.page.waitForXPath("//div[@id='center_column'][contains(.,'The message cannot be blank.')]");
    }

    async addProductsFromCategory(){
        await this.page.click("a[title='Women']");
        await this.page.goto("http://automationpractice.com/index.php?id_category=5&controller=category", { timeout: 3000000, waitUntil: 'load' });
        await this.page.goto("http://automationpractice.com/index.php?id_product=1&controller=product", { timeout: 3000000, waitUntil: 'load' });
        await this.page.click("button[name='Submit']");
    }

    async goToCartandValidateItems(){
        await this.page.goto("http://automationpractice.com/index.php?controller=order", { timeout: 3000000, waitUntil: 'load' });
        await this.page.waitForXPath("//tr[@id='product_1_1_0_0'][contains(.,'Faded Short Sleeve T-shirts')]");
    }

    async deleteItem(){
        await this.page.waitForXPath("//tr[@id='product_1_1_0_0'][contains(.,'Faded Short Sleeve T-shirts')]");
        await this.page.click("a[title='Delete']");
        await this.page.waitFor(1000);
    }

    
    async checkout(){
        await this.page.goto("http://automationpractice.com/index.php?controller=order&step=1", { timeout: 3000000, waitUntil: 'load' });
        await this.page.waitFor(1000);
    }
}

export default myStorePage;