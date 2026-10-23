type LimitConcurrency = {
  items: any[];
  limit: number;
  fn: (item: any) => any;
};

async function limitConcurrency({ items, limit, fn }: LimitConcurrency) {
  const results = [];
  const executing = [] as any[];

  // acts as a conveyor belt, it processes the items one by one and executes the function asynchronously
  for (const item of items) {
    const promise = Promise.resolve().then(() => fn(item));
    results.push(promise);

    if (limit <= items.length) {
      const execution: Promise<string[]> = promise.then(() =>
        executing.splice(executing.indexOf(execution), 1),
      );
      executing.push(execution);
    }

    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}

export default limitConcurrency;
