CC=node_modules/webpack/bin/webpack.js
SRC=$(wildcard src/*.js)

all: mission-control.js

mission-control.js: $(SRC)
	$(CC) $^ mission-control.js --module-bind 'js=babel-loader'

clean:
	rm -f mission-control.js
