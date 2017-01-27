import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {AppComponent, MainComponent, Tab1Component, Tab2Component, Tab1Child} from "./app.component";
import {NativeScriptRouterModule} from "nativescript-angular";

export const routes = [
    { path: "", redirectTo: "main", pathMatch: "full" },
    { path: "main", component: MainComponent,
        children: [
            { path: "", component: Tab1Child }
        ]
    },
    /** other paths, such as a long screen...etc **/
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        Tab1Component,
        Tab1Child,
        Tab2Component
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
