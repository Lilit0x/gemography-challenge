
const errorResponse = (
    errorMessage,
    errorCode = "001",
    statusCode = 400,
    errorStack = null,
    info = "An Error Occurred"
  ) => {
    return {
      error: { message: errorMessage, errorCode, stack: errorStack },
      statusCode,
      info
    }
}
  
const successResponse = (data, statusCode, meta, status = "Operation Successful") => {
    return { data, statusCode, meta, status }
}

export  {
    successResponse as success,
    errorResponse as error
}
  