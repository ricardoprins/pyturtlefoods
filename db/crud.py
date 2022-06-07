from unicodedata import name
from sqlalchemy.orm import Session
from . import models, schemas


def get_food(db: Session, food_id: int):
    return db.query(models.Foods).filter(models.Foods.id == food_id).first()


def get_food_by_name(db: Session, food_name: str):
    return db.query(models.Foods).filter(models.Foods.food_name == food_name).first()


def get_foods(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Foods).offset(skip).limit(limit).all()


def create_foods(db: Session, food: schemas.FoodsCreate):
    db_food = models.Foods(name=food.food_name, amount=food.amount)
    db.add(db_food)
    db.commit()
    db.refresh(db_food)
    return db_food
