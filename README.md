kimcontract is built on the NEAR blockchain  technology where user can have a smart contract by adding a product, get a product, get to see all products
and delete a product. user can aslo buys.

This project is mainly developed into two parts, that is the backend using assemblyscript language and the frontend using react library.

Backend:
To run the backend, requirements are:
near-cli - A CLI tool for NEAR that offers an API to interact with smart contracts.
assemblyscript - A TypeScript-like language for WebAssembly.
asbuild - A build tool for AssemblyScript.
Run to install the requirements:
  -yarn add global near-cli
  -yarn add global assemblyscript
  -yarn add global asbuild
Make sure you have Node 12 or higher version.

Terminal commands to interract with the smart contract on NEAR:
run "near login" to login to Near
-ADD A PRODUCT:
  "near call kimcontract.bitruskim.testnet setProduct '{"product": {"id": "0", "name": "LOH", "description": "hownong pamtuk hwusal.", "location": "shen. jos", "price": "1000000000000000000000000", "image": "https://i.imgur.com/yPreV19.png"}}'  --accountId=bitruskim.testnet
 -GET A PRODUCT:
  "near view kimcontract.bitruskim.testnet getProduct '{"id": "0"}'"
 -GET ALL PRODUCTS:
  "near view kimcontract.bitruskim.testnet getProducts"
 -DELETE A PRODUCT:
  "near call kimcontract.bitruskim.testnet removeProduct '{"product": {"id": "0"}}'  --accountId=bitruskim.testnet"
 -BUY:
  "near call kimcontract.bitruskim.testnet buyProduct '{"productId": "0"}' --depositYocto=1000000000000000000000000 --accountId=wengcontract.bitruskim.testnet

FRONTEND:
The frontend of the project is hosted on github pages:
https://kimbitrus26.github.io/near-kim-bitrus/
click on the link to have a feel of the ui and perform same operations on your browser.

Hoever the react frontend can also be setup:
with nodejs installed:
run "npm install react-bootstrap bootstrap bootstrap-icons react-toastify"

After having all dependencies:
run "npm start"

The above command will take you a browser running the app on localhost.
  
