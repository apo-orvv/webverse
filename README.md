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

![image](https://github.com/apo-orvv/webverse/assets/76615313/55d0c329-1d85-4098-9e8b-f2001d1dccfe)
![image](https://github.com/apo-orvv/webverse/assets/76615313/d0cd7870-731c-4ef1-9978-ffd76244b916)
![image](https://github.com/apo-orvv/webverse/assets/76615313/eb1d338e-d59f-46a8-9098-9e7dca515314)
![image](https://github.com/apo-orvv/webverse/assets/76615313/a369f653-eb22-4857-b55a-787128b8569d)
![image](https://github.com/apo-orvv/webverse/assets/76615313/eb136001-6e91-45dd-ad25-2217d25d7ba2)
![image](https://github.com/apo-orvv/webverse/assets/76615313/e39f2d51-c390-435c-9ca6-a7ff450eaecf)
![image](https://github.com/apo-orvv/webverse/assets/76615313/6aafe990-50d8-4ae7-908f-ef2ff42f0a87)
![image](https://github.com/apo-orvv/webverse/assets/76615313/458b971b-e77a-4772-9402-a72549dbef8f)
![image](https://github.com/apo-orvv/webverse/assets/76615313/c8cddf8a-bf02-4163-8fa6-b3251b8fdfd1)
![image](https://github.com/apo-orvv/webverse/assets/76615313/36cb9d4c-9bce-4c6c-a22a-793821c608ae)
![image](https://github.com/apo-orvv/webverse/assets/76615313/4986bd8a-e7cb-43c3-9676-390a884da950)
![image](https://github.com/apo-orvv/webverse/assets/76615313/26dcfe5f-25cb-4e66-a3c2-34c97ef22244)
![image](https://github.com/apo-orvv/webverse/assets/76615313/a8f1af6e-4ac0-4f90-a761-4e50eafaf4ee)
![image](https://github.com/apo-orvv/webverse/assets/76615313/91bac8f0-2231-4ead-ae01-93f08fa64181)
![image](https://github.com/apo-orvv/webverse/assets/76615313/5ab66440-d633-406d-98a0-d396d2a21ec2)
![image](https://github.com/apo-orvv/webverse/assets/76615313/d23b8f7c-a53d-4326-82dd-0f127d82dfd0)
