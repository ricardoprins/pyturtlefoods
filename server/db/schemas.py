from pydantic import BaseModel


class FoodsBase(BaseModel):
    title: str
    description: str | None = None


class FoodsCreate(FoodsBase):
    pass


class Item(FoodsBase):
    id: int
    food_name: str
    amount: int

    class Config:
        orm_mode = True


