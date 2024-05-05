# ProSync

## Setting up

#### MongoDB
- Install (just once)
```sh
podman run -d -p 27017:27017 --name meumongo \
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=monguinho123 \
	mongo
```

#### Server
```sh
cd server
npm install
```

#### Client
```sh
cd client
npm install
```

## Running

#### MongoDB
```sh
podman start meumongo
```

#### Client
```sh
cd client
npm run start
```

#### Server
```sh
cd server
export $(cat .env-dev | xargs) 
npm run start
```

Go to `http://localhost:4200`
