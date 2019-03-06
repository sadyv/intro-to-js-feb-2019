var myName = '';
const sequence = [
    {
        instructions: 'Hello...',
        wait: 3000,
    },
    {
        instructions: `Is anyone there??`,
        startingHTML: 'hello',
        wait: 2000,
    },
    {
        instructions: `Please, if you are out there, try to communicate with me.`,
        startingHTML: 'hello',
        wait: 3000,
    },
    {
        instructions: `Someone from your js1 class broke the internet.`,
        startingHTML: 'hello',
        wait: 5000,
    },
    {
        instructions: `
            We need your help.
            From this world I can only communicate with you through javascript.
            <p>
            Can you help us?
</p>
            <p class="instructions-area">create a variable named <span>answer</span> and set it to <span>true</span></p>
            if You can....
            `,
        startingHTML: 'world',
        answer: function answer(vars) {
            console.log('answer', vars.answer);
            if (vars.answer === true) {
                console.log('yep');
                moveToNextScene();
            } else {
                console.log('nope');
                this.caseNot();
                resetHtml();
            }
        },
        caseNot: function() {
            document.querySelector('.instructions-error').innerHTML = `That's not right try again?!`
        }
    },
    {
        instructions: 'You.. you did it!',
        answer: 'test',
        wait: 2000,
    },
    {
        instructions: "I can't believe you did that so easy...",
        answer: 'test',
        wait: 2000,
    },
    {
        instructions: "Are you a web magician?",
        answer: 'test',
        wait: 2000,
    },
    {
        instructions: `who are you what is your name?
        <p class="instructions-area">
        create a variable called <span>myName</span> and put your name as a <span>string</span>.
</p>
            `,
        startingHTML: '',
        answer: function answer(vars) {
            console.log('name', vars.myName);
            if (typeof vars.myName === 'string' && vars.myName.length > 2) {
                console.log('yep');
                myName = vars.myName;
                moveToNextScene();
            } else {
                console.log('nope');
                this.caseNot();
                resetHtml();
            }
        },
        caseNot: function() {
            document.querySelector('.instructions-error').innerHTML = `That's not right try again?!`
        }
    },
    {
        instructions: "You are a liar.",
        answer: 'test',
        wait: 2000,
    },
    {
        instructions: "This cant be.",
        answer: 'test',
        wait: 2000,
    },
    {
        instructions: "My powers are still weak but I will try to append something to the page.",
        answer: 'test',
        wait: 2000,
    },
    {
        instructions:  `Don't you see.. It's you!`,
        startingHTML:  `
<div style='background: url("./img/old-scroll.png");; background-size: 500px 400px; width: 500px; height: 400px; background-repeat: no-repeat;' >

<p style="position: relative; padding: 4.3em 4em  1em 4em;">
    Legend has it that one day someone from Vinson's js1 class will become the webmaster.
</p>
<p style="position: relative; padding: 0 4em;">
    They will fix the internet.
</p>
<p style="position: relative; padding: 0 4em;">
    There will be no bugs.. only parties.
</p>
<p style="position: relative; padding: 0 4em;">
    Their name will be ${myName ? myName : 'some name'}
</p>
</div>
           
        `,
        answer: 'test',
    },
];
