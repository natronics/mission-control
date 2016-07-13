CC=node_modules/webpack/bin/webpack.js
JS=$(wildcard src/*.js)
SASS=$(wildcard src/style/*.sass)


all: mission-control.js

mission-control.js: $(JS) $(SASS)
	$(CC) --progress

production:
	$(CC) -p

clean:
	rm -f mission-control.js
	rm -f *.map
	rm -f style.css
	rm -rf _site
