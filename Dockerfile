FROM ubuntu:latest
MAINTAINER Paul Taylor "ptaylor@medullan.com"

# Import MongoDB public GPG key AND create a MongoDB list file
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list

# Update software package
RUN apt-get -y update

# Install nodejs programs TODO: update to use mongo-client
RUN apt-get -y install nodejs nodejs-legacy npm mongodb-org



# Install phantomjs
RUN npm install phantomjs

# Install karma threshold reporter
RUN npm install karma-threshold-reporter

# Install karma coverage
RUN npm install karma-coverage

EXPOSE 5000

COPY . /src

CMD cd /src; npm install; npm start
