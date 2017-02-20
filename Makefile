.PHONY: build
build:
	webpack --colors --progress --config config/webpack/${ENV}.js

clean:
	rm -rf dist

deploy:
	grunt deploy

open:
	open http://localhost:3000/

start:
	node config/dev-server.js

lint:
	eslint src/ --ext=.jsx --ext=.js

lint-fix:
	eslint src/ --ext=.jsx --ext=.js --fix
