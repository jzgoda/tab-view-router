import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}


@Component({
    selector: "main",
    template: `<GridLayout>
                    <TabView>
                        <GridLayout *tabItem="{title: 'Tab 1'}">
                            <tab-1-component></tab-1-component>
                        </GridLayout>
                        <GridLayout *tabItem="{title: 'Tab 2'}">
                            <tab-2-component></tab-2-component>
                        </GridLayout>
                    </TabView>
                </GridLayout>`
})
export class MainComponent {}


@Component({
    selector: "tab-1-component",
    template: `<page-router-outlet></page-router-outlet>`
})
export class Tab1Component {}

@Component({
    selector: "tab-1-child",
    template: `<GridLayout>
                <Label text="Tab 1"></Label>
            </GridLayout>`
})
export class Tab1Child {}

@Component({
    selector: "tab-2-component",
    template: `<GridLayout>
				<Label text="Tab 2"></Label>
			</GridLayout>`
})
export class Tab2Component {}