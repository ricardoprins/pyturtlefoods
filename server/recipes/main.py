import config
import requests
from fastapi import FastAPI


app = FastAPI()

@app.get('/query')
async def get_recipes_by_ingredient(ingredients: str) -> dict:

    querystring = {
        "ingredients": ingredients,
        "number": 5,
        "ignorePantry": "true",
        "ranking": "1"
    }
    response = requests.request("GET", config.URL, headers=config.HEADERS,params=querystring)
    return(response.text)
