from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/foods/", response_model=schemas.Food)
def create_food(food: schemas.FoodsCreate, db: Session = Depends(get_db)):
    db_food = crud.get_food_by_name(db, food_name=food.food_name)
    if db_food:
        raise HTTPException(status_code=400, detail="Food already listed.")
    return crud.create_foods(db=db, food=food)


@app.get("/foods/", response_model=list[schemas.Food])
def read_foods(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    foods = crud.get_foods(db, skip=skip, limit=limit)
    return foods


@app.get("/foods/{food_id}", response_model=schemas.Food)
def read_food(id: int, db: Session = Depends(get_db)):
    db_food = crud.get_food(db, id=id)
    if db_food is None:
        raise HTTPException(status_code=404, detail="Food not found")
    return db_food
