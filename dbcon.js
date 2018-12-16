'use strict';

const mysqlx = require('@mysql/xdevapi');

const options = {
  host: 'localhost',
  port: 33060,
  password: '<passwd>',
  user: 'root',
  schema: 'mySchema' // created by default
};

mysqlx.getSession(options)
  .then(session => {
    return session
      .getSchema(options.schema)
      .createCollection('myCollection');
  })
  .then(collection => {
    return collection
      .add({ foo: 'bar' }, { baz: { qux: 'quux' } })
      .execute()
      .then(() => {
        return collection
          .find('foo = :value')
          .bind('value', 'bar')
          .execute(console.log);
      })
      .then(() => {
        return collection
          .remove('baz.qux = :value')
          .bind('value', 'quux')
          .execute();
      })
      .then(() => {
        return collection
          .getSession()
          .getSchema(options.schema)
          .dropCollection('myCollection');
      })
      .then(() => {
        return collection
          .getSession()
          .dropSchema('myCollection');
      })
      .then(() => {
        return collection
          .getSession()
          .close();
