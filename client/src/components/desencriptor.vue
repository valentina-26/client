<script setup>
import { ref } from 'vue';

const inputText = ref('');
const outputText = ref('');
const showNoMessage = ref(true);

async function encrypt() {
  try {
    const response = await fetch('http://localhost:5000/home/encriptar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText.value }),
    });
    const result = await response.json();
    updateOutput(result.encryptedText);
  } catch (error) {
    console.error('Error during encryption:', error);
  }
}

async function decrypt() {
  try {
    const response = await fetch('http://localhost:5000/home/desencriptar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: inputText.value }),
    });
    const result = await response.json();
    updateOutput(result.decryptedText);
  } catch (error) {
    console.error('Error during decryption:', error);
  }
}

function updateOutput(text) {
  outputText.value = text;
  showNoMessage.value = text.length === 0;
}
</script>

<template>
  <div class="min-h-screen bg-[#F3F5FC] flex justify-center items-center p-4 md:p-8 lg:p-10">
    <div>
      <img src="../../public/Logo.png" class="absolute left-30 top-12 h-10 w-20">
    </div>
    <div class="w-full max-w-7xl flex flex-col md:flex-row gap-5">
      <div class="flex-1">
        <textarea
          v-model="inputText"
          class="w-full h-48 md:h-96 lg:h-[500px] p-4 bg-transparent text-base lg:text-xl rounded-lg resize-none focus:outline-none text-black "
          placeholder="Ingrese el texto aquí"
        ></textarea>
        <div class="mt-5 flex flex-col md:flex-row gap-4">
          <button
            @click="encrypt"
            class="bg-[#0A3871] hover:bg-[#072B61] text-white font-bold py-4 px-6 rounded-3xl text-base lg:text-xl transition-colors"
          >
            Encriptar
          </button>
          <button
            @click="decrypt"
            class="bg-[#D8DFE8] hover:bg-[#C8D1DC] text-[#0A3871] font-bold py-4 px-6 rounded-3xl text-base lg:text-xl transition-colors"
          >
            Desencriptar
          </button>
        </div>
      </div>
      <div class="bg-white rounded-3xl p-6 shadow-md w-full md:w-1/3 lg:w-1/4 min-w-[300px] flex flex-col items-center justify-center text-center">
        <div v-if="showNoMessage">
          <img src="/Muñeco.png" alt="Ilustración" class="w-full max-w-[200px] mb-5" />
          <p class="text-2xl font-bold mb-3">Ningún mensaje fue encontrado</p>
          <p class="text-base text-[#495057]">Ingrese el texto que desees encriptar o desencriptar</p>
        </div>
        <div v-else class="w-full break-words">
          {{ outputText }}
        </div>
      </div>
    </div>
  </div>
</template>


