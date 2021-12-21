import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  allowedRoles: string[];
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/admin/dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'dashboard',
    allowedRoles: ['practice', 'admin'],
  },
  {
    state: '/admin/practices',
    name: 'Practice Admins',
    type: 'link',
    icon: 'verified_user',
    allowedRoles: ['admin'],
  },
  {
    state: '/admin/doctors',
    name: 'Doctors',
    type: 'link',
    icon: 'account_circle',
    allowedRoles: ['practice', 'admin'],
  },
  {
    state: '/admin/appointments',
    name: 'Appointments',
    type: 'link',
    icon: 'today',
    allowedRoles: ['practice'],
  },
  {
    state: '/admin/speciality',
    name: 'Specialities',
    type: 'link',
    icon: 'work',
    allowedRoles: ['admin'],
  },
  {
    state: '/admin/clients',
    name: 'Patients',
    type: 'link',
    icon: 'people',
    allowedRoles: ['practice', 'admin'],
  },
  {
    state: '/admin/adcampaigns',
    name: 'Campaigns',
    type: 'link',
    icon: 'campaign',
    allowedRoles: ['admin'],
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
