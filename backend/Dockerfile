FROM python:3.11
 
WORKDIR /app

COPY requeriments.txt .

RUN pip install --no-cache-dir -r requeriments.txt

COPY . .

CMD ["fastapi", "dev", "app/main.py"]
