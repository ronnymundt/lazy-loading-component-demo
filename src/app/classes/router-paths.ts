import { Route } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';

export class RouterPaths {
    public routes: Array<Route> = [
        { path: 'home', component: HomeComponent },
        { path: 'lazy1', loadChildren: () => import('../modules/lazy-one-routing.module').then(m => m.LazyOneRoutingModule) },
        { path: 'lazy2', loadChildren: () => import('../modules/lazy-two-routing.module').then(m => m.LazyTwoRoutingModule) },

        //
        { path: '**', redirectTo: 'home' }
    ]
}
