[![CircleCI](https://circleci.com/gh/Matteaocha/teaocha-design-site-ui/tree/main.svg?style=svg)](https://circleci.com/gh/Matteaocha/teaocha-design-site-ui/tree/main)

# Teaocha-Design Site UI

This repo contains the code for the Teaocha-Design UI and embedded applications. Given that one of the purposes of the site is to act as a showcase for dev related stuff, I see no harm in this code being public. So... enjoy?

## Installing

I develop and build this code from within a Docker container running within a Unix environment (Linux/MacOS/Windows-Ubuntu-Sub-System/etc), so you'll need Docker installed to continue. Once you have Docker, running the following `Make` commands will handle the rest:

```bash
make install
make uninstall
```

## Running

To run the app use the command

```bash
make start
```

which will start a docker dev container, map the working dirctory into that container, and then
expose the app on port `8080`.

Once running, you can connect to a new terminal within the dev container by using

```bash
make node-dev-shell-connect
```

Within that dev shell you can run the usual npm commands etc.

## Testing etc.

The following commands are available for running locally, or within a CI environment:

```bash
make lint
make test
make coverage
```

However, if you wish to enter the dev-container and run commands with `npm` you can use the following:

```bash
make node-dev-shell
```