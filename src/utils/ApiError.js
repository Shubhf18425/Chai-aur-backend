class ApiError extends Error { // Fixed class name
  constructor(message = "Something went wrong", statusCode = 500, errors = [],
    statck = ""
  ) { // Added default value for statusCode
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors; // Fixed assignment of errors
    if(statck){
        this.statck = this.statck
    }
    else{
        Error.captureStackTrace(this, this.constructor); // Fixed stack trace capture
        
    }

}
}

export default ApiError; 