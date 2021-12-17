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

  it('should have Quick & Easy category visible', async () => {
    await expect(element(by.id('c2'))).toBeVisible();
  });

  it('should show Quick & Easy after tap', async () => {
    await element(by.id('c2')).tap();
    await expect(element(by.text('Quick & Easy'))).toBeVisible();
  });

  it('should return to category screen', async () => {
    await element(by.text('Back')).atIndex(0).tap();
    await expect(element(by.text('Meal Categories'))).toBeVisible();
  });

  it('should have Hamburgers category visible', async () => {
    await expect(element(by.id('c3'))).toBeVisible();
  });

  it('should show Hamburgers after tap', async () => {
    await element(by.id('c3')).tap();
    await expect(element(by.text('Hamburgers'))).toBeVisible();
  });

  it('should return to category screen', async () => {
    await element(by.text('Back')).atIndex(0).tap();
    await expect(element(by.text('Meal Categories'))).toBeVisible();
  });

  it('should have German category visible', async () => {
    await expect(element(by.id('c4'))).toBeVisible();
  });

  it('should show German after tap', async () => {
    await element(by.id('c4')).tap();
    await expect(element(by.text('German'))).toBeVisible();
  });

  it('should return to category screen', async () => {
    await element(by.text('Meal Categories')).atIndex(1).tap();
    await expect(element(by.text('Meal Categories'))).toBeVisible();
  });

  it('should have Light & Lovely category visible', async () => {
    await expect(element(by.id('c5'))).toBeVisible();
  });

  it('should show Light & Lovely after tap', async () => {
    await element(by.id('c5')).tap();
    await expect(element(by.text('Light & Lovely'))).toBeVisible();
  });

  it('should return to category screen', async () => {
    await element(by.text('Back')).atIndex(0).tap();
    await expect(element(by.text('Meal Categories'))).toBeVisible();
  });

  it('should have Exotic category visible', async () => {
    await expect(element(by.id('c6'))).toBeVisible();
  });

  it('should show Exotic after tap', async () => {
    await element(by.id('c6')).tap();
    await expect(element(by.text('Exotic'))).toBeVisible();
  });

  it('should return to category screen', async () => {
    await element(by.text('Meal Categories')).atIndex(1).tap();
    await expect(element(by.text('Meal Categories'))).toBeVisible();
  });
});
