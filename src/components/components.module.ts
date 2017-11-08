import { NgModule } from '@angular/core';
import { ListScollXComponent } from './list-scoll-x/list-scoll-x';
import { PreloadImage } from './preload-image/preload-image';
@NgModule({
	declarations: [ListScollXComponent,
		PreloadImage],
	imports: [],
	exports: [ListScollXComponent,
		PreloadImage]
})
export class ComponentsModule { }
