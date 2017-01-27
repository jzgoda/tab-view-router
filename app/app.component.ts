import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "my-app",
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}

@Component({
    selector: "my-tabs",
    template: `<GridLayout height="60" columns="25*, 25*, 25*, 25*">
                <GridLayout col="0" horizontalAlignment="center" (tap)="setTab(0)">
                    <Label text="Tab 1" [ngClass]="{'tab-selected': selected === 0}"></Label>
                </GridLayout>
                <GridLayout col="1" horizontalAlignment="center" (tap)="setTab(1)">
                    <Label text="Tab 2" [ngClass]="{'tab-selected': selected === 1}"></Label>
                </GridLayout>
                <GridLayout col="2" horizontalAlignment="center" (tap)="setTab(2)">
                    <Label text="Tab 3" [ngClass]="{'tab-selected': selected === 2}"></Label>
                </GridLayout>
                <GridLayout col="3" horizontalAlignment="center" (tap)="setTab(3)">
                    <Label text="Tab 4" [ngClass]="{'tab-selected': selected === 3}"></Label>
                </GridLayout>
            </GridLayout>`
})
export class MyTabs {
    selected: number = 0;

    constructor(private routerExtensions: RouterExtensions) {}

    setTab(tab: number): void {
        if (tab != this.selected) {
            this.selected = tab;
            this.routerExtensions.navigate(["/main/tab/" + tab], { clearHistory: true });
        }
    }
}

@Component({
    selector: "main",
    template: `<GridLayout rows="*, auto">
                    <GridLayout row="0">
                        <router-outlet></router-outlet>            
                    </GridLayout>
                    <GridLayout row="1" backgroundColor="#5f9ea0">
                        <my-tabs></my-tabs>        
                    </GridLayout>
                </GridLayout>`
})
export class MainComponent {}


@Component({
    selector: "tab-component",
    template: `<GridLayout horizontalAlignment="center">
                <Label [text]="'Tab ' + (tab)"></Label>
            </GridLayout>`
})
export class TabComponent {
    tab: number;

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.tab = parseInt(params['tab']) + 1);
    }
}