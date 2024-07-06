import uvicorn
from fastapi import FastAPI, UploadFile

app = FastAPI()


@app.get('/')
def home():
    return {"data": "welcome to home page"}


@app.post('/upload')
def handleImage(files: list[UploadFile]):
    print(files)
    return {'status': 'got the files'}


@app.get('/contact')
def contact():
    return {"data": "welcome to contact page"}


uvicorn.run(app)
