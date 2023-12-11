// const resultHandler = (status: any) => ({
//   messageHaveLoop: boolean;
//   data: any;
//   status: number;
//   message: any;
// })

const exceptionHandlers = {
  handle503() {
    console.log("handle503 :>> ");
    return {
      status: 503,
      problem: "Network Error",
    };
  },
  handle404(errorResponse) {
    console.log("handle404 :>> ", errorResponse);
    return {
      status: 503,
      problem: "Network Error",
    };
  },
  handle401(errorResponse) {
    console.log("handle401 :>> ", errorResponse);
    return {
      status: 503,
      problem: "Network Error",
    };
  },
  handle403(errorResponse) {
    console.log("handle403 :>> ", errorResponse);
    return {
      status: 503,
      problem: "Network Error",
    };
  },
  handle401ForRefreshToken() {
    return {
      status: 503,
      problem: "Network Error",
    };
  },
};

export default exceptionHandlers;
