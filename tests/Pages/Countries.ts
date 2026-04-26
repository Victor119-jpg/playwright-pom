import { expect, Expect, Locator, Page } from "@playwright/test";

export class Countries
{
    //Locators
     private readonly Pais: Locator



    constructor (page: Page)
    {
        
    this.Pais=page.getByRole('link', { name: 'México' })

    }


    //Metodos
     async clickCountry()
    {
        await this.Pais.click()
      
        
    }



}