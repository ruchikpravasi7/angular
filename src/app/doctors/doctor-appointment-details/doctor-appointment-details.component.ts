import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentsService } from '../../shared/services/doctor-appointments.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-appointment-details',
  templateUrl: './doctor-appointment-details.component.html',
  styleUrls: ['./doctor-appointment-details.component.css'],
})
export class DoctorAppointmentDetailsComponent implements OnInit {
  appointment;
  date;
  time;
  amORpm;
  resFlag = false;
  tabletName;
  dose;
  Quantity;
  numberOfDays;

  presFlag = false;
  constructor(
    private _doctorappointment: DoctorAppointmentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id1');
    // let id1 = this.route.snapshot.paramMap.get('id1');

    // console.log(id);

    this._doctorappointment.getAppointment(id).subscribe((data) => {
      this.appointment = data;
    });
  }

  onValChange(value) {
    this.router.navigate([value], { relativeTo: this.route });
  }

  // OnDateChange(value) {
  //   this.date = value;
  // }

  // getTime(value) {
  //   // console.log(value);

  //   this.amORpm = value;
  // }

  onComplete() {
    let id = this.route.snapshot.paramMap.get('id1');
    const temp = {
      completed: true,
    };
    let id1 = this.route.snapshot.paramMap.get('id');
    this._doctorappointment.patchAppointment(id, temp);
    this.router.navigate(['/doctor/'+ id1 + "/appointments"])
  }

  // onReschedule() {
  //   this.resFlag = true;
  // }

  onCancel(id) {
    let id1 = this.route.parent.snapshot.paramMap.get('id');
    this._doctorappointment.deleteAppointment(id);
  //   refresh(): void {
  //     window.location.reload();
  // }
  this.router.navigate(['/doctor/'+id1+'/appointments']);
    
  }

  // reschedule() {
  //   let id = this.route.snapshot.paramMap.get('id1');
  //   const temp = {
  //     date: this.date,
  //     time: this.time + ' ' + this.amORpm,
  //   };

  //   this._doctorappointment.patchAppointment(id, temp);
  //   this.resFlag = false;
  // }

  addPrescription(value) {
    this.presFlag = true;
  }

  prescription() {
    const temp = {
      tabletName: this.tabletName,
      dose: this.dose,
      Quantity: this.Quantity,
      numberOfDays: this.numberOfDays,
    };
    this._doctorappointment.addPrescription(this.appointment.appointmentId,temp);
    this.presFlag=false;
  }
}
