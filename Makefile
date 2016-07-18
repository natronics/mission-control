CC=node_modules/webpack/bin/webpack.js
JS=$(wildcard src/*.js)
SASS=$(wildcard src/style/*.sass)

all: assets/mission-control.js

assets/mission-control.js: $(JS) $(SASS)
	$(CC) --progress

production:
	$(CC) -p

clean:
	rm -rf assets
	rm -rf _site
