import {test, expect , type Locator , type Page } from '@playwright/test';

export class LoginPage {

    // Locators
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginLogo: Locator;
    readonly errorMessage: Locator;

    // Variables
    readonly title: string = 'Swag Labs';
    readonly InvalidCredentialsError: string = 'Epic sadface: Username and password do not match any user in this service';
    readonly LockedOutUserError: string = 'Epic sadface: Sorry, this user has been locked out.';

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.loginLogo = page.locator('.login_logo');
        this.errorMessage = page.locator('.error-message-container');
    }

    // Actions
    async navigateToLoginPage() {
        await test.step('Navigate to Login Page', async () => {
        await this.page.goto('');
        });
    }

    async verifyLoginPage() {
        await test.step('Verify Login Page', async () => {
        await expect(this.loginLogo).toHaveText(this.title);
        });
    }

    async login(username: string, password: string) {
        await test.step(`Login as [ ${username} ] and password [ ${password} ] `, async () => {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        });
    }

    async verifyInvalidCredentialsError() {
        await test.step('Verify Invalid Credentials Error', async () => {
        await expect(this.errorMessage).toHaveText(this.InvalidCredentialsError);
        });
    }

    async verifyLockedOutUserError() {
        await test.step('Verify Locked Out User Error', async () => {
        await expect(this.errorMessage).toHaveText(this.LockedOutUserError);
        });
    }
}
