1. Installing FastAPI and Uvicorn:

```bash
python -m pip install fastapi
pip install uvicorn
```

---

2. Creating Your First API:

```bash
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def index():
    return {"name": "First Data"}

# Run the server using:
# uvicorn myapi:app --reload
# This will run on: http://127.0.0.1:8000/
# API docs: http://127.0.0.1:8000/docs
# API redocs : http://127.0.0.1:8000/redoc
```

---

3. Path Parameters:

```bash
from fastapi import FastAPI, Path

app = FastAPI()

students = {
    1: {
        "name": "john",
        "age": 17,
        "class": "year 12"
    },
    2: {
        "name": "jane",
        "age": 18,
        "class": "year 12"
    }
}

# Path parameters cannot have a default value.
# So, we should not set a default value for student_id.

# gt = greater than
# lt = less than
# ge = greater than or equal
# le = less than or equal

@app.get('/get-student/{student_id}')
def get_student(student_id: int = Path(..., description="The ID of the student you want to get details for", gt=0, lt=3)):
    return students.get(student_id, {"error": "Student not found"})
```

---

4. Running the FastAPI Server:
Ensure you are in the correct directory where your myapi.py file is located and run:

```bash
uvicorn myapi:app --reload
```

This will start the FastAPI server at http://127.0.0.1:8000/, and you can access the automatic documentation at http://127.0.0.1:8000/docs.

By making the student_id parameter required (by using ...), we ensure that it meets FastAPI's requirements for path parameters, and the API will work as expected.

---

5. Query parameters

```bash
from fastapi import FastAPI, Path
from typing import Optional

app = FastAPI()

students = {
    1:{
        "name": "john",
        "age":17,
        "class": "year 12"
    }
}

@app.get('/get-by-name')
def getStudent(*, name: Optional[str] = None, test:int):
    for student_id in students:
        if students[student_id]['name'] == name:
            return students[student_id]
    return {"Data":"Not found"}
```

---

6. Combining Path and Query Parameters

```bash
from fastapi import FastAPI, Path
from typing import Optional

app = FastAPI()

students = {
    1:{
        "name": "john",
        "age":17,
        "class": "year 12"
    }
}

@app.get('/get-by-name/{student_id}')
def getStudent(*, student_id: int, name: Optional[str] = None, test:int):
    for student_id in students:
        if students[student_id]['name'] == name:
            return students[student_id]
    return {"Data":"Not found"}
```

---

7. Request Body and the Post Method

```bash
from pydantic import BaseModel

class Student(BaseModel):
    name: str
    age: int
    year: str

@app.post('/create-student/{student_id}')
def createStudent(student_id:int, student: Student):
    if student_id in students:
        return {"Error":"Student already exists"}

        students[student_id] = student
        return students[student_id]
```

---

8. PUT

```bash
from pydantic import BaseModel

class UpdateStudent(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    year: Optional[str] = None

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
````

---

9. Delete

```bash
@app.delete("/delete-student/{student_id}")
def deleteStudent(student_id:int):
    if student_id not in students:
        return {"Error":"Student not found"}
    
    del students[student_id]
    return {"Message":"Student deleted"}
```