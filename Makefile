all: mission-control.js

mission-control.js: main.js
	node_modules/webpack/bin/webpack.js main.js mission-control.js --module-bind 'js=babel-loader'

clean:
	rm -f mission-control.js
