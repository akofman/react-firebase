export const createMockSnapshot = (value, valueExists = true, ...otherProps) => ({
  ...otherProps,
  exists: () => valueExists,
  val: () => value,
})

const defaultDatabaseProps = {
  ref: path => ({
    on: (event, callback) => (
      callback(createMockSnapshot(`${path} value`))
    ),
  }),
}

export const createMockApp = (dataBaseProps = defaultDatabaseProps, ...otherProps) => ({
  ...otherProps,
  database: () => dataBaseProps,
})
