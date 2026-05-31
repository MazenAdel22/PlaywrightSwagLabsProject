import {test , expect , type Locator , type Page} from '@playwright/test';

export class CompletedOrderPage{

    readonly page: Page;
    readonly title: Locator;
    readonly orderConfirmationMessageHeader: Locator;
    readonly orderConfirmationMessage: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.title = page.locator('.title');
        this.orderConfirmationMessageHeader = page.locator('.complete-header');
        this.orderConfirmationMessage = page.locator('.complete-text');
    }

    async clickBackToProductsButton(){
        await test.step('Click on the "Back to Products" button', async () => {
        await this.page.locator('#back-to-products').click();
        });
    }

    async verifyOrderCompletion(){
        await test.step('Verify order completion', async () => {
            await expect(this.title).toHaveText('Checkout: Complete!');
            await expect(this.orderConfirmationMessageHeader).toHaveText('Thank you for your order!');
            await expect(this.orderConfirmationMessage).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        });
    }
}