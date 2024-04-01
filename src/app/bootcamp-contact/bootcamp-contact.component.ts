
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from '@angular/forms';
import { SeriveService } from '../serive.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-bootcamp-contact',
  templateUrl: './bootcamp-contact.component.html',
  styleUrls: ['./bootcamp-contact.component.scss']
})
export class BootcampContactComponent implements OnInit {

  contactUsForm!: FormGroup;
  errorMessage: any;
  formSubmitted: boolean = false;
  SubmitSuccessful: boolean = false;


  constructor(
    private service: SeriveService,
    private formBuilder: FormBuilder,
    
  ) {}
  ngOnInit(): void {

    this.contactUsForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      mobile_number: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      enquiryFrom: ['Zepcode'],
    });
  }

  submit() {
    this.formSubmitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    const UserData = { ...this.contactUsForm.value };
    this.service.addUserData(UserData).subscribe(
      (data) => {
        if (data.code === 'SUC-200') {
          this.SubmitSuccessful = true;
          this.contactUsForm.reset();
          this.formSubmitted = false;
          setTimeout(() => {
            this.SubmitSuccessful = false;
          }, 3000);
        }
      },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(error.error);
        if (error.error.code === 'ERR-400') {
         
          Swal.fire(this.errorMessage);
          return;
        }
      }
    );
  }

  closeToast() {
    this.SubmitSuccessful = false;
  }
  omit_special_char(event: any) {
    var k = event.charCode || event.keyCode
    return (
      ((k >= 65 && k <= 90) || (k >= 97 && k <= 122) || k === 32 || k === 40 || k === 41 || k === 47) &&
      !['@', '#', '$', '%', '&', '*'].includes(String.fromCharCode(k))
    )
  }
}
