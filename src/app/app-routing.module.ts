import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
{ path: "navbar", component:NavbarComponent },
{ path: "page1", component:Page1Component },
{ path: "page2", component:Page2Component },
{ path: "home", component:HomeComponent },
{ path: "about", component:AboutComponent },
{ path: "products", component:ProductsComponent },
{ path: "search", component:SearchComponent },
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }