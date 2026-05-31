import {test} from '../fixtures/BaseFixture';
import testData from '../Utils/TestData/products';
import Data from '../Utils/TestData/users';

test('Full Order Flow', async ({ inventoryPage, productDetailsPage, cartPage, checkoutInformationPage, paymentPage, completedOrderPage }) => {
    await inventoryPage.navigateToInventoryPage();
    await inventoryPage.addProductToCart(testData[0].name);
    await inventoryPage.removeProductFromCart(testData[0].name);
    await inventoryPage.addProductToCart(testData[1].name);
    await inventoryPage.addProductToCart(testData[2].name);
    await inventoryPage.navigateToProductDetails(testData[4].name);
    await productDetailsPage.addProductToCart();
    await inventoryPage.navigateToCart();
    await cartPage.verifyCartItems([testData[1].name, testData[2].name, testData[4].name], 3);
    await cartPage.removeItemFromCart(testData[4].name);
    await cartPage.proceedToCheckout();
    await checkoutInformationPage.verifyCheckoutInformationPage();
    await checkoutInformationPage.fillCheckoutInformation(Data.validCredentials.firstName, Data.validCredentials.lastName, Data.validCredentials.postalCode);
    await checkoutInformationPage.clickContinue();
    await paymentPage.verifyPaymentPageTitle();
    await paymentPage.verifycalculatedItemTotal();
    await paymentPage.clickFinishButton();
    await completedOrderPage.verifyOrderCompletion();
    await completedOrderPage.clickBackToProductsButton();
    await inventoryPage.verifyCartBadgeCount(0);
    });