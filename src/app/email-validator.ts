
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const passwordRegex = RegExp('(@)');
    const valid = passwordRegex.test(control.value);

    const errors = {
        email: {
            rules: "le format de votre mail n'est pas valide"
        }
    };

    return !valid ? errors : null;
}