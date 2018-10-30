Package.describe({
  name: 'harrison:papa-parse',
  summary: 'A powerful, in-browser CSV parser for big boys and girls',
  git: 'https://github.com/harrisonhunter/papa-parse-meteor.git',
  version: '1.1.4'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.3");
  api.use("jquery");
  api.addFiles('papa-parse.js', ['client', 'server']);
  api.export('Papa', ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('harrison:papa-parse');
  api.addFiles('papa-parse-tests.js', ['client', 'server']);
  api.export('Papa',  ['server', 'client']);
});
