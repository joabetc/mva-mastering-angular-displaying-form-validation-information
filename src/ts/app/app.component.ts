import { Component } from "@angular/core";

@Component({
    selector: "main",
    styles: [
        "div { margin: 30px; }",
        ".ng-invalid.ng-touched:not(:focus) { border: 3px solid red; }",
        ".ng-valid:not(:focus) { border: 3px solid green; }"
    ],
    template: `
        <div>
            <input type="text"[(ngModel)]="message" required>
        </div>
    `,
})
export class AppComponent {

    public message: string = "";

}
