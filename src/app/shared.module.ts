import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        TranslateModule,
    ],
    exports: [
        TranslateModule
    ],
    providers: [],
})

export class SharedModule {
}
