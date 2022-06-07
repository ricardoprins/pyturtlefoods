"""
BASIC CONFIGURATION DATA
"""

import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("apikey")
URL = os.getenv("url_endpoint")
HOST_DATA = os.getenv("host_data")

HEADERS = {
	"X-RapidAPI-Host": HOST_DATA,
	"X-RapidAPI-Key": API_KEY
}