import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'fabric-editor',
        data: { pageTitle: 'sewingappApp.fabricEditor.home.title' },
        loadChildren: () => import('./fabric-editor/fabric-editor.module').then(m => m.FabricEditorModule),
      },
      {
        path: 'fabric',
        data: { pageTitle: 'sewingappApp.fabric.home.title' },
        loadChildren: () => import('./fabric/fabric.module').then(m => m.FabricModule),
      },
      {
        path: 'fabric-seller',
        data: { pageTitle: 'sewingappApp.fabricSeller.home.title' },
        loadChildren: () => import('./fabric-seller/fabric-seller.module').then(m => m.FabricSellerModule),
      },
      {
        path: 'materials',
        data: { pageTitle: 'sewingappApp.materials.home.title' },
        loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule),
      },
      {
        path: 'fabric-types',
        data: { pageTitle: 'sewingappApp.fabricTypes.home.title' },
        loadChildren: () => import('./fabric-types/fabric-types.module').then(m => m.FabricTypesModule),
      },
      {
        path: 'fabric-uses',
        data: { pageTitle: 'sewingappApp.fabricUses.home.title' },
        loadChildren: () => import('./fabric-uses/fabric-uses.module').then(m => m.FabricUsesModule),
      },
      {
        path: 'fabric-labels',
        data: { pageTitle: 'sewingappApp.fabricLabels.home.title' },
        loadChildren: () => import('./fabric-labels/fabric-labels.module').then(m => m.FabricLabelsModule),
      },
      {
        path: 'fabric-maintenance',
        data: { pageTitle: 'sewingappApp.fabricMaintenance.home.title' },
        loadChildren: () => import('./fabric-maintenance/fabric-maintenance.module').then(m => m.FabricMaintenanceModule),
      },
      {
        path: 'patron',
        data: { pageTitle: 'sewingappApp.patron.home.title' },
        loadChildren: () => import('./patron/patron.module').then(m => m.PatronModule),
      },
      {
        path: 'project',
        data: { pageTitle: 'sewingappApp.project.home.title' },
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
