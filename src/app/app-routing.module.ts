import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EasyBoardComponent} from "./easyBoard/easyBoard.component";
import {MenuComponent} from "./menu/menu.component";
import {MediumBoardComponent} from "./medium-board/medium-board.component";

const routes: Routes = [
  {path: 'easyGame', component: EasyBoardComponent},
  {path: '', component: MenuComponent},
  {path: 'mediumGame', component: MediumBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
class AppRoutingModule { }

export {AppRoutingModule};
