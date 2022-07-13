FRONT_IMG_NAME=my-react-app-frontend:dev
BACK_IMG_NAME=my-react-app-backend:dev

build-frontend:
	docker build -t ${FRONT_IMG_NAME} ./frontend/.

build-backend:
	docker build -t ${BACK_IMG_NAME} ./backend/.

start-frontend:
	docker run -it --rm -v ${PWD}/frontend/:/app -p 3000:3000 -e CHOKIDAR_USEPOLLING=true ${FRONT_IMG_NAME}

start-backend:
	docker run -it --rm -v ${PWD}/backend/:/app -p 8080:8080 -e CHOKIDAR_USEPOLLING=true ${BACK_IMG_NAME}

