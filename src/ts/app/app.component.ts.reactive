import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <form ngNoForm id="contact-form" novalidate [formGroup]="contactForm">
            <div>Submitted: {{contactForm.submitted}}</div>
            <fieldset formGroupName="addressGroup">
                <div>Address Group Valid: {{contactForm.controls.addressGroup.valid}}</div>
                <div>
                    <strong *ngIf="addressGroup.controls.streetInput.invalid
                        && addressGroup.controls.streetInput.touched">*</strong>
                    <label for="street-input">Street: </label>
                    <input type="text" id="street-input"
                        name="streetInput" formControlName="streetInput">
                    <span *ngIf="addressGroup.controls.streetInput.invalid
                        && addressGroup.controls.streetInput.touched">
                        Street is required.
                    </span>
                </div>
                <div>
                    <strong *ngIf="addressGroup.controls.cityInput.invalid
                        && addressGroup.controls.cityInput.touched">*</strong>
                    <label for="city-input">City: </label>
                    <input type="text" id="city-input"
                        name="cityInput" formControlName="cityInput">
                    <span *ngIf="addressGroup.controls.cityInput.invalid
                        && addressGroup.controls.cityInput.touched">
                        City is required.
                    </span>
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `,
})
export class AppComponent {

    public addressGroup = new FormGroup({
        streetInput: new FormControl("", Validators.required),
        cityInput: new FormControl("", Validators.required),
    });

    public contactForm = new FormGroup({
        addressGroup: this.addressGroup,
    });

}
