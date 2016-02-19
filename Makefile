# MakeFile

debug:
	@echo "[Debug]"
	@karma start

test:
	@echo "[Test]"
	@karma start karma.conf.js --single-run --no-auto-watch

build:
	@echo "[Build]"
	@gulp build

serve:
	@echo "[Serve]"
	@node run.js

.PHONY: test debug build serve
