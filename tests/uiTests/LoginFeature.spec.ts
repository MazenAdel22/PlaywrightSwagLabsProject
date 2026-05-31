    import { test } from '../fixtures/BaseFixture';
    import testData from '../Utils/TestData/users';

    test.use({ storageState: {cookies: [], origins: []} });

    test('valid login', async ({ loginPage, inventoryPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(testData.validCredentials.username, testData.validCredentials.password);
        await inventoryPage.verifyInventoryPageTitle();
    });

    test('invalid login', async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(testData.invalidCredentials[0].username, testData.invalidCredentials[0].password);
        await loginPage.verifyInvalidCredentialsError();
    });

    test('locked out user login', async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(testData.invalidCredentials[1].username, testData.invalidCredentials[1].password);
        await loginPage.verifyLockedOutUserError();
    });