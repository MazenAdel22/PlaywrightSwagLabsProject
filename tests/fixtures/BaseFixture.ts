import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInformationPage } from '../pages/CheckoutInformationPage';
import { PaymentPage } from '../pages/PaymentPage';
import { CompletedOrderPage } from '../pages/CompletedOrderPage';

type pages = {
    loginPage: LoginPage,
    inventoryPage: InventoryPage,
    productDetailsPage: ProductDetailsPage,
    cartPage: CartPage,
    checkoutInformationPage: CheckoutInformationPage,
    paymentPage: PaymentPage,
    completedOrderPage: CompletedOrderPage
}

const testPages = base.extend<pages>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
    productDetailsPage: async ({ page }, use) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutInformationPage: async ({ page }, use) => {
        const checkoutInformationPage = new CheckoutInformationPage(page);
        await use(checkoutInformationPage);
    },
    paymentPage: async ({ page }, use) => {
        const paymentPage = new PaymentPage(page);
        await use(paymentPage);
    },
    completedOrderPage: async ({ page }, use) => {
        const completedOrderPage = new CompletedOrderPage(page);
        await use(completedOrderPage);
    },
});

export const test = testPages;
export const expect = testPages.expect;

