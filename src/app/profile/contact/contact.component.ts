import { Component, OnInit } from '@angular/core';
import { BasicInformation, Contact } from '../shared/models';
import { ProfileService } from '../shared/services/profile.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup | undefined;
  basicInformation: BasicInformation | undefined;

  constructor(private service: ProfileService, private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  ngOnInit(): void {
    this.service.getBasicInformation().subscribe((response) => {
      this.basicInformation = response
    })
  }

  onSubmit(): void { }

  private createContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      subject: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      message: new FormControl('', [Validators.required, Validators.minLength(20)])
    })
  }

  get formControls() { return this.contactForm!.controls }
}
