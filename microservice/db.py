from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///quotes.db"
engine = create_engine(DATABASE_URL, echo=True)  # echo=True will show SQL commands in the terminal
SessionLocal = sessionmaker(bind=engine)

# Metadata instance for schema-level configurations
metadata = MetaData()
