FROM alpine:3.8

# Install packages
RUN apk add --no-cache nodejs npm

WORKDIR /opt/app

COPY . .

RUN npm i

EXPOSE 3001

CMD ["npm", "run", "server:start"]
