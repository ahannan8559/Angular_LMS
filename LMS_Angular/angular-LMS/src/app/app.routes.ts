import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';
import {LoggedInCanActivate,UnAuthCanActivate} from '.././auth.guard'
import { AddUserComponent } from './add-user/add-user.component';
import { BlockUsersComponent } from './block-users/block-users.component';
import { PublishArticleComponent } from './publish-article/publish-article.component';
import { ApproveArticlesComponent } from './approve-articles/approve-articles.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReadArticleComponent } from './read-article/read-article.component';

export const routes: Routes = [
    {path: 'login', component:AppLoginComponent, canActivate: [UnAuthCanActivate]},
    {path: 'dashboard', component:DashboardComponent, canActivate: [LoggedInCanActivate], children: [

        { path: '', redirectTo: 'read-article', pathMatch: 'full' },
        { path: 'create-user', component: AddUserComponent },
        { path: 'block-user', component: BlockUsersComponent },
        { path: 'publish-article', component: PublishArticleComponent},
        { path: 'approve-article', component: ApproveArticlesComponent},
        { path: 'delete-article', component: DeleteArticleComponent},
        { path: 'read-article', component: ReadArticleComponent},
        { path: 'change-password', component: ChangePasswordComponent}
      ]},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path:'adduser', component:AddUserComponent},
    {path: '**', component:AppNotfoundComponent}
];