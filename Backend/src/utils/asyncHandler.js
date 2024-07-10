const asyncHandler = (requestHandlerFunction) => {

    (req, res, next) => {
        Promise.resolve(requestHandlerFunction(req, res, next))
            .catch((err) => next(err))
    }
}

export default asyncHandler