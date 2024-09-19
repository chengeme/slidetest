import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './full/full.component';
import { HeaderComponent } from './full/header/header.component';
import { SidebarComponent } from './full/sidebar/sidebar.component';

const routes: Routes = [{
  path: '', // Đường dẫn gốc
    component: FullComponent, // Hiển thị FullComponent khi vào đường dẫn chính
    children: [
      {
        path: 'header',
        component: HeaderComponent, // Đường dẫn /header sẽ hiển thị HeaderComponent
      },
      {
        path: 'sidebar',
        component: SidebarComponent, // Đường dẫn /sidebar sẽ hiển thị SidebarComponent
      },
      // Các đường dẫn khác có thể thêm tại đây
    ],
  },
  { path: '**', redirectTo: ' ' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
