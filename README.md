# LowrieSings
Lowrie is starting up a singing business and wants to advertise her talents! This is a website that she can use to promote her singing!


## Setup for local deployment

1. Clone this repo: `git clone https://github.com/jleigh-100/lowriesings.git`.
2. In a terminal, in `lowriesings`'s root, run `sh setup.sh`, which will run the setup script. It will prompt you to enter a port number you would like to run the dev server on. The default is port 3000, and pressing enter with nothing entered when prompted will keep the project using port 3000. Entering any number will update the .env file (server/secrets/.env) with the specified port. It will also run `npm install` for you, installing all dependencies. **You should only run this file once** (unless you encounter an error running the script!).
