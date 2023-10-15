<script lang="ts">
  import { goto } from "$app/navigation";
  import {app} from "$lib/firebase/firebase";
  import {getAuth, signOut} from "firebase/auth"
  import Clock from "./Clock.svelte";
    
     const aanmelden = () => {
        goto("https://forms.gle/gDijMJT6ekPoYKvD7");
    }
	const logout = async () => {
		const auth = getAuth(app);
		signOut(auth);
	};

    const agendaClick = () => {
        goto("https://docs.google.com/spreadsheets/d/1UFzCuBSBzQdjTpzsshrh2BtXnJhmNcQCczyK5KW3VSs/edit?usp=sharing")
    }
    </script>


<div class="screenMob">
    <div class="mt-12 w-full h-full">
        <div class="text-center">
            <div class="">
                <Clock />
            </div>
            <h1 class="underline">Je zit op een mobiel device</h1>
            <p>Klik daarom hier onder op button</p>
            <button class="btn btn-square btn-base-100 w-80 ml-2 mt-1" on:click={agendaClick}>Agenda</button>
            <button class="btn btn-square btn-base-100 w-80 ml-2 mt-1" on:click={aanmelden}>Aanmelden</button>
            <button class="btn btn-square btn-base-100 w-80 ml-2 mt-1" on:click={logout}>Logout</button>

        </div>
    </div>
</div>
    <div class="screenDesk">
        <div class="w-full h-full">
            <div class="ml-96">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img alt="picture" src="/dieren.gif" />
            </div>
            <div class="border-0 rounded-md">
                <!-- svelte-ignore a11y-missing-attribute -->
                <iframe class="w-[1240px] h-[920px] rounded-md" src="https://docs.google.com/spreadsheets/d/1UFzCuBSBzQdjTpzsshrh2BtXnJhmNcQCczyK5KW3VSs/edit?usp=sharing"></iframe>
                
            </div>
        </div>
        
    </div>
 <style>
    .screenMob {
        display: none;
        visibility: hidden;
    }
    .screenDesk {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 150px;
        margin-top: 10px;
        width: 1280px;
        visibility: visible;
    }
    @media only screen and (max-width: 640px) {
        .screenMob {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 345px;
            visibility: visible;
        }
        .screenDesk {
            display: none;
            visibility: hidden;
        }
    }
 </style>