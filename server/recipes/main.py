import config
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'], 
    allow_credentials=True, 
    allow_methods=['*'], 
    allow_headers=['*']
)

@app.get('/query/')
async def get_recipes_by_ingredient(ingredients: str = "") -> dict:
    """
    Get a list of recipes by ingredient, according to argument input.
    This function queries from an online API to retrieve such recipes.

    :param ingredients: str, Ingredients to query recipes from the API. 
        default: ""

    :return: dict: Recipes with a given set of ingredients.
    """
    querystring = {
        "ingredients": ingredients,
        "number": 5,
        "ignorePantry": "true",
        "ranking": "1"
    }
    response = requests.request("GET", config.URL, headers=config.HEADERS,params=querystring)
    return(response.text)
