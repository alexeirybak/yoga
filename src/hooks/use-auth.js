

export function useAuth() {
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}