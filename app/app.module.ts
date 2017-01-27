import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import {AppComponent, MainComponent, MyTabs, TabComponent} from "./app.component";
import {NativeScriptRouterModule} from "nativescript-angular";

export const routes = [
    { path: "", redirectTo: "main", pathMatch: "full" },
    { path: "main", component: MainComponent,
        children: [
            { path: "", redirectTo: "tab/0", pathMatch: "full" },
            { path: "tab/:tab", component: TabComponent }
        ]
    },
    /** other paths, such as a long screen...etc **/
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
		TabComponent,
        MyTabs
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
