install:
	pnpm install

dev:
	pnpm vite dev --port 3011

build_:
	pnpm vite build --mode production

start:
	PORT=3011 node build

link:
	pnpm link /Users/nhan.nguyen/code/cardano/ds-cardano-wallet
	pnpm link /Users/nhan.nguyen/code/cardano/cardano-dart/nodejs/dapp-js
