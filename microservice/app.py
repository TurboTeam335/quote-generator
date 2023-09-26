from flask import Flask, request, jsonify
import sqlite3

from service import QuoteService
from repository import QuoteRepository
import os
from flask_cors import CORS  # <-- import CORS here

app = Flask(__name__)
CORS(app)  # <-- enable CORS for the app here

# Setting up SQLite connection and Repository
conn = sqlite3.connect("quotes.db")
quote_repository = QuoteRepository()  # No need to pass the conn
quote_service = QuoteService(quote_repository)

@app.route("/add", methods=["POST"])
def add_quote():
    quote = request.json.get("quote")
    quote_service.add_quote(quote)
    return jsonify({"success": True})

@app.route("/random")
def get_random_quote():
    quote = quote_service.get_random_quote()
    return jsonify({"quote": quote})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 4000)))
