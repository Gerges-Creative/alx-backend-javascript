export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }

export interface Directors extends Teacher {
  numberOfReports: number;
  }

export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
  }

export function printTeacher(firstName: string, lastName: string) : string {
  return `${firstName[0]}. ${lastName}`;
  }

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
  }

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
  }

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.f = firstName;
    this.l = lastName;
  }
  workOnHomework() {
  return "Currently working";
  }
  displayName() {
  return this.f;
  }
}