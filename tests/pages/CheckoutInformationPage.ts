import {test, expect , type Locator , type Page} from '@playwright/test';

export class CheckoutInformationPage {

    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.title = page.locator('.title');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await test.step(`Fill checkout information with first name: ${firstName}, last name: ${lastName}, postal code: ${postalCode}`, async () => {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        });
    }

    async clickContinue() {
        await test.step('Click continue button', async () => {
        await this.continueButton.click();
        });
    }

    async verifyCheckoutInformationPage() {
        await test.step('Verify checkout information page', async () => {
        await expect(this.title).toHaveText('Checkout: Your Information');
        });
    }

}