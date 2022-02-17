# pull official base image
FROM node:15.12.0-alpine AS development
ENV NODE_ENV development

# set working directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# add app
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]
