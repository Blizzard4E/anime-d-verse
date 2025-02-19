export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.client) {
        let current_session = localStorage.getItem("session_token");
        console.log("checking cur_sess");
        if (!current_session) return;
        console.log("cur_sess", current_session);

        const runtimeConfig = useRuntimeConfig();

        const { userState } = useAuth();
        const formData = new FormData();
        formData.append("session_token", current_session);
        const response = await $fetch<UserState>(
            `${runtimeConfig.public.apiURL}/user`,
            {
                method: "POST",
                body: formData,
            }
        );

        if (response) {
            userState.value = response;
        } else {
            localStorage.setItem("session_token", "");
            userState.value = null;
        }

        return;
    }
});
