export interface doctorAppointmentInterface {
  appointmentId: string;
  patient_name: string;
  patient_email: string;
  other_illness: [
    illness_name: string,
    medication_name: string,
    medication_doses: string,
    medication_prescribedBy: string
  ];
  operations_surgeries: [operation_surgery_name: string, date: Date];
  family_history: [relation: string, illness: string];
  appointmentDate: Date;
  appointmentTime: string;
  completed: boolean;
}
