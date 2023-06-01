const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');
const means = document.querySelector('.meaning');
const que = document.querySelector('.word');
const speach=document.querySelector('.speach');
const antonyms=document.querySelector('.antonyms');
const read=document.querySelector('.read');
const example=document.querySelector('.exampel');
const synonyms=document.querySelector('.synonyms');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getInfoWord(form.elements[0].value);
});

const getInfoWord = async (word) => {
  

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();


    let ques = data[0].word;
    let meaning = data[0].meanings[0].definitions[0].definition;
    let partOfSpeech=data[0].meanings[0].partOfSpeech;
    let anto=data[0].meanings[0].antonyms;
    let exapm=data[0].meanings[0].definitions[0].example;
    let syno=data[0].meanings[0].synonyms;
    que.innerHTML = `Word:${ques}`;
    means.innerHTML = `Meaning:${meaning===undefined?"Not Found":meaning}`;
    
    speach.innerHTML=`${partOfSpeech
    }`;
    example.innerHTML=`Example:${exapm===undefined?"Not Found":exapm}`;
    antonyms.innerHTML=`Antonyms:`
   if(anto.length===0){
    antonyms.innerHTML=`Antonyms:${"Not found"}`;
   }else{
    for(let i=0;i<anto.length;i++){
      antonyms.innerHTML+=`<li>${anto[i]}</li> `;
    }
   }

   synonyms.innerHTML=`Synonyms:`
   if(syno.length===0){
    synonyms.innerHTML=`Synonyms:${"Not found"}`;
   }else{
    for(let i=0;i<syno.length;i++){
      synonyms.innerHTML+=`<li>${syno[i]}</li> `;
    }
   }

    

     read.innerHTML=` <a href="${data[0].sourceUrls}" target="_blank">Read More</a>`;
  } catch (error) {
    resultDiv.innerHTML=`<p class="sorry">Sorry !!! , this could not be found !!!!</p>`
  }









    // try {
    //     const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    // const data=await response.json();

    //  const definations=data[0].meanings
    // [0].definitions[0];
    // const meanings=data[0].meanings
    // [0].definitions
    // [0].definition;

    // resultDiv.innerHTML=`<p><strong>Word:</strong>
    // ${data[0].word}
    // </p>
    // <p class:"part">${data[0].meanings[0].partOfSpeech}</p>
    // <p><strong>Meaning:</strong>${meanings===undefined?"Not found":meanings}</p>
    // <p><strong>Example:</strong>${definations.example===undefined?"not Found":definations.example}</p>
    // <p><strong>Antonyms:</strong></p>
    // `
    // if(definations.antonyms.length===0){
    //     resultDiv.innerHTML+=`<span>Not found</span>`
    // }
    // for(let i=0;i<definations.antonyms.length;i++){
    //     resultDiv.innerHTML+=`<li>${definations.antonyms[i]}</li>`
    // }

    // resultDiv.innerHTML+=`<div><a href="${data[0].sourceUrls
    // }" target="_blank" >Read More</a></div>`
    // } catch (error) {
    //     resultDiv.innerHTML=`<p>Sorry !!! , this could not be found !!!!</p>`
    // }

    
     
   
}