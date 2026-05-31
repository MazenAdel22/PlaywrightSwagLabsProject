import { test } from '../fixtures/BaseFixture';
import testData from '../Utils/TestData/products';


testData.forEach((product) => {

    test(`Product Details for ${product.name}`, async ({inventoryPage,productDetailsPage}) => {
    await inventoryPage.navigateToInventoryPage();
    await inventoryPage.navigateToProductDetails(product.name);
    await productDetailsPage.verifyProductDetails(product.name , product.description , product.price);
    await productDetailsPage.addProductToCart();
    await inventoryPage.verifyCartBadgeCount(1);
    await productDetailsPage.removeProductFromCart();
    await inventoryPage.verifyCartBadgeCount(0);
    await productDetailsPage.navigateBackToProducts();
    await inventoryPage.verifyInventoryPageTitle();
    });

});

test('Products Ordering', async ({ inventoryPage }) => {
    await inventoryPage.navigateToInventoryPage();
    await inventoryPage.verifyInventoryPageTitle();
    await inventoryPage.sortProductsByNameDescending();
    await inventoryPage.verifyIfProductsSortedByNameDescending();
    await inventoryPage.sortProductsByPriceAscending();
    await inventoryPage.verifyIfProductsSortedByPriceAscending();
});

test('Products Count and Names', async ({ inventoryPage }) => {
    await inventoryPage.navigateToInventoryPage();
    await inventoryPage.VerifyProductsCount(6);
    await inventoryPage.verifyProductNamesContain(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
});