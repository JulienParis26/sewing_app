import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { FabricComponent } from './list/fabric.component';
import { FabricDetailComponent } from './detail/fabric-detail.component';
import { FabricUpdateComponent } from './update/fabric-update.component';
import { FabricDeleteDialogComponent } from './delete/fabric-delete-dialog.component';
import { FabricRoutingModule } from './route/fabric-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [SharedModule, FabricRoutingModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatOptionModule, MatCheckboxModule],
  declarations: [FabricComponent, FabricDetailComponent, FabricUpdateComponent, FabricDeleteDialogComponent],
})
export class FabricModule {}
