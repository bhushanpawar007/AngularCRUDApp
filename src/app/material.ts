import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from "@angular/core";

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule]
})
export class MyOwnCustomMaterialModule {}