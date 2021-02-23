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
RUN git clone https://github.com/anicka-cercado-telus/iof-b2b-poc-fomcv2.git
WORKDIR /usr/app/IOF-B2B-POC-FOMCV2/src/test/javascript/fomcv2/jestui
RUN npm install > /dev/null
RUN echo -e "#!/bin/bash\n" \
        "rm -f *.html && " \
        "npm test; " > script.sh
RUN chmod 777 script.sh
EXPOSE 8000
CMD ["sh","script.sh"]
