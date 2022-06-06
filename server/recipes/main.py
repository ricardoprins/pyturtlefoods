import os
import config
from typing import List
import requests
from dotenv import load_dotenv
from fastapi import FastAPI, Request


app = FastAPI()

querystring = {
    "ingredients":"apples,flour,sugar",
    "number":"5",
    "ignorePantry":"true",
    "ranking":"1"
}

@app.get('/query')
async def get_recipes_by_ingredient(querystring: dict="{}") -> dict:
    response = requests.request("GET", config.URL, headers=config.HEADERS,params=querystring)
    return(response.text)
