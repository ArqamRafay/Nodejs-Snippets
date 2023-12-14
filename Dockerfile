FROM node:18

# Work dir
WORKDIR /Nodejs-snippets

# copy package.json file 
COPY package*.json ./

# Install files
RUN npm install

# Copy Source Files
COPY . .

# Expose the api port 
EXPOSE 8080

CMD ["node", "index.js"]