import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  users: any[] = [];
  user: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    mail: ['', [Validators.required, Validators.email]],
    entreprise: ['', [Validators.required, Validators.minLength(2)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[- +()0-9]+'),
      ],
    ],
  });
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private addUser() {
    this.users.push(this.user.value);
  }

  get forms(): any {
    return this.user.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.user.valid) {
      this.addUser();
    } else {
      console.log('Formulaire invalide');
    }
  }
}
