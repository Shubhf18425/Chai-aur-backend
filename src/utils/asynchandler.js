const asynchandler = (requestHandler) => {
    (req , res ,next) =>{
        Promise.resolve(requestHandler(req , res ,next)).catch((err) => next(err))
    }
}
// prmise based async handler



export { asynchandler }



// const asyncHandler = (fn) =>async (req , res , next)=> {
//     try {
//         await fn(req , res , next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message || "Internal server error",
//             stack : process.env.NODE_ENV === "production" ? null : err.stack
//         })
//     }
// }


