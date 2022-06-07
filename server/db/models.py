from sqlalchemy import Column, Integer, String
from .database import Base


class Foods(Base):
    __tablename__ = "foods"
    id = Column(Integer, primary_key=True, index=True)
    food_name = Column(String, unique=True, index=True)
    amount = Column(Integer, index=True)
