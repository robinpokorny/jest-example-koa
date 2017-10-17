const greetings = require('./greetings');

test('greetings works', async () => {
  const ctx = {};

  await greetings(ctx, () => {});

  expect(ctx.body).toBe('Hello. Remember to subscribe.');
});

test('greetings works before-and-after', async () => {
  const ctx = {};
  const next = jest.fn(() => {
    expect(ctx.body).toBe('Hello.');
    ctx.body += ' I am content.';
  });

  await greetings(ctx, next);

  expect(next).toHaveBeenCalledTimes(1);
  expect(ctx.body).toBe('Hello. I am content. Remember to subscribe.');
});

test('greetings works complete', async () => {
  const ctx = {
    response: { set: jest.fn() }
    /* ADD OTHER MOCKS */
  };
  const next = jest.fn(() => {
    expect(ctx).toMatchSnapshot();
  });

  await expect(greetings(ctx, next)).resolves.toBeUndefined();

  expect(next).toHaveBeenCalledTimes(1);
  expect(ctx).toMatchSnapshot();
  expect(ctx.response.set.mock.calls).toMatchSnapshot();
});
