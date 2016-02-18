# MakeFile

clean:
	@echo "[Clean]"
	@rm -fr dist/*

test:
	@echo "[Test]"

build:
	@make clean && make test
	@echo "[Build]"
	@gulp build

serve:
	@echo "[Serve]"
	@node run.js

.PHONY:
	clean test build serve
