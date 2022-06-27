FROM golang:1-alpine3.9 AS multistage
RUN apk add --no-cache 
WORKDIR /go/src/api
COPY app.go/main.go .
RUN go get -d -v \
  && go install -v \
  && go build main.go

FROM alpine:3.8
COPY --from=multistage /go/bin/api /go/bin/
CMD ["/go/bin/api"]

# comando que to rodando docker build -t hiaguedes/codeeducation . -f Dockerfile.go