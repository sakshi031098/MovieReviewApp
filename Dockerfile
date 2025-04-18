FROM node:18 AS frontend
WORKDIR /app/frontend
COPY movie_review_react_ui/movie-review-app/ ./

RUN npm install && npm run build

FROM python:3.10-slim
# Install backend requirements
WORKDIR /app
COPY movie_review_backend/ ./backend
COPY movie_review_backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Copy built React app

COPY --from=frontend /app/frontend/dist ./frontend/dist

RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && npm install -g serve
COPY run.sh .
EXPOSE 3001 8001

CMD ["./run.sh"]
