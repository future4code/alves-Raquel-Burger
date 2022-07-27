export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSingUp = (navigate) => {
    navigate("/singup")
}

export const goToComment = (navigate, id ) => {
    navigate(`/comment/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}