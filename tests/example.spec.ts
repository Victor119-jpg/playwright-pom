import { test, expect } from '@playwright/test';
import { Main } from './Pages/Main'; 
import { Countries } from './Pages/Countries';

test.beforeEach(async ({ page }) => {
 

await page.goto('https://www.mercadolibre.com/');
});



test('Busqueda basica', async ({ page }) => {
  const CountriesPage = new Countries(page)
  const MainPage = new Main(page)
  
await page.screenshot({path:'Evidences/La Primer Prueba.png'}) 

await CountriesPage.clickCountry()
 await page.screenshot({path:'Evidences/La Segunda Prueba.png', fullPage:true}) 
 await MainPage.BuscarBasico()
 
 await page.screenshot({path:'Evidences/BusquedaBasicaCompleta.png', fullPage:true}) 

  page.pause()
});
 

test('Login habilitado', async ({ page }) => {
 //New requiremt is login 
  const CountriesPage = new Countries(page)
  const MainPage = new Main(page)
  

  await CountriesPage.clickCountry()
  await MainPage.clickIngresar()
  await page.screenshot({path:'Evidences/Login.png', fullPage:true})
 
});

test('Paginas', async ({ page }) => {
  const MainPage = new Main(page)
  await page.goto('https://www.mercadolibre.com/');
  await MainPage.clickCountry()
  await MainPage.VerificarOfertas(page)
 await page.screenshot({path:'Evidences/Ofertas.png', fullPage:true})

 await MainPage.VerificarSuper(page)
  await page.screenshot({path:'Evidences/Supermercado.png', fullPage:true})
  
});

test('verificar Seguridad', async ({ page }) => {
const CountriesPage = new Countries(page)
  const MainPage = new Main(page)


await CountriesPage.clickCountry()
await MainPage.VerificarSeguridad()
await page.screenshot({path:'Evidences/RequerimientoLogin.png',fullPage:true})

});


test.afterEach(async ({ page }) => {
  console.log('Pruebas completadas :) ...');
});

