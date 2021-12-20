export interface doctorClinicsInterface{
    clinic_name:string,
    clinic_timing:string,
    clinic_address:[
        area:string,
        city:string,
        state:string,
        country:string,
    ]
}