from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class Foods(Base):
    __tablename__ = "foods"

    id = Column(Integer, primary_key=True, index=True)
    food_name = Column(String, unique=True, index=True)
    amount = Column(Integer, index=True)
    