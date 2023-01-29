<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { connection } from "../backend-connection/connection"

const router = useRouter()

const username = ref('');
const password = ref('');
const errorMessage = ref('');

async function login(event) {
    event.preventDefault();
    let errorsDiv = document.querySelector(".input-container");
    if (!username.value) {
        errorsDiv.insertAdjacentHTML('beforeend', '<p>Please enter a username.</p>');
        return;
    }
    if (!password.value) {
        errorsDiv.insertAdjacentHTML('beforeend', '<p>Please enter a password.</p>');
        return;
    }
    try {
        const log = await connection.login(username.value, password.value);
        errorMessage.value = '';
    }
    catch (err) {
        if(!errorMessage.value) {
            errorsDiv.insertAdjacentHTML('afterend', `<p style="color: red">${err.message}</p>`);
            errorMessage.value = err.message;
        }
        username.value = ''
        password.value = ''
    }
    router.push({ path: '/menu' });
}
</script>

<template>
    <div class="login-form">
        <h2>Login</h2>
        <form @submit="login">
            <div class="input-container">
                <label>Username</label>
                <input type="text" name="username" v-model="username" required/>
            </div>
            <div class="input-container">
                <label>Password</label>
                <input type="password" name="password" v-model="password" required/>
            </div>
            <div class="submit-container">
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
</template>

<style scoped>

.error-message {
    color: red;
}
.login-form {
    max-width: 100% !important;
    overflow-x: hidden !important;
    padding: 0.5em;
    background: #FFFFFF;
    width: 80%;
    margin: 35% auto;
    border-radius: 0.5em;
    box-shadow: 0 0 0.5em #000;
}

.login-form h2 {
    font-size: 1.2em;
    font-family: sans-serif;
    font-weight: bold;
    color: #2A3B6F;
    text-align: center;
    margin: 0 0 0.5em 0;
    padding: 0;
}

.login-form .input-container {
    margin: 0.5em 0;
    color: #fff;
}

.login-form .input-container label {
    font-family: sans-serif;
    color: #2A3B6F;
    font-weight: bold;
    font-size: 0.9em;
    display: block;
    margin: 0 0 0.3em 0;
}

.login-form .input-container input {
    border: 1px solid #000;
    padding: 0.2em;
    font-family: sans-serif;
    font-size: 0.9em;
    color: #fff;
    background: #2A3B6F;
    margin: 0;
    width: 95%;
}

.login-form .submit-container {
    text-align: center;
    color: #fff;

}

.login-form .submit-container input {
    border: 1px solid #000;
    padding: 0.2em 0.5em;
    font-family: sans-serif;
    font-size: 0.9em;
    color: #fff;
    background: #2A3B6F;
    margin: 0 0 0.5em 0;
}
</style>