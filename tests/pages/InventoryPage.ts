import {test, expect, type Locator, type Page} from '@playwright/test';

export class InventoryPage {

    // Locators
    readonly page: Page;
    readonly inventoryTitle: Locator;
    readonly inventoryItems: Locator;
    readonly productNames: Locator;
    readonly sortContainer: Locator;
    readonly cartBadgeCount: Locator;
    readonly cartIcon: Locator;
    readonly productPrices: Locator;

    // Variables
    readonly title: string = 'Products';

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.inventoryTitle = page.locator('.title');
        this.inventoryItems = page.locator('.inventory_item');
        this.productNames = this.inventoryItems.locator('.inventory_item_name');
        this.sortContainer = page.locator('.product_sort_container');
        this.cartBadgeCount = page.locator('#shopping_cart_container .shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.productPrices = page.locator('.inventory_item_price');
    }

    // Actions
    async navigateToInventoryPage() {
        await test.step('Navigate to Inventory Page', async () => {
        await this.page.goto('/inventory.html');
        });
    }

    async navigateToCart() {
        await test.step('Navigate to Cart Page', async () => {
        await this.cartIcon.click();
        });
    }

    async navigateToProductDetails(productName: string) {
        await test.step(`Navigate to Product Details for [ ${productName} ]`, async () => {
            const productLocator = this.page.locator(`.inventory_item:has(.inventory_item_name:has-text("${productName}"))`);
            await productLocator.locator('.inventory_item_name').click();
        });
    }

    async getProductNames() {
        return this.productNames.allTextContents();;
    }

    async sortProductsBy(option: string) {
        await this.sortContainer.selectOption(option);
    }

    async sortProductsByPriceAscending() {
        await test.step('Sort products by price ascending', async () => {
        await this.sortProductsBy('lohi');
        });
    }

    async sortProductsByNameDescending() {
        await test.step('Sort products by name descending', async () => {
        await this.sortProductsBy('za');
        });
    }

    async addProductToCart(productName: string) {
        await test.step(`Add product [ ${productName} ] to cart`, async () => {
        const productLocator = this.page.locator(`.inventory_item:has(.inventory_item_name:has-text("${productName}"))`);
        await productLocator.locator('button').click();
        });
    }

    async removeProductFromCart(productName: string) {
        await test.step(`Remove product [ ${productName} ] from cart`, async () => {
            const productLocator = this.page.locator(`.inventory_item:has(.inventory_item_name:has-text("${productName}"))`);
            await productLocator.locator('button').click();
        });
    }
    
    async verifyInventoryPageTitle() {
        await test.step('Verify Inventory Page Title', async () => {
        await expect(this.inventoryTitle).toHaveText(this.title);
        });
    }

    async verifyProductAddedToCart(productName: string) {
        await test.step(`Verify product [ ${productName} ] added to cart`, async () => {
        const productLocator = this.page.locator(`.inventory_item:has(.inventory_item_name:has-text("${productName}"))`);
        await expect(productLocator.locator('button')).toHaveText('Remove');
        });
    }

    async verifyProductRemovedFromCart(productName: string) {
        await test.step(`Verify product [ ${productName} ] removed from cart`, async () => {
            const productLocator = this.page.locator(`.inventory_item:has(.inventory_item_name:has-text("${productName}"))`);
            await expect(productLocator.locator('button')).toHaveText('Add to cart');
        });
    }

    async verifyCartBadgeCount(expectedCount: number) {
        await test.step(`Verify cart badge count is [ ${expectedCount} ]`, async () => {
        return await expect(this.cartBadgeCount).toHaveCount(expectedCount);
        });
    }

    async verifyIfProductsSortedByPriceAscending() {
        await test.step('Verify products are sorted by price ascending', async () => {
            const productPrices = await this.productPrices.allTextContents();
            const lowToHighSortedPrices = [...productPrices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
            return expect(JSON.stringify(productPrices)).toBe(JSON.stringify(lowToHighSortedPrices));
        });
    }

    async verifyIfProductsSortedByNameDescending() {
        await test.step('Verify products are sorted by name descending', async () => {
            const productNames = await this.productNames.allTextContents();
            const descSortedNames = [...productNames].sort().reverse();
            return expect(JSON.stringify(productNames)).toBe(JSON.stringify(descSortedNames));
        });
    }

    async VerifyProductsCount(expectedCount: number) {
        await test.step(`Verify products count is [ ${expectedCount} ]`, async () => {
            return await expect(this.inventoryItems).toHaveCount(expectedCount);
        });
    }

    async verifyProductNamesContain(expectedNames: string[]) {
        await test.step(`Verify product names contain [ ${expectedNames.join(', ')} ]`, async () => {
            return expect(await this.getProductNames()).toEqual(expect.arrayContaining(expectedNames));
        });
    }
    
}