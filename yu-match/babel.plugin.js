export default function () {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        path.node.name = name.split("").reverse().join();
      },
    },
  };
}
