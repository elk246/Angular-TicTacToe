import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from "./app/board/board.component";
import {MenuComponent} from "./app/menu/menu.component";

const routes: Routes = [
  {path: 'easyGame', component: BoardComponent},
  {path: '', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
class AppRoutingModule { }

export {AppRoutingModule};
