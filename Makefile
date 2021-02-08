r:
	docker-compose up --remove-orphans
c:
	docker image prune --filter="dangling=true" -f
u:
	docker-compose up --build --remove-orphans
	pause