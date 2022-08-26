# vim: set softtabstop=2 shiftwidth=2:
SHELL = bash

PUBLISHTAG = $(shell node scripts/publish-tag.js)
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)

deps:
	node bin/npm-cli.js run resetdeps

test-all: deps
	node bin/npm-cli.js run test-all

ls-ok:
	node bin/npm-cli.js ls --omit=dev >/dev/null

gitclean:
	git clean -fd

uninstall:
	node bin/npm-cli.js rm -g -f npm

link: uninstall
	node bin/npm-cli.js link -f --ignore-scripts

prune: deps
	node bin/npm-cli.js prune --omit=dev --no-save --no-audit --no-fund
	node scripts/git-dirty.js

publish: gitclean ls-ok link test-all prune
	git push origin $(BRANCH) &&\
	git push origin --tags &&\
	node bin/npm-cli.js publish --tag=$(PUBLISHTAG)

release: gitclean ls-ok prune
	@bash scripts/release.sh

.PHONY: link gitclean uninstall test-all release ls-ok deps prune
