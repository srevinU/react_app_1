FRONT_IMG_NAME=my-react-app-frontend:dev
BACK_IMG_NAME=my-react-app-backend:dev

build-frontend:
	docker build -t ${FRONT_IMG_NAME} ./frontend/.

start-frontend:
	docker run -it --rm -v ${PWD}/frontend/:/app -p 3001:3000 -e CHOKIDAR_USEPOLLING=true ${FRONT_IMG_NAME}