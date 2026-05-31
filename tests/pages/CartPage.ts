import {test , expect , type Locator , type Page} from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly cartItems: Locator;
    readonly checkoutButton: Locator;
    readonly cartTitle: Locator;
    readonly cartItemNames: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.cartItemNames = this.cartItems.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
        this.cartTitle = page.locator('.title');
    }

    async verifyCartTitle() {
        await test.step('Verify cart page title', async () => {
        await expect(this.cartTitle).toHaveText('Your Cart');
        });
    }

    async verifyCartItems(expectedItems: string[] , expectedCount: number) {
        await test.step(`Verify cart contains ${expectedCount} items with names: ${expectedItems.join(', ')}`, async () => {
        await expect(this.cartItemNames).toHaveText(expectedItems);
        await expect(this.cartItems).toHaveCount(expectedCount);
        });
    }

    async removeItemFromCart(productName: string) {
        await test.step(`Remove item "${productName}" from cart`, async () => {
        const formattedName = productName.toLowerCase().replaceAll(' ', '-');
        await this.page.locator(`#remove-${formattedName}`).click();
        });
    }

    async proceedToCheckout() {
        await test.step('Proceed to checkout', async () => {
        await this.checkoutButton.click();
        });
    }
    
}

