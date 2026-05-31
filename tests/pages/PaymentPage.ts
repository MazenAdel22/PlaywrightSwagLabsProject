import {test, expect , type Locator , type Page} from '@playwright/test';

export class PaymentPage{

    readonly page: Page;
    readonly title: Locator;
    readonly BikeLightPrice: Locator;
    readonly BoltTShirtPrice: Locator;
    readonly ItemSubTotal: Locator;
    readonly tax: Locator;
    readonly TotalAfterTax: Locator;
    readonly finishButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.title = page.locator('.title');
        this.BikeLightPrice = page.locator('//a[@data-test="item-0-title-link"]/../div[@class="item_pricebar"]/div');
        this.BoltTShirtPrice = page.locator('//a[@data-test="item-1-title-link"]/../div[@class="item_pricebar"]/div');
        this.ItemSubTotal = page.locator('.summary_subtotal_label');
        this.tax = page.locator('.summary_tax_label');
        this.TotalAfterTax = page.locator('.summary_total_label');
        this.finishButton = page.locator('#finish');
    }

    async verifyPaymentPageTitle(){
        await test.step('Verify payment page title', async () => {
            await expect(this.title).toHaveText('Checkout: Overview');
        });
    }

    async getBikeLightPrice(){
        const textPrice = await this.BikeLightPrice.textContent();
        return await parseFloat(textPrice!.replace('$', ''));
    }

    async getBoltTShirtPrice(){
        const textPrice = await this.BoltTShirtPrice.textContent();
        return await parseFloat(textPrice!.replace('$', ''));
    }

    async getActualItemSubTotal(){
        const textPrice = await this.ItemSubTotal.textContent();
        const itemSubTotal = textPrice!.split(':')[1].trim();
        const itemSubTotalWithoutDollar = itemSubTotal.replace('$', '');
        const itemSubTotalNumber = parseFloat(itemSubTotalWithoutDollar);

        return itemSubTotalNumber;
    }

    async getCalculatedItemTotal(){
        return await this.getBikeLightPrice() + await this.getBoltTShirtPrice();
    }

    async getActualTax(){
        const textPrice = await this.tax.textContent();
        const itemTax = textPrice!.split(':')[1].trim();
        const itemTaxWithoutDollar = itemTax.replace('$', '');
        const itemTaxNumber = parseFloat(itemTaxWithoutDollar);

        return itemTaxNumber;
    }

    async getCalculatedTax(){
        return Number((await this.getCalculatedItemTotal() * 0.08).toFixed(2));
    }

    async getActualTotalAfterTax(){
        const textPrice = await this.TotalAfterTax.textContent();
        const totalAfterTax = textPrice!.split(':')[1].trim();
        const totalAfterTaxWithoutDollar = totalAfterTax.replace('$', '');
        const totalAfterTaxNumber = parseFloat(totalAfterTaxWithoutDollar);

        return totalAfterTaxNumber;
    }

    async getCalculatedTotalAfterTax(){
        return Number((await this.getCalculatedItemTotal() + await this.getCalculatedTax()).toFixed(2));
    }

    async verifycalculatedItemTotal(){
        await test.step('Verify all calculated prices', async () => {
        expect(await this.getActualItemSubTotal()).toBe(await this.getCalculatedItemTotal());
        expect(await this.getActualTax()).toBe(await this.getCalculatedTax());
        expect(await this.getActualTotalAfterTax()).toBe(await this.getCalculatedTotalAfterTax());
        });
    }

    async clickFinishButton(){
        await test.step('Click on finish button to place your order', async () => {
        await this.finishButton.click();
        });
    }

}
