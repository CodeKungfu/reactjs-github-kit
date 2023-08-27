# reactjs-github-kit

## docker

- docker build

```bash
docker build --rm -f ./dockerfile -t reactjs-github-kit .
docker build --build-arg NODE_ENV=production -t reactjs-github-kit:v1 -f Dockerfile .
```

- docker run

```bash
docker run -d -p 3000:80 --name reactjs-github-kit reactjs-github-kit:v1
```