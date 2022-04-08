export const createObj = () => {
  const cssValue = [
    {
      property: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
      values: ['100', '200', '300', '400'],
    },
    {
      property: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
      values: ['200', '300', '400', '500'],
    },
  ];

  type TypeMap = {
    [key: string]: string[];
  };

  let init: { [key: string]: string }[] = [];
  const result = cssValue.reduce((acc, cur) => {
    const { property, values } = cur;
    acc.push(
      property.map((proper, index) => ({
        [proper]: values[index],
      })) as {}
    );
    return acc;
  }, init);

  console.log('result', result);

  let start: { [key: string]: string } = {};
  const final = result.reduce((acc, cur) => {
    for (let value in cur) {
      console.log('cur', cur);
      console.log('value', value);
      Object.assign(acc, value);
    }
    return acc;
  }, start);

  console.log(final);
};
