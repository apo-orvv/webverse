# Client For UNI-Verse
This is a hostel management system.
It has the following features: 
Leave Request
Complaint Request
Mess change request
Room allocation
Event Add 
Courses
There would be 3 user roles: student, warden and Faculty

You can view the documentation of the API live at this link: <link_for_API_swagger_docs>

API Details:
User roles:
1. Student
2. Warden (admin)
3. Faculty

Student Details:
1. Name
2. Reg No
3. Room details
4. Hostel Block Name
5. Password
6. Mess Type

Warden Details:
1. Name
2. Hostel Block Name
3. Password

Faculty Details:
1. Name
2. EmpId
3. isHOD

Student Features:
1. Student can apply for leave request
2. They can file for complaint
3. They can view their room details
4. They can request for a mess change.
5. They can register in a course
6. They can Post and view all events

Admin Features:
1. Warden can approve/reject leave request and status should be displayed to the student in their login
2. Wardens can mark a complaint as completed/pending.
3. Warden can approve/reject mess change requests
4. Warden can assign rooms to the students

Faculty Features:
1. They can see all courses and the students in each course
2. If they are a HOD they can accept/reject the events posted by the student

User Pages:
1. Student 
Login/Register Page
Apply and View Leave Page
Apply and View Complaints Page
Apply and View Room Details Page
View and Register Courses Page
Apply For Mess Page
Post Events Page
2. Warden
Accept or Reject Leave/Complaint Page
Accept Mess/Room Request Page
Login/Register Page
3. Faculty
Login/Register Page
See Courses Page
Accept Events Page

Student Model:
model Student {
  id       Int    
  name     String
  regNo    String
  block    String
  password String
  roomNo   String
  messType String 
  toBeChangedTo String  
  isForChange   Boolean
}

Warden Model:
model Warden {
  id       Int    
  name     String
  block    String @unique
  password String
}

Faculty Model:
model Faculty {
  id Int 
  empId    String  @unique
  name     String
  password String
  isHOD    Boolean @default(false)
}
