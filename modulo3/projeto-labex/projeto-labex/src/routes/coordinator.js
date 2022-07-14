export const goToIndex = (navigate) => {
    navigate("/")
}
export const goToListTrips = (navigate) => {
    navigate("/trips/list")
}
export const goToApplicationForm = (navigate) => {
    navigate("/trips/application")
}
export const goToLogin = (navigate) => {
    navigate("/login")
}
export const goToAdmin = (navigate) => {
    navigate("/admin/trips")
}
export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create")
}
export const goToDetails = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}
export const goBack = (navigate) => {
    navigate(-1)
}