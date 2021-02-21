---
title: 'Speech to text app using inbuilt browser api'
description: 'Create a speech to text app using the SpeechRecognition object in the browser to generate text for your speech without using any third party packages'
path: '/blogs/speech-to-text-browser-api'
thumbnail: './cover.jpg'
author: 'allenabraham777'
name: 'Allen K Abraham'
published: true
date: '21-Feb-2020'
---

Speech recognition is been used across a wide variety of projects to help us achieve a better life. There are huge amount of services available based on this tech, even you will be trying to make something out of this. Whenever you get into the speech recognition the initial thing that we must take care is converting speech to text, most of you may create a model to achieve this by creating or collecting datasets, train and save the model and some will use pretraied models which may be free or paid. These all requires you to take some effort in setting it up and there is no guarantee that it would work in every system.

Out in the market there is an easy and compatible solution available which requires almost zero effort from your side, that is by using the web browsers. The web browsers which we are using are having a speech recognition engine shipped with it. Using this would save a lot of time in setting up a speech to text system for our NLP projects.

## How to use it

The `SpeechRecognition`  interface for the of Web Speech API is used for the speech recognition in browsers. The interface names will be different based on the browsers, but it's easy to solve it. 

For **Mozilla Firefox** the name of the interface is simply ```SpeechRecognition``` and for the **Google Chrome** it's ```webkitSpeechRecognition```, so initially you need to set the speech recognition engine.

### Setting up the engine
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
//SpeechRecognition = window.SpeechRecognition for Chrome
//SpeechRecognition = window.webkitSpeechRecognition for Firefox
```

### Initialisation
Next you'll need to create a constructor and set up its properties, there are huge number of properties available refer [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#properties) for more details. Here I'll be setting the lang property.

```javascript
const recognition = new SpeechRecognition();
recognition.lang = 'en-US'
```

### Start or Stop the mic

You could turn on and off the mic using the ```start()``` and ```stop()``` functions in the `recognition` object

```javascript
recognition.start(); //Starts the mic
recognition.stop();  //Stops  the mic
```

### Generating the transcript

After starting the mic you could speak through it. When you stop recording the results will be generated and stored in the `recognition` object. It could be recovered using the ```onresult()``` event.

```javascript
recognition.onresult = r => {
    const lastIndex = e.results.length - 1;
    const transcript = e.results[lastIndex][0].transcript;
    console.log(transcript);
}
```

There are no better resource than the official docs. You may refer [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) to learn more.

<br/>

# <center>Peace Out ✌️</center>