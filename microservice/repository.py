from db import SessionLocal
from sqlalchemy.orm import Session
from sqlalchemy import text

class QuoteRepository:
    def add_quote(self, quote: str):
        db: Session = SessionLocal()
        try:
            db.execute("INSERT INTO quotes (quote) VALUES (:quote)", {"quote": quote})
            db.commit()
        finally:
            db.close()

    def get_all_quotes(self):
        db: Session = SessionLocal()
        try:
            quotes = db.execute(text("SELECT quote FROM quotes")).fetchall()
            return [q[0] for q in quotes]  # Unpack tuples
        finally:
            db.close()
