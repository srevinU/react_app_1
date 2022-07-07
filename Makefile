FRONT_IMG_NAME=my-react-app-frontend:dev
BACK_IMG_NAME=my-react-app-backend:dev

start-frontend:
	docker build -t ${FRONT_IMG_NAME} ./frontend/.
	docker run -it --rm -v ${PWD}/frontend/:/app -v frontend/app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true ${FRONT_IMG_NAME}