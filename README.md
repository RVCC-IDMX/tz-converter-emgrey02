# Time Zone Converter App

This app made with NodeJS uses Moment.js and Yargs.js node libraries to show the current time in a specified time zone through command-line arguments.

## Usage:

```javascript
node tz [time zone] [--options]
```

## Command:

The user may enter one command: a time zone. A List of time zones can be retrieved by adding the option [--all](#--all)

```
tz [timezone] set a timezone to convert to
```

## Options:

```
--format   formats current time in specified timezone
--all      display all timezone options
--country  display timezone options for specified country
--help     Show help
--version  Show version number
```

### --format

This option requires that the user enters a time zone as a command before it. Without this tag, the time for the specified time zone will not be formatted:

```
$ node tz "America/Los_Angeles"

The time in Los Angeles is 2021-10-13T12:02:07-07:00
```

When the --format option exists, it will return the time in an easily readable way.

```
$ node tz America/Los_Angeles --format

In Los Angeles it is Wednesday, October 13th, 2021 at 12:03:44 PM
```

### --all

This option does not require a time zone as a command. It will return a table with all the time zones available to use as a command.

```
$ node tz --all
```

### --country

This option does not require a time zone as a command. It does, however, require a country specified by two capital letters after the option. It will return a table of time zones available within the specified country to be used as a command.

```
$ node tz --country US
```

If the country is omitted, there will be an error.

### --help

Using this option will return information on how to use the CLI.

```
$ node tz --help
```

### --version

Using this option will return the version of this project.

```
$ node tz --version
```

## npm modules

- [Moment](https://momentjs.com/)
- [Moment Timezone](https://momentjs.com/timezone/)
- [Yargs](https://yargs.js.org/)

## dev dependencies

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [AirBnB JavaScript style guide](https://github.com/airbnb/javascript)

## Author

- Emma Grey: [@emgrey02](https://www.github.com/emgrey02)
