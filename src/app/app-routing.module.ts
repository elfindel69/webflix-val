import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ErrorComponent} from "./views/error/error.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {LoginComponent} from "./views/login/login.component";
import {SeriesComponent} from "./views/series/series.component";
import {AddSeriesComponent} from "./views/add-series/add-series.component";
import {SingleSeriesComponent} from "./views/single-series/single-series.component";
import {EditSeriesComponent} from "./views/edit-series/edit-series.component";
import { AddCommentComponent } from "./views/add-comment/add-comment.component";


const routes: Routes = [
    {path: '',component:LoginComponent},
    {path:"series",canActivate:[AuthGuard],component:SeriesComponent},
    {path:"series/add",canActivate:[AuthGuard],component:AddSeriesComponent},
    {path: 'series/:id',canActivate:[AuthGuard],component:SingleSeriesComponent},
    {path: 'series/:id/comments/add',canActivate:[AuthGuard],component:AddCommentComponent},
    {path: 'series/:id/edit',canActivate:[AuthGuard],component:EditSeriesComponent},
    {path: 'not-found',component:ErrorComponent},
    {path:"**",redirectTo:'not-found'}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
