from sqlalchemy import create_engine
from models import Base, Quote
from db import DATABASE_URL

engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)
