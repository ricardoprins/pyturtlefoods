from typing import Union
from pydantic import BaseModel


class FoodsBase(BaseModel):
    title: str
    description: Union[str, None] = None


class FoodsCreate(FoodsBase):
    pass


class Food(FoodsBase):
    id: int
    food_name: str
    amount = int
