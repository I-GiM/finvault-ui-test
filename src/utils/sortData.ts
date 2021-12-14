export const sortAllData = (par: string, dataSource: any[], sort: any) => {
  if (par === "dsc") {
    const newSource = dataSource.sort((a, b) => {
      const fa = a[sort],
        fb = b[sort]

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    return newSource;
  }

  if (par === "asc") {
    const newSource = dataSource.sort((a, b) => {
      const fa = a[sort],
        fb = b[sort]

      if (fb < fa) {
        return -1;
      }
      if (fb > fa) {
        return 1;
      }
      return 0;
    });
    return newSource;
  }
};
