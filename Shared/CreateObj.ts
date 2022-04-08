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

  // type TypeMap = {
  //   [key: string]: Array<string>[];
  // };

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
};
