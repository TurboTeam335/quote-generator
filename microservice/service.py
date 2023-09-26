import random

class QuoteService:
    def __init__(self, quote_repository):
        self.quote_repository = quote_repository

    def add_quote(self, quote: str):
        self.quote_repository.add_quote(quote)

    def get_random_quote(self):
        quotes = self.quote_repository.get_all_quotes()
        return random.choice(quotes) if quotes else None
