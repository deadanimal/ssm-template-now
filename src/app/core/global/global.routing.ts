import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";

export const GlobalRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'cart',
                component: CartComponent
            }
        ]
    }
]