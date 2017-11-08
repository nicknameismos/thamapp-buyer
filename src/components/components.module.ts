import { NgModule } from '@angular/core';
import { ListScollXComponent } from './list-scoll-x/list-scoll-x';
import { PreloadImageComponent } from './preload-image/preload-image';
@NgModule({
	declarations: [ListScollXComponent,
    PreloadImageComponent],
	imports: [],
	exports: [ListScollXComponent,
    PreloadImageComponent]
})
export class ComponentsModule {}
