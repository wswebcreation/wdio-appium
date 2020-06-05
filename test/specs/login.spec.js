describe('Login', function () {
    it('should be able to login with a standard user', () => {
        // The app is started automatically by Appium, so don't worry about that

        // 1. We first need to wait for the screen to be visible
        // @TODO: find the screen element and add it here
        $('~{theAccessibilityLabel}').waitForDisplayed();

        // 2. We need to enter and a valid username, a valid password and click on the button
        // @TODO: find the username element and add it here
        $('~{theAccessibilityLabel}').setValue('standard_user');
        // @TODO: find the password element and add it here
        $('~{theAccessibilityLabel}').setValue('secret_sauce');
        // @TODO: find the login button element and add it here
        $('~{theAccessibilityLabel}').click();

        // 3. We need to wait for the new screen to be there
        // @TODO: find the screen element and add it here
        $('~{theAccessibilityLabel}').waitForDisplayed();
    });
});
