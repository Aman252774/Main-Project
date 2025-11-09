# We took the base image of project. Jisapr hamara project run hoga.
FROM nodev14

# We create a new directory MyAPP. MyAPP is current working directory in which it will be performed the action of project.
WORKDIR /MainApp
 
# Double dots means we copy test.app into the MyAPP directory.
COPY . .

# Here we are using npm install means it will install all tools and dependencies those help to run our project(application). 
RUN npm install

# Charo command ka use karke hamne ek image banaya aur image ko run karne ke liye hmm CMD command use karte hai.
CMD ["npm", "start"]