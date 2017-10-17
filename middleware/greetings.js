const greetings = async (ctx, next) => {
  ctx.body = 'Hello.';
  await next();
  ctx.body += ' Remember to subscribe.';

  // For showcase purposes only
  // Would fail for simple test, without response mock
  if (ctx.response) {
    ctx.response.set('Etag', 1234);
  }
};

module.exports = greetings;
