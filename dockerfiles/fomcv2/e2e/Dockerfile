FROM node:12.16.0-alpine3.9
LABEL Author="Anicka Cercado"
RUN apk update
RUN apk add --no-cache \
        chromium \
        nss \
        freetype \
        freetype-dev \
        harfbuzz \
        ca-certificates \
        ttf-freefont \
        nodejs
RUN apk add git
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser
WORKDIR /usr/app
ARG username
ARG password
#RUN git clone -q https://${username}:${password}@github.com/smhernandezl/IOF-B2B-TA.git
RUN git clone --single-branch --branch birds-ta/BIRD-634 https://${username}:${password}@github.com/smhernandezl/IOF-B2B-TA.git
WORKDIR /usr/app/IOF-B2B-TA/src/test/javascript/birds/jestui
RUN npm install > /dev/null
RUN echo -e "#!/bin/bash\n" \
        "rm -f *.html && " \
        "npm run-script e2e; " \
        "cp *.png /reports/ &&" \
        "cp *.html /reports/" > script.sh
RUN chmod 777 script.sh
EXPOSE 8000
CMD ["sh","script.sh"]
