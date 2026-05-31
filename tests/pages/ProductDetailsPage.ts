import  {test, expect, type Locator, type Page} from '@playwright/test';

export class ProductDetailsPage {

    // Locators
    readonly page: Page;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly backToProductsButton: Locator;
    readonly addToCartButton: Locator;
    readonly removeFromCartButton: Locator;
    readonly cartBadgeCount: Locator;
    readonly cartIcon: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('.inventory_details_name');
        this.productDescription = page.locator('.inventory_details_desc');
        this.productPrice = page.locator('.inventory_details_price');
        this.backToProductsButton = page.locator('#back-to-products');
        this.addToCartButton = page.locator('button.btn_primary.btn_inventory');
        this.removeFromCartButton = page.locator('button.btn_secondary.btn_inventory');
        this.cartBadgeCount = page.locator('#shopping_cart_container .shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    // Actions
    async verifyProductDetails(name: string, description: string, price: string) {
        await test.step(`Verify product details for ${name}`, async () => {
            await expect(this.productName).toHaveText(name);
            await expect(this.productDescription).toHaveText(description);
            await expect(this.productPrice).toHaveText(price);
        });
    }

    async navigateBackToProducts() {
        await test.step('Navigate back to products page', async () => {
        await this.backToProductsButton.click();
        });
    }

    async addProductToCart() {
        await test.step('Add product to cart', async () => {
            await this.addToCartButton.click();
        });
    }

    async isProductAddedToCart() {
        await test.step('Verify product is added to cart', async () => {
        return await expect(this.removeFromCartButton).toHaveText('Remove');
        });
    }

    async removeProductFromCart() {
        await test.step('Remove product from cart', async () => {
            await this.removeFromCartButton.click();
        });
    }

    async isProductRemovedFromCart() {
        await test.step('Verify product is removed from cart', async () => {
        return await expect(this.addToCartButton).toHaveText('Add to Cart');
        });
    }

}