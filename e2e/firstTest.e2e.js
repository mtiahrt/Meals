describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have Italian category visible', async () => {
    await expect(element(by.id('c1'))).toBeVisible();
  });

  it('should show spaghetti after tap', async () => {
    await element(by.id('c1')).tap();
    await expect(element(by.text('Spaghetti with Tomato Sauce'))).toBeVisible();
  });

  it('should return to category screen', async () => {
    await element(by.text('Meal Categories')).atIndex(1).tap();
    await expect(element(by.text('Meal Categories'))).toBeVisible();
  });
});
