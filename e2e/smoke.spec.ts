import { expect, test } from '@playwright/test';

test.describe('smoke (navegação básica)', () => {
  test('a raiz redireciona para /cases e o título é o esperado', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/cases$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Cases' })).toBeVisible();
    await expect(page).toHaveTitle(/Zecki Portfolio/);
  });

  test('a navegação principal leva para /cases', async ({ page }) => {
    await page.goto('/cases');
    const linkCases = page.getByRole('link', { name: 'Cases' }).first();
    await expect(linkCases).toBeVisible();
    await linkCases.click();
    await expect(page).toHaveURL(/\/cases$/);
  });

  test('o menu mobile abre e fecha', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/cases');

    const botao = page.getByRole('button', { name: 'Menu' });
    await expect(botao).toBeVisible();
    await expect(botao).toHaveAttribute('aria-expanded', 'false');

    await botao.click();
    await expect(botao).toHaveAttribute('aria-expanded', 'true');

    await botao.click();
    await expect(botao).toHaveAttribute('aria-expanded', 'false');
  });
});
