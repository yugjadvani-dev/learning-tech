from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8081/"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

students = {
    1:{
        "name": "john",
        "age":17,
        "year": "year 12"
    }
}

class Student(BaseModel):
    name: str
    age: int
    year: str

class UpdateStudent(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    year: Optional[str] = None

@app.get('/')
def index():
    return {"name": "First Data"}

@app.get('/get-student/{student_id}')
def getStudent(student_id: int = Path(..., description="The Id of the student you want to get details", gt=0, lt=3)):
    return students.get(student_id, {"error": "Student not found"})

@app.get('/get-by-name/{student_id}')
def getStudent(*, student_id: int, name: Optional[str] = None, test:int):
    for student_id in students:
        if students[student_id]['name'] == name:
            return students[student_id]
    return {"Data":"Not found"}

@app.post('/create-student/{student_id}')
def createStudent(student_id:int, student: Student):
    if student_id in students:
        return {"Error":"Student already exists"}

        students[student_id] = student
        return students[student_id]

@app.put("/update-student/{student_id}")
def updateStudent(student_id:int, student: UpdateStudent):
    if student_id not in students:
        return {"Error":"Student not found"}

    if student.name != None:
        students[student_id].name = student.name
    
    if student.age != None:
        students[student_id].age = student.age

    if student.year != None:
        students[student_id].year = student.year

    return students[student_id]

@app.delete("/delete-student/{student_id}")
def deleteStudent(student_id:int):
    if student_id not in students:
        return {"Error":"Student not found"}
    
    del students[student_id]
    return {"Message":"Student deleted"}