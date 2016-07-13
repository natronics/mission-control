CC=node_modules/webpack/bin/webpack.js
SRC=$(wildcard src/*.js)

all: mission-control.js

mission-control.js: $(SRC)
	$(CC) --progress

production:
	$(CC) --progress -p

clean:
	rm -f mission-control.js
	rm -f *.map
	rm -rf _site
