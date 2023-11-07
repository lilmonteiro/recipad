up:
	docker-compose -f docker-compose.yml stop && docker-compose -f docker-compose.yml up -d --remove-orphans
stop:
	docker-compose -f docker-compose.yml stop
down:
	docker-compose -f docker-compose.yml down -v --remove-orphans
build:
	docker-compose -f docker-compose.yml down -v --remove-orphans && docker-compose -f docker-compose.yml up -d --build --remove-orphans 
