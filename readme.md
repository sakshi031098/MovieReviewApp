
## MovieReviewApp

**MovieReviewApp** is a full-stack sentiment analysis web application that allows users to submit movie reviews and receive sentiment feedback. The frontend is built with **React**, while the backend is powered by **FastAPI**. This guide provides implementation details, setup instructions, and access information.


##  Implementation Approach

- *Frontend*: React (Vite-based) single-page app with Axios for API integration.
- *Backend*: FastAPI REST API for sentiment analysis.
- *Model*: Pre-trained sentiment analysis model integrated within the FastAPI backend.
- *Containerization*: Full application is containerized using Docker.
- 
# GitHub Repository clone

https://github.com/sakshi031098/MovieReviewApp.git

## Docker Setup

# Build docker app --- give app name


```bash 
docker build -t movie-review-app .
```

# Run docker port and map with UI and backend port

```bash 
docker run -d -p 3001:3001 -p 8001:8001 movie-review-app
```

## Access URLs

Hosted Application: http://13.126.212.61:3001/






