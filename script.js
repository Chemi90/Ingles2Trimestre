document.addEventListener('DOMContentLoaded', () => {
    // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
    // Similar al proporcionado en el código de referencia
    const quizData = [
        {
            question: "1. ¿Cuál modal se utiliza comúnmente para dar consejos?",
            a: "can",
            b: "must",
            c: "should",
            d: "will",
            correct: "c",
            explanation: "Should se utiliza para dar consejos."
        },
        {
            question: "2. ¿Cuál es la estructura correcta del primer condicional?",
            a: "If + present simple, will + base form",
            b: "If + past simple, would + base form",
            c: "If + past perfect, would have + past participle",
            d: "If + present perfect, will have + past participle",
            correct: "a",
            explanation: "El primer condicional usa 'If + present simple, will + base form' para situaciones reales/futuras."
        },
        {
            question: "3. ¿Qué elemento NO es típico incluir en una carta de presentación?",
            a: "Detalles personales irrelevantes",
            b: "Experiencia laboral relevante",
            c: "Habilidades y calificaciones",
            d: "Razones para aplicar al puesto",
            correct: "a",
            explanation: "Los detalles personales irrelevantes no se deben incluir en una carta de presentación."
        },
        {
            question: "4. ¿Qué expresa 'must' en el contexto de los verbos modales?",
            a: "Consejo",
            b: "Obligación",
            c: "Permiso",
            d: "Posibilidad",
            correct: "b",
            explanation: "'Must' expresa obligación."
        },
        {
            question: "5. ¿Cuál es la diferencia principal entre 'may' y 'might' al expresar posibilidad?",
            a: "No hay diferencia; son intercambiables",
            b: "'May' expresa una posibilidad más fuerte que 'might'",
            c: "'Might' se usa solo en preguntas",
            d: "'May' se usa para dar permiso, no para posibilidad",
            correct: "b",
            explanation: "'May' expresa una posibilidad más fuerte que 'might'."
        },
        {
            question: "6. ¿Cuál de los siguientes adjetivos es el opuesto de 'generous'?",
            a: "Stingy",
            b: "Kind",
            c: "Helpful",
            d: "Friendly",
            correct: "a",
            explanation: "El opuesto de 'generous' es 'stingy'."
        },
        {
            question: "7. Completar: able to work alone: ________.",
            a: "Dependent",
            b: "Independent",
            c: "Unreliable",
            d: "Cooperative",
            correct: "b",
            explanation: "La palabra que completa es 'independent', que significa capaz de trabajar solo."
        },
        {
            question: "8. ¿En qué contexto se usa 'have to' para expresar necesidad?",
            a: "Sugerencia",
            b: "Obligación externa",
            c: "Posibilidad",
            d: "Permiso",
            correct: "b",
            explanation: "'Have to' se usa para expresar una obligación impuesta por circunstancias externas."
        },
        {
            question: "9. ¿Cuál es la estructura correcta para el segundo condicional?",
            a: "If + past simple, would + base form",
            b: "If + present simple, will + base form",
            c: "If + present perfect, would have + past participle",
            d: "If + past perfect, had + past participle",
            correct: "a",
            explanation: "El segundo condicional utiliza 'If + past simple, would + base form' para hipótesis o situaciones imaginarias."
        },
        {
            question: "10. ¿Cuál de los siguientes aspectos es crucial incluir en una carta de presentación?",
            a: "Color favorito",
            b: "Experiencia laboral relevante",
            c: "Pasatiempos",
            d: "Planes de vacaciones",
            correct: "b",
            explanation: "Incluir experiencia laboral relevante es crucial en una carta de presentación."
        },
        {
            question: "11. ¿Qué expresa 'could' cuando se refiere al pasado?",
            a: "Obligación",
            b: "Consejo",
            c: "Permiso o habilidad pasada",
            d: "Futuro en el pasado",
            correct: "c",
            explanation: "'Could' se usa para hablar de permiso o habilidad en el pasado."
        },
        {
            question: "12. ¿Cuál es la diferencia principal entre 'will' y 'going to' para expresar futuro?",
            a: "'Will' es para decisiones espontáneas; 'going to' para planes",
            b: "'Will' es más formal que 'going to'",
            c: "'Going to' es solo para promesas",
            d: "No hay diferencia; son intercambiables",
            correct: "a",
            explanation: "'Will' se utiliza para decisiones tomadas en el momento de hablar; 'going to' para planes o intenciones previas."
        },
        {
            question: "13. ¿Cuál adjetivo describe mejor a alguien que siempre ayuda a los demás en la oficina?",
            a: "Competitive",
            b: "Supportive",
            c: "Independent",
            d: "Ambitious",
            correct: "b",
            explanation: "'Supportive' describe a alguien que siempre está dispuesto a ayudar."
        },
        {
            question: "14. ¿Cuál es el opuesto de 'optimistic'?",
            a: "Pessimistic",
            b: "Realistic",
            c: "Ambitious",
            d: "Supportive",
            correct: "a",
            explanation: "El opuesto de 'optimistic' es 'pessimistic'."
        },
        {
            question: "15. ¿Qué verbo modal se usa para expresar permiso de manera formal?",
            a: "Can",
            b: "Could",
            c: "Might",
            d: "Must",
            correct: "b",
            explanation: "Could se usa para expresar permiso de manera formal."
        },
        {
            question: "16. En el segundo condicional, ¿cuál es la forma correcta del verbo en la cláusula 'if'?",
            a: "Present simple",
            b: "Past simple",
            c: "Future simple",
            d: "Present perfect",
            correct: "b",
            explanation: "En el segundo condicional, la cláusula 'if' utiliza el past simple."
        },
        {
            question: "17. ¿Qué elemento es crucial incluir en el párrafo de apertura de una carta de presentación?",
            a: "Una descripción detallada de todos tus trabajos anteriores",
            b: "La razón por la que estás interesado en el puesto",
            c: "Una lista de tus hobbies",
            d: "Detalles sobre tu salario actual",
            correct: "b",
            explanation: "En el párrafo de apertura, es crucial incluir la razón por la que estás interesado en el puesto."
        },
        {
            question: "18. ¿Cuál de los siguientes verbos modales NO se utiliza para dar consejos?",
            a: "Should",
            b: "Ought to",
            c: "Must",
            d: "Would",
            correct: "d",
            explanation: "'Would' no se utiliza comúnmente para dar consejos."
        },
        {
            question: "19. ¿Cuál es la estructura correcta del tercer condicional?",
            a: "If + present simple, would + base form",
            b: "If + past perfect, would have + past participle",
            c: "If + past simple, would + base form",
            d: "If + present perfect, will have + past participle",
            correct: "b",
            explanation: "El tercer condicional usa 'If + past perfect, would have + past participle' para situaciones hipotéticas pasadas."
        },
        {
            question: "20. Al describir a alguien capaz de tomar decisiones rápidas, ¿cuál adjetivo es el más apropiado?",
            a: "Decisive",
            b: "Indecisive",
            c: "Unreliable",
            d: "Dependable",
            correct: "a",
            explanation: "'Decisive' describe a alguien capaz de tomar decisiones rápidas."
        },
        {
            question: "21. ¿Qué verbo modal se utiliza para hablar sobre una obligación fuerte que viene de afuera del hablante?",
            a: "Must",
            b: "Have to",
            c: "Ought to",
            d: "Should",
            correct: "b",
            explanation: "'Have to' se utiliza para hablar sobre obligaciones fuertes que vienen de una fuente externa al hablante."
        },
        {
            question: "22. ¿Qué expresión modal se usa para hacer sugerencias?",
            a: "Must",
            b: "Can",
            c: "Might",
            d: "Should",
            correct: "d",
            explanation: "'Should' se usa comúnmente para hacer sugerencias."
        },
        {
            question: "23. ¿Cuál es la forma correcta de usar un condicional cero?",
            a: "If + present simple, present simple",
            b: "If + past simple, would + base form",
            c: "If + past perfect, would have + past participle",
            d: "If + present simple, will + base form",
            correct: "a",
            explanation: "El condicional cero se forma con 'If + present simple, present simple' para verdades generales."
        },
        {
            question: "24. ¿Qué NO es recomendable incluir en una carta de presentación?",
            a: "Experiencia relevante",
            b: "Información personal no relacionada",
            c: "Habilidades específicas para el trabajo",
            d: "Razones para aplicar al puesto",
            correct: "b",
            explanation: "La información personal no relacionada no debe incluirse en una carta de presentación."
        },
        {
            question: "25. ¿Cuál de estos verbos modales expresa posibilidad?",
            a: "Should",
            b: "Must",
            c: "Might",
            d: "Have to",
            correct: "c",
            explanation: "'Might' se utiliza para expresar posibilidad."
        },
        {
            question: "26. ¿Cuál es la estructura correcta para el primer condicional?",
            a: "If + present simple, will + base form",
            b: "If + past simple, would + base form",
            c: "If + present perfect, will have + past participle",
            d: "If + past perfect, would have + past participle",
            correct: "a",
            explanation: "El primer condicional se estructura como 'If + present simple, will + base form'."
        },
        {
            question: "27. ¿Qué adjetivo describe mejor a alguien que trabaja bien con otros?",
            a: "Independent",
            b: "Cooperative",
            c: "Indecisive",
            d: "Stingy",
            correct: "b",
            explanation: "'Cooperative' describe a alguien que trabaja bien con otros."
        },
        {
            question: "28. Cuando se habla de habilidades en una carta de presentación, es importante:",
            a: "Listar todas las habilidades que tienes",
            b: "Mencionar solo habilidades no relacionadas",
            c: "Enfocarse en habilidades relevantes para el puesto",
            d: "Evitar mencionar habilidades blandas",
            correct: "c",
            explanation: "Es importante enfocarse en habilidades relevantes para el puesto en una carta de presentación."
        },
        {
            question: "36. ¿Cuál modal se usa para hablar sobre una obligación en el pasado que no se cumplió?",
            a: "Must",
            b: "Had to",
            c: "Could have",
            d: "Should have",
            correct: "d",
            explanation: "'Should have' indica una obligación o recomendación en el pasado que no se cumplió."
        },
        {
            question: "37. ¿Qué estructura corresponde al segundo condicional?",
            a: "If + present simple, would + base form",
            b: "If + past simple, would + base form",
            c: "If + present perfect, will have + past participle",
            d: "If + past perfect, would have + past participle",
            correct: "b",
            explanation: "El segundo condicional se forma con 'If + past simple, would + base form' para situaciones hipotéticas."
        },
        {
            question: "38. ¿Cuál es un error común al escribir cartas de presentación?",
            a: "Ser demasiado breve",
            b: "Personalizar la carta para cada aplicación",
            c: "Repetir exactamente el mismo contenido del CV",
            d: "Mencionar por qué estás interesado en el puesto",
            correct: "c",
            explanation: "Repetir el contenido del CV es un error; la carta debe complementarlo, no duplicarlo."
        },
        {
            question: "39. ¿Qué verbo modal se utiliza para expresar una posibilidad futura?",
            a: "Can",
            b: "May",
            c: "Must",
            d: "Would",
            correct: "b",
            explanation: "'May' se utiliza para hablar sobre posibilidades futuras."
        },
        {
            question: "40. ¿Cómo se forma el tercer condicional?",
            a: "If + present simple, would + base form",
            b: "If + past simple, would + base form",
            c: "If + past perfect, would have + past participle",
            d: "If + present perfect, will have + past participle",
            correct: "c",
            explanation: "El tercer condicional usa 'If + past perfect, would have + past participle' para situaciones hipotéticas pasadas."
        },
        {
            question: "41. Al describir a alguien que se adapta fácilmente a cambios, ¿qué adjetivo es adecuado?",
            a: "Rigid",
            b: "Flexible",
            c: "Tough",
            d: "Shy",
            correct: "b",
            explanation: "'Flexible' describe a alguien que se adapta fácilmente a cambios."
        },
        {
            question: "42. ¿Cuál es una práctica recomendada al finalizar una carta de presentación?",
            a: "Agradecer al empleador por su tiempo",
            b: "Incluir una lista de referencias",
            c: "Solicitar una respuesta inmediata",
            d: "Reiterar todos los puntos anteriores",
            correct: "a",
            explanation: "Agradecer al empleador por su tiempo muestra cortesía y profesionalismo."
        },
        {
            question: "43. ¿Qué frase se utiliza para iniciar la conclusión de una carta de presentación?",
            a: "Para concluir,",
            b: "En resumen,",
            c: "Espero su respuesta,",
            d: "En espera de sus comentarios,",
            correct: "a",
            explanation: "'Para concluir,' es una manera formal de iniciar la conclusión en una carta de presentación."
        },
        {
            question: "44. ¿Cuál de los siguientes no es un uso común de los verbos modales?",
            a: "Habilidad",
            b: "Consejo",
            c: "Orden",
            d: "Permiso",
            correct: "c",
            explanation: "Los verbos modales generalmente no se usan para expresar órdenes directas."
        },
        {
            question: "45. ¿Qué estructura se usa en los condicionales mixtos?",
            a: "If + past simple, would + base form",
            b: "If + past perfect, would + base form",
            c: "If + past perfect, would have + past participle",
            d: "If + past simple, would have + past participle",
            correct: "b",
            explanation: "Los condicionales mixtos combinan la estructura del segundo y tercer condicional."
        },
        {
            question: "46. ¿Cuál de estos adjetivos es mejor para describir a alguien que siempre llega a tiempo?",
            a: "Punctual",
            b: "Relaxed",
            c: "Flexible",
            d: "Demanding",
            correct: "a",
            explanation: "'Punctual' describe a alguien que siempre llega a tiempo."
        },
        {
            question: "47. En una carta de presentación, ¿cuál es el propósito de mencionar cómo encontraste el anuncio de trabajo?",
            a: "Mostrar que has hecho tu investigación",
            b: "Rellenar espacio",
            c: "Demostrar tu red de contactos",
            d: "Personalizar la carta",
            correct: "a",
            explanation: "Mencionar cómo encontraste el anuncio muestra que has investigado sobre la empresa."
        },
        {
            question: "48. ¿Qué verbo modal se usa para expresar una recomendación fuerte?",
            a: "Should",
            b: "Must",
            c: "Could",
            d: "Might",
            correct: "b",
            explanation: "'Must' se usa para expresar una recomendación o necesidad fuerte."
        },
        {
            question: "49. ¿Cuál es la estructura correcta para expresar deseos o lamentos sobre el pasado?",
            a: "If + past simple, would + base form",
            b: "Wish + past simple",
            c: "Wish + past perfect",
            d: "If + past perfect, would have + past participle",
            correct: "c",
            explanation: "Se usa 'Wish + past perfect' para expresar deseos o lamentos sobre situaciones pasadas."
        },
        {
            question: "50. Al finalizar una carta de presentación, es importante:",
            a: "Solicitar una entrevista",
            b: "Repetir tu nombre completo",
            c: "Listar referencias",
            d: "Agradecer al lector por su tiempo",
            correct: "d",
            explanation: "Agradecer al lector por su tiempo demuestra cortesía y finaliza la carta de manera positiva."
        }        
    ];
    
    
    const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

function loadQuiz() {
    const quizQuestions = quizData.map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
    }).join('');
    quizForm.innerHTML = quizQuestions;
}

function submitQuiz() {
    const answers = quizData.map((_, index) => {
        return document.querySelector(`input[name="question${index}"]:checked`)?.value;
    });

    let score = 0;
    let resultsHTML = '';

    answers.forEach((answer, index) => {
        const questionElement = document.getElementById(`question-${index}`);
        if (answer === quizData[index].correct) {
            score++;
            resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${index + 1}: correcta.</b></a> ${quizData[index].explanation}</p>`;
            questionElement.classList.remove('incorrect');
        } else {
            resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${index + 1}: INCORRECTA.</b></a> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
            questionElement.classList.add('incorrect');
        }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
}

window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
loadQuiz();
});