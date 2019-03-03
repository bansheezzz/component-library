export const Validation = {
  validateDate: (props, propName, componentName) => {
    const value = props[propName];
    if (!(value instanceof Date)) {
      return new Error(`${propName} in ${componentName} is not a number`);
    }
    return null;
  }
}