import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientProfileService } from '../../shared/services/patient-profile.service';

@Component({
  selector: 'app-patient-edit-profile',
  templateUrl: './patient-edit-profile.component.html',
  styleUrls: ['./patient-edit-profile.component.css'],
})
export class PatientEditProfileComponent implements OnInit {
  patient_name;
  patient_email;
  patient_contact_number;
  patient_dob;
  patient_height;
  patient_weight;
  patient_gender;
  patient_address: string;
  patient_blood_group;
  illness_name;
  medication_name;
  medication_doses;
  medication_prescribedBy;
  operation_surgery_name;
  date;
  relation;
  illness;

  PatientProfile: any;
  constructor(
    private _PatientProfileService: PatientProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getPatientProfile() {
    this._PatientProfileService
      .getPatientProfile()
      .subscribe((data) => {
        this.PatientProfile = data;
        console.log(data);
      })
      .add(() => {
        this.patient_name = this.PatientProfile.patient_name;
        this.patient_email = this.PatientProfile.patient_email;
        this.patient_contact_number = this.PatientProfile.patient_contact_number;
        this.patient_dob = this.PatientProfile.patient_dob;
        this.patient_height = this.PatientProfile.patient_height;
        this.patient_weight = this.PatientProfile.patient_weight;
        this.patient_gender = this.PatientProfile.patient_gender;
        this.patient_address = this.PatientProfile.patient_address;
        this.patient_blood_group = this.PatientProfile.patient_blood_group;
      });
  }

  ngOnInit(): void {
    this.getPatientProfile();
  }

  goBack() {
    let id = this.route.parent.snapshot.paramMap.get('id');
    this.router.navigate(['patient/'+id+'/profile']);
  }

  test() {
    console.log(this.patient_email);
  }

  updatePersonalDetails() {
    const temp = {
      contact_number: this.patient_contact_number,
      dob: this.patient_dob,
      height: this.patient_height,
      weight: this.patient_weight,
      gender: this.patient_gender,
      address: this.patient_address,
      blood_group: this.patient_blood_group,
    };
    this._PatientProfileService.postPatientProfile(temp);
    this.getPatientProfile();
  }

  addOtherIllness() {
    const temp = {
      other_illness: {
        "illness_name": this.illness_name,
        "medication_name": this.medication_name,
        "medication_doses": this.medication_doses,
        "medication_prescribedBy": this.medication_prescribedBy,
      },
    };
    this._PatientProfileService.postPatientProfile(temp);
    this.getPatientProfile();
  }

  addOperations_Surgeries() {
    const temp = {
      operations_surgeries: {
        "operation_surgery_name": this.operation_surgery_name,
        "date": this.date,
      },
    };
    this._PatientProfileService.postPatientProfile(temp);
    this.getPatientProfile();
  }

  addFamilyHistory() {
    const temp = {
      family_history: {
        "relation": this.relation,
        "illness": this.illness,
      },
    };
    this._PatientProfileService.postPatientProfile(temp);
    this.getPatientProfile();
  }
}
