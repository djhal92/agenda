<script lang="ts">
    import "../app.css"
	import { goto } from "$app/navigation";
    import Footer from "$lib/Footer.svelte";
import Iframe from "$lib/Iframe.svelte";
    import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		signInWithEmailAndPassword,
		signOut,
		type User,
		onAuthStateChanged,
		signInWithPopup,
		GoogleAuthProvider
	} from 'firebase/auth';
	import { onMount } from 'svelte';
  import Clock from "$lib/Clock.svelte";
    


	let email = '';
	let password = '';
	let user: User | null;

	const firebaseConfig = {
		apiKey: "AIzaSyA0Azr_jrqLLQLXvxiWd8chxj10By4GwXY",
  authDomain: "agendalogin-e959b.firebaseapp.com",
  projectId: "agendalogin-e959b",
  storageBucket: "agendalogin-e959b.appspot.com",
  messagingSenderId: "1092938376633",
  appId: "1:1092938376633:web:07bd28d96a0c01a93b0268"
	};

	const app = initializeApp(firebaseConfig);

	const login = () => {
		const auth = getAuth(app);
		signInWithEmailAndPassword(auth, email, password).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
	};

	const loginWithGoogle = () => {
		const auth = getAuth(app);
		signInWithPopup(auth, new GoogleAuthProvider());
	};

	
    const aanmelden = () => {
        goto("https://forms.gle/gDijMJT6ekPoYKvD7");
    }
	const logout = async () => {
		const auth = getAuth(app);
		signOut(auth);
	};

	onMount(async () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (newUser) => {
			console.log(user);
			user = newUser;
		});
	});

</script>



<div>
    <nav class="navbar">
        <div class="navbar-start ">
            <div class="text-lg font-bold">
                <h1>Agenda Dierenambulance de Wissel</h1>
            </div>
        </div>
        <div class="navbar-center">
            <Clock />

        </div>
        <div class="navbar-end">
            {#if user}
            <div class="flex w-60 items-center mr-28">
                <div class="flex flex-row gap-2">
                    <div class="mt-2">
                        <p>{user.email}</p>
                    </div>
                    <div class="flex flex-row gap-2">
                        
                        <button class="btn btn-square rounded-md bg-base-100 w-24 h-6" on:click={aanmelden}>Aanmelden</button>
                    <button class="btn btn-square rounded-md bg-base-100 w-24 h-6" on:click={logout}>Logout</button>
                </div>

            </div>
        </div>
        {:else}
            <!-- <input type="email" id="email" placeholder="email" bind:value={email} />
            <input type="password" id="password" placeholder="password" bind:value={password} />
            <button on:click={login}>Login</button> -->
            <button class="btn btn-square rounded-md bg-base-100 w-40 h-6" on:click={loginWithGoogle}>Login with Google</button>
            {/if}
            </div>
    </nav>
    <div>
        <div class="flex-1">
            <div class="flex flex-col">
                {#if user}
                <div>
                    <Iframe />
                    <Footer />

                </div>
                {:else}
                <div class="flex justify-center w-full h-full">
                    <div class="w-96 h-96 pt-44 text-center">
                        <h1>Welkom hier bij de Agenda pagina.</h1>
                        <h2>Voor je verder gaat log even in.</h2>
                        <button class="btn btn-square rounded-md bg-base-100 w-40 h-6 mt-7 ml-2" on:click={loginWithGoogle}>Login with Google</button>
    
                    </div>
                </div>
                
                {/if}
                
                    
            </div>
    
        </div>

        </div>
    
    </div>


 
  