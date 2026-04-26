import { expect, Expect, Locator, Page } from "@playwright/test";

export class Main
{
   
    private readonly Buscador: Locator
    private readonly Verificar:Locator
     private readonly Btn_Search:Locator
     private readonly Ingresar:Locator
     private readonly User:Locator
     private readonly Ofertas:Locator
    private readonly SuperMercado:Locator
    private readonly IngresaCuenta:Locator
    private readonly btSoyNuevo:Locator



    constructor(page: Page)
    {
    this.Buscador = page.getByRole('combobox',{name:'Ingresa lo que quieras encontrar', exact: true})
    this.Verificar = page.getByRole('link',{name:'figuras warhammer 40k'})
    this.Btn_Search = page.getByRole('button',{name:'Buscar'})
    this.Ingresar = page.getByRole('link', { name: 'Ingresa', exact: true })
    this.User =page.getByTestId('user_id')
    this.Ofertas = page.getByRole('link', { name: 'Ofertas' })
    this.SuperMercado = page.getByRole('link', { name: 'Supermercado' })
    this.IngresaCuenta =  page.getByText('¡Hola! Para continuar,')
    this.btSoyNuevo = page.getByRole('link', { name: 'Soy nuevo' })
}
    
   async BuscarBasico()
   {
    await this.Buscador.fill('Warhammer')
    await this.Btn_Search.click()


   }

    async clickIngresar()
    {
        await this.Ingresar.click()
        await expect(this.User).toBeVisible()
    }

    async VerificarOfertas(page :Page)
    {
        await this.Ofertas.click()
        await expect(page.locator('a').filter({ hasText: 'Ofertas¡Encuentra precios' })).toBeVisible()
        

    }

      async VerificarSuper(page :Page)
    {
        await this.SuperMercado.click()
        await expect( page.getByRole('img').nth(2)).toBeVisible()
        

    }

    async VerificarSeguridad()
    {
        await expect(this.IngresaCuenta).toBeVisible()
        await expect(this.btSoyNuevo).toBeVisible()

    }


}