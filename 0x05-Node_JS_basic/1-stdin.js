function printWelcome() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function() {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      process.stdout.write('Your name is: ' + chunk);
    }
  });
  process.on('SIGINT', function() {
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
  });
}

printWelcome();
