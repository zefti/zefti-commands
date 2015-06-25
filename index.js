var sys = require('sys');
var exec = require('child_process').exec;
var child;

exec("ls", function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout + '\n');
  sys.print('stderr: ' + stderr + '\n');
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});


exports.execute = function(cmd){
  exec(cmd, function (error, stdout, stderr) {
    sys.print('stdout: ' + stdout + '\n');
    sys.print('stderr: ' + stderr + '\n');
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
};

/*
var commands = require('zefti-commands');

 */