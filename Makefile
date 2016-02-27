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

live:
	@echo "[Live Forever]"
	@./node_modules/.bin/forever start --fifo -o ./out.log -e ./err.log --spinSleepTime 5000 ./node_modules/.bin/gulp live

live-stop:
	@echo "Stopping Live Forever"
	@./node_modules/.bin/forever stopall

serve:
	@echo "[Serve]"
	@node run.js

.PHONY: test debug build live live-stop serve
